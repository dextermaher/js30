window.onload = function() {
  main();
}

let player, video, progress, progressBar, toggle, skipButtons, ranges;
function main() {
  player          = document.querySelector('.player');
  video  = player.querySelector('.viewer');
  progress = player.querySelector('.progress');
  progressBar = player.querySelector('.progress__filled');
  toggle = player.querySelector('.toggle');
  skipButtons = player.querySelectorAll('[data-skip]');
  ranges = player.querySelectorAll('.player__slider');
  addListeners();
}

function togglePlay() {
  if (video.paused) {
    video.play();
   
  }
  else{
    video.pause();
  }
  updateButton();
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;

}

function addListeners(){
  video.addEventListener('click', togglePlay);
  toggle.addEventListener('click', togglePlay);
  skipButtons.forEach(button => button.addEventListener('click', skip));
  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
  video.addEventListener('timeupdate', handleProgress);
  
  let mousedown = false;
  
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
  progress.addEventListener('mousedown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);

}

