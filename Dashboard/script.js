// 🌤 Fetch Weather Data using WeatherAPI
async function getWeather() {
    const apiKey = "4b6fde14fb5847c7ae0114618251102"; // Replace with your actual key
    const city = "Indore"; // Change dynamically if needed
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weather-info").innerHTML = 
            `${data.current.condition.text}, 🌡 ${data.current.temp_c}°C`;
    } catch (error) {
        document.getElementById("weather-info").innerHTML = "❌ Error fetching weather.";
    }
}

// 🌱 Function to Determine Season & Best Crops
function getSeasonAndCrops() {
    const month = new Date().getMonth() + 1; // Get current month (1-12)
    let season = "Not detected";  
    let bestCrops = [];

    if ([3, 4, 5].includes(month)) {
        season = "Summer ☀️";
        bestCrops = ["Mango 🥭", "Watermelon 🍉", "Tomato 🍅"];
    } else if ([6, 7, 8, 9].includes(month)) {
        season = "Monsoon 🌧️";
        bestCrops = ["Rice 🌾", "Sugarcane 🍬", "Maize 🌽"];
    } else if ([10, 11].includes(month)) {
        season = "Autumn 🍂";
        bestCrops = ["Wheat 🌾", "Mustard 🌱", "Barley 🌾"];
    } else if ([12, 1, 2].includes(month)) {
        season = "Winter ❄️";
        bestCrops = ["Carrot 🥕", "Peas 🫛", "Potato 🥔"];
    }

    // Display season & best crops
    document.getElementById("season-info").innerHTML = `🌍 Current Season: <strong>${season}</strong>`;
    document.getElementById("best-crops").innerHTML = 
        `<strong>Best Crops:</strong> ${bestCrops.join(", ")}`;
}

// 🏁 Run Weather & Season Check on Page Load
window.onload = function() {
    getWeather();
    getSeasonAndCrops();
};
