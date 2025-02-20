document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const artists = document.querySelectorAll(".artist");
    const totalArtists = artists.length;
    
    function showArtist(n) {
        artists.forEach((artist, i) => {
            artist.style.display = (i === n) ? "block" : "none";
        });
    }
    
    document.querySelector(".prev").addEventListener("click", function () {
        index = (index === 0) ? totalArtists - 1 : index - 1;
        showArtist(index);
    });
    
    document.querySelector(".next").addEventListener("click", function () {
        index = (index === totalArtists - 1) ? 0 : index + 1;
        showArtist(index);
    });
    
    showArtist(index);
});
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("houdini-video");
    const volumeControl = document.getElementById("volume-control");

    volumeControl.addEventListener("input", function() {
        video.muted = false; // Unmute when user adjusts volume
        video.volume = this.value;
    });
});
