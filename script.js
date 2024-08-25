// document.getElementById('playSoundBtn').addEventListener('click', function() {
//     const sound = new Audio('media/mm.mp3');
//     sound.play();
// });

document.getElementById('playSoundBtn').addEventListener('click', function() {
    const sound = new Audio('media/girlCry.mp3');
    sound.loop = true; // Enable looping
    sound.play();
});
