const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

audio.addEventListener('timeupdate', () => {
    const value = (audio.currentTime / audio.duration) * 100;
    seekBar.value = value;
});

seekBar.addEventListener('input', () => {
    const value = (seekBar.value / 100) * audio.duration;
    audio.currentTime = value;
});
