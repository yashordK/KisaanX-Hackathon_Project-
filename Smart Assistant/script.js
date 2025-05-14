// Function to append messages to the chat box
function appendMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Speak out the bot's response (if sender is the bot)
    if (sender === "bot") {
        speakText(text);
    }
}

// Function to handle user input via text
document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let message = this.value.trim();
        if (message !== "") {
            appendMessage(message, "user");
            this.value = "";
            sendToBackend(message);
        }
    }
});

// Function to send user input to AI
function sendToBackend(message) {
    fetch("http://127.0.0.1:5000/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        appendMessage(data.response, "bot");
    })
    .catch(error => {
        console.error("Error:", error);
        appendMessage("❌ Unable to connect to AI.", "bot");
    });
}

// Speech Recognition (Voice Input)
function startListening() {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        alert("❌ Speech recognition is not supported in your browser. Try using Google Chrome.");
        return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-IN"; 
    recognition.interimResults = false; 
    recognition.maxAlternatives = 1; 
    recognition.continuous = false; 

    appendMessage("🎤 Listening... Speak now!", "bot");

    let hasSpoken = false; 

    recognition.onstart = function () {
        console.log("Listening started...");
    };

    recognition.onaudioend = function () {
        console.log("Audio stream ended.");
    };

    recognition.onspeechstart = function () {
        console.log("Speech detected...");
        hasSpoken = true; 
    };

    recognition.onspeechend = function () {
        console.log("Speech ended...");
    };

    recognition.onresult = function (event) {
        let voiceText = event.results[0][0].transcript;
        appendMessage(voiceText, "user");
        sendToBackend(voiceText); // Send recognized text to AI
    };

    recognition.onerror = function (event) {
        console.error("Speech recognition error:", event.error);
        if (event.error === "not-allowed") {
            alert("❌ Microphone access denied. Please allow microphone access in your browser settings.");
        } else if (event.error === "no-speech" && !hasSpoken) {
            appendMessage("❌ No speech detected. Try speaking again.", "bot");
        } else {
            appendMessage("❌ Could not recognize speech. Try again.", "bot");
        }
    };

    recognition.start(); 

    setTimeout(() => {
        if (!hasSpoken) {
            recognition.stop();
            console.log("Stopped listening due to timeout (No speech detected).");
            appendMessage("❌ No speech detected. Try speaking again.", "bot");
        }
    }, 5000);
}

// Text-to-Speech (Voice Output)
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN"; 
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}
