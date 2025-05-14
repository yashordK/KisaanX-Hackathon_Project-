# 🌾 KisaanX – The Smart AI-Powered Farming Assistant
## An AI-powered, voice-enabled platform empowering farmers with real-time insights & direct connectivity
KisaanX is an intelligent, multi-language AI-powered platform designed to revolutionize Indian agriculture by providing real-time farming insights, price predictions, pest detection, direct marketplace access, farm-to-warehouse matching, and a farmer's community platform.
<br>
Farmers can interact with the assistant entirely through voice in their native language, making it accessible, easy to use, and impactful. The platform also allows text-based queries for those who prefer typing.

## 🌟 Key Features
### 🌍 Voice-Activated AI Assistant (Multi-Language)
Farmers can speak directly in their own language and receive responses via voice in the same language.
No typing required! Ideal for those who are not tech-savvy.
📌 Tech: Google Speech API, OpenAI Whisper, IndicNLP Library
### 🎥 AI-Powered Intro Guide in Regional Language
Upon login, farmers are greeted with an AI-generated video guide in their own language.
The video features a virtual farmer (AI-generated) in their traditional attire, explaining the platform.
📌 Tech: Deep Learning Video Generation, Text-to-Speech
### 🌾 AI-Based Crop Yield Prediction
Predicts expected yield based on weather patterns, soil quality, historical trends, and satellite data.
📌 Tech: Random Forest, XGBoost, LSTM, OpenWeather API, IMD datasets
### 📉 Real-Time Price Prediction & Forecasting
AI predicts market trends & expected crop prices to help farmers sell at the best time.
Uses government price data (Agmarknet, eNAM, FCI) and real-time analytics.
📌 Tech: ARIMA, LSTM, Time-Series Forecasting
### 🐛 AI-Based Pest & Disease Detection
Farmers can upload crop images, and AI will detect pests/diseases & suggest treatments.
📌 Tech: CNN (Deep Learning), OpenCV, Google Teachable Machine
### 🌱 AI-Powered Bargaining Bot
Helps farmers buy seeds, fertilizers, and tools at the best price.
AI compares products, suggests quality suppliers, and negotiates the best rates.
📌 Tech: NLP-based Recommendation System
### 🛒 Farmer Marketplace – Sell Without Middlemen
Farmers can list crops, set prices, and sell directly to buyers or warehouses.
Buyers can search for fresh produce, cutting out intermediaries.
📌 Tech: MERN Stack, Firebase for chat & transactions
### 🏪 Farm-to-Warehouse Matching System
Farmers can find nearby warehouses & cold storages to store their crops at the best rates.
Warehouse owners can list their facilities, allowing farmers to book storage space easily.
📌 Tech: Location-Based Search, Firebase
### 📢 Farmer’s Community Platform
Farmers can create groups, share experiences, ask for help, and discuss best farming practices.
Community-driven Q&A section powered by AI to suggest best answers based on previous discussions.
📌 Tech: AI-Powered Forum, NLP-based Content Categorization
### ⏰ Smart "When to Sell" Alerts
AI analyzes price trends and sends alerts when it's the best time to sell crops.
Farmers get real-time SMS/WhatsApp notifications.
📌 Tech: Price Monitoring API, Machine Learning
### ☔ Weather & Climate Alerts
Farmers receive real-time weather alerts for rain, drought, heatwaves, etc.
Helps them plan irrigation and crop protection strategies.
📌 Tech: OpenWeather API, IMD API
### 💰 AI-Powered Loan & Subsidy Finder
Farmers can check government subsidies & loan schemes based on their location and eligibility.
AI suggests best financing options tailored to the farmer’s needs.
📌 Tech: Web Scraping, Government API Integration
## 🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript, Bootstrap
Backend: Node.js, Express.js
Database: MongoDB / Firebase
AI Models:
Speech Recognition & Text-to-Speech (Google Speech API, OpenAI Whisper)
Crop Yield Prediction (Random Forest, XGBoost, LSTM)
Price Forecasting (ARIMA/LSTM Time-Series Analysis)
Pest Detection (CNN, OpenCV, Google Teachable Machine)
APIs & Libraries: OpenWeather API, Agmarknet API, Google Translate API
## 📸 Screenshots (To Be Added)
<hr>

## 🚀 How to Run Locally
1️⃣ Clone the Repository
```
git clone https://github.com/yashordK/KisaanX-Hackathon_Project-.git

```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Start the Server
```
npm start
```
4️⃣ Open in Browser
Go to http://localhost:3000

## 🔮 Future Enhancements
🔹 AI-powered subsidy finder for farmers <br>
🔹 Smart irrigation assistant for water usage optimization <br>
🔹 Mobile app version (React Native) <br>
🔹 More regional dialect support

## 🤝 Contributing
Contributions are welcome! Fork the repo, make changes, and submit a pull request.

## 📜 License
MIT License.

