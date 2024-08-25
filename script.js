document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const sound = new Audio('media/girlCry.mp3'); // Ensure the path to your sound file is correct
    sound.volume = 0.1; // Start with low volume
    sound.play();

    // Gradually increase the volume
    let volumeInterval = setInterval(function() {
        if (sound.volume < 1.0) {
            sound.volume = Math.min(sound.volume + 0.1, 1.0);
        } else {
            clearInterval(volumeInterval); // Stop when max volume is reached
        }
    }, 200); // Adjust the interval time to control how fast the volume increases
});
