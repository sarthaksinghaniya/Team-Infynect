// This file contains the logic and functionality for the application.

// Function to display a greeting message
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.innerText = "Welcome to TEAM-INFYNECT!";
}

// Function to handle form submission for writing a poem
function submitPoem(event) {
    event.preventDefault();
    const poemInput = document.getElementById('poemInput').value;
    alert("Your poem has been submitted: " + poemInput);
}

// Function to record voice
function startRecording() {
    // Implement voice recording functionality here
    alert("Voice recording started.");
}

// Function to stop recording
function stopRecording() {
    // Implement stop recording functionality here
    alert("Voice recording stopped.");
}

// Function to play background music
function playBackgroundMusic() {
    const audio = new Audio('music/bg.mp3');
    audio.loop = true;
    audio.play();
}

// Event listeners for different functionalities
document.addEventListener('DOMContentLoaded', () => {
    displayGreeting();
    playBackgroundMusic();

    const poemForm = document.getElementById('poemForm');
    if (poemForm) {
        poemForm.addEventListener('submit', submitPoem);
    }

    const recordButton = document.getElementById('recordButton');
    if (recordButton) {
        recordButton.addEventListener('click', startRecording);
    }

    const stopButton = document.getElementById('stopButton');
    if (stopButton) {
        stopButton.addEventListener('click', stopRecording);
    }
});