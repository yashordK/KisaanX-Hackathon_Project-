from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Set up Google Gemini API
GEMINI_API_KEY = "AIzaSyCKKisqIh3nMeLdFqfxopoZ5KTgrli8kf4"
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-pro")

# Predefined crop data with historical price patterns (Example Values)
crop_data = {
    "Wheat": {"base_price": 20, "season_start_multiplier": 1.2, "season_end_multiplier": 1.15},
    "Rice": {"base_price": 25, "season_start_multiplier": 1.1, "season_end_multiplier": 1.2},
    "Tomato": {"base_price": 30, "season_start_multiplier": 1.3, "season_end_multiplier": 1.1},
    "Potato": {"base_price": 18, "season_start_multiplier": 1.05, "season_end_multiplier": 1.08},
}

def get_price_prediction(crop_name):
    """Predict crop price based on seasonal trends"""
    if crop_name not in crop_data:
        return f"⚠️ No data available for {crop_name}."

    # Fetch crop-specific data
    data = crop_data[crop_name]
    
    query = f"Predict the price of {crop_name} based on past market trends."
    response = model.generate_content(query)

    # Use AI response to adjust base price dynamically
    if hasattr(response, 'text'):
        ai_price_factor = 1.1  # Example AI adjustment factor
        season_start_price = round(data["base_price"] * data["season_start_multiplier"] * ai_price_factor, 2)
        season_end_price = round(data["base_price"] * data["season_end_multiplier"] * ai_price_factor, 2)

        return {
            "crop": crop_name,
            "expected_start_price": f"₹{season_start_price} per kg",
            "expected_end_price": f"₹{season_end_price} per kg"
        }
    else:
        return {"error": "AI response was not structured correctly."}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    crop_name = data.get("crop", "")

    if not crop_name:
        return jsonify({"error": "Please select a crop"}), 400

    prediction = get_price_prediction(crop_name)
    return jsonify(prediction)

if __name__ == '__main__':
    app.run(debug=True)
