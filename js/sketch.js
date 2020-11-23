let CurrentDownload;
let TargetDownload;
let CurrentDownloadSpeed;

let output;

let enterButton;

function setup(){
  createCanvas(0, 0);
  CurrentDownload = select('#CurrentDownload_state_input');
  TargetDownload = select('#TargetDownload_state_input');
  CurrentDownloadSpeed = select('#currentDownload_state_input');
  output = select('#output');
  enterButton = select('#enter_button');
}
function draw(){
  // background(44, 44, 130);
  enterButton.mousePressed(enterButtonPressed);
}
function enterButtonPressed(){
  let restDownload = TargetDownload.value()-CurrentDownload.value();
  let speed = CurrentDownloadSpeed.value();
  restDownload *= 1000;
  print('Restdownload : ', restDownload)
  let restTime = restDownload/speed;//In Seconds
  restTime /= 60;//Now Minutes
  restTime = round(restTime);
  print('RestTime : ', restTime);
  output.html(restTime + ' min.');
}
