
var video = document.getElementById("video"); // Get the video
var btn = document.getElementById("myBtn");  // Get the button
// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause video";
    } else {
        video.pause();
        btn.innerHTML = "Play video";
    }
}
