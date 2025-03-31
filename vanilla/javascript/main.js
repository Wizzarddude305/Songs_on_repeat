document.querySelectorAll('.song_boxed').forEach(function (songBox) {
    songBox.addEventListener('click', function () {
        const songKey = songBox.getAttribute('data-song');
        const audioPlayer = document.getElementById('audio_player');
        const audioSource = document.getElementById('audio_source');

        const songs = {
        "The_One": "path/to/The_One.mp3",
        "Strongest": "path/to/Strongest.mp3",
        "Otonoke": "path/to/Otonoke.mp3"
        };

        audioSource.src = songs[songKey];
        audioPlayer.load(); 
        audioPlayer.play(); 
    });
});