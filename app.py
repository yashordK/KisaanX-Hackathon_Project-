from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "mistral"

def get_ai_response(message):
    try:
        payload = {
            "model": MODEL_NAME,
            "prompt": message,
            "stream": False  # Ensure response is returned all at once
        }
        headers = {"Content-Type": "application/json"}
        response = requests.post(OLLAMA_URL, data=json.dumps(payload), headers=headers)
        response_data = response.json()
        
        if "response" in response_data:
            return response_data["response"].strip()
        else:
            return "❌ AI Response Error: Unexpected API response format"
    except Exception as e:
        print(f"❌ AI API Error: {e}")
        return "❌ AI API Error: Could not process the request"

@app.route('/process', methods=['POST'])
def process_request():
    data = request.get_json()
    user_message = data.get("message", "")
    
    response_text = get_ai_response(user_message)
    
    return jsonify({"response": response_text})

if __name__ == '__main__':
    app.run(debug=True)
