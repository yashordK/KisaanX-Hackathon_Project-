function fetchPrediction() {
    const crop = document.getElementById("cropSelect").value;
    if (!crop) {
        alert("Please select a crop.");
        return;
    }

    // Set the crop image
    document.getElementById("crop-image").src = getCropImage(crop);
    document.getElementById("crop-image").alt = crop;

    document.getElementById("result-text").innerText = "🔄 Fetching insights...";
    document.getElementById("result-container").style.display = "block";

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ crop: crop })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("result-text").innerText = data.error;
        } else {
            document.getElementById("result-text").innerHTML = `
                🌾 Crop: <strong>${data.crop}</strong> <br>
                📈 Start of Season Price: <strong>${data.expected_start_price}</strong> <br>
                📉 End of Season Price: <strong>${data.expected_end_price}</strong>
            `;
        }
    })
    .catch(error => {
        document.getElementById("result-text").innerText = "❌ Could not fetch insights.";
    });
}

// Function to return image URL based on selected crop
function getCropImage(crop) {
    const images = {
        "Wheat": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygGipJcwgXOOgdfS7SYkoc_fhRY70lASi1Gcz-_Q7TokZ2MK2TZvNwHg&s",
        "Rice": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6IfVmuVfiVFWJdtUyMBQw3Dht2or7cI2A3UQjjdyrvu-fwHxKnLCh-M&s",
        "Tomato": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDs8celDou7f3ZU5vXNNUTkZdw_-QO64o6Ag57wJoyoyEpIZPa9Q_ZEEU&s",
        "Potato": "https://t4.ftcdn.net/jpg/02/75/77/89/360_F_275778955_xxJe5fQvDy5oXbjupdJ162zLwU4sf3kT.jpg"
    };
    return images[crop] || "https://example.com/default.jpg"; // Default image if crop not found
}
