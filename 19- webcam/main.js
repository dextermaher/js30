window.onload = function() {
  main();
}

let video;
let canvas;
let ctx;
let strip;
let snap;

function main() {
  setUp();
  getVideo();
  video.addEventListener('canplay', paintToCanvas);
}



function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false})
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`TO WHOM THIS MAY CONCERN, THIS WEBSITE IS IN NEED OF YOUR WEBCAM TO WORK PROPERLY. PLEASE TURN YOUR WEBCAM ON AT YOUR EARLIEST CONVENEINCE. BEST WISHES, MR. WEBSITE`, err);
    })

}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    
    ctx.drawImage(video, 0, 0, width, height);
    // FInd Pixels
    let pixels = ctx.getImageData(0, 0, width, height);
    // Mess With Pixels  
    pixels = redEffect(pixels);
    // Put Them Back In
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}


function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'goodLooking');
  link.innerHTML = `<img src="${data}" alt="Good Looking Person" />`;
  strip.insertBefore(link, strip.firstChild);
}



function redEffect(pixels) {
  for(let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 50; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
  }
  return pixels;
  
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 300] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 300] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}



function setUp() {
  video = document.querySelector('.player');
  canvas = document.querySelector('.photo');
  ctx = canvas.getContext('2d');
  strip = document.querySelector('.strip');
  snap = document.querySelector('.snap');
}
