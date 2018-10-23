window.onload = function() {
  main();
}
  let speed, speedBar, video, volumeBar;

function main() {
  settingUpVariables();
  speed.addEventListener('mousemove', function(mouseEvent) {
    const speedBarY       = mouseEvent.pageY - this.offsetTop;
    const percent         = speedBarY / this.offsetHeight;
    const min             = 0.4; 
    const max             = 4;
    const height          = Math.round(percent * 100) + '%';
    const playbackRate    = percent * (max - min) + min;
    speedBar.style.height      = height;
    speedBar.textContent       = playbackRate.toFixed(2) + 'x';
    video.playbackRate    = playbackRate;
  });

  volume.addEventListener('mousemove', function(mouseEvent) {
    const volumeBarY       = mouseEvent.pageY - this.offsetTop;
    const percent         = volumeBarY / this.offsetHeight;
    const min             = 0.1; 
    const max             = 1;
    const height          = Math.round(percent * 100) + '%';
    const volume    = percent * (max - min) + min;
    volumeBar.style.height      = height;
    volumeBar.textContent       = volume.toFixed(2) + 'x';
    video.volume          = volume;
  });
}


function settingUpVariables() {
  volume    = document.querySelector('.volume')
  speed     = document.querySelector('.speed');
  volumeBar       = volume.querySelector('.volume-bar');
  speedBar       = speed.querySelector('.speed-bar');
  video     = document.querySelector('.flex');
}