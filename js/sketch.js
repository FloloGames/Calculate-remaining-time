let CurrentDownload;
let TargetDownload;
let CurrentDownloadSpeed;

let seconds;

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
  restDownload *= 1000;//mb
  print('Restdownload : ', restDownload)
  seconds = restDownload/speed;//In Seconds
  //restTime /= 60;//Now Minutes
  //restTime = round(restTime);
  //print('RestTime : ', restTime);
  //output.html(restTime + ' min.');
  
  let d = 0;
  let h = 0;
  let m = 0;
  while(seconds >= 60){
    seconds -= 60;
    m += 1;
  }
  while(m >= 60){
    m -= 60;
    h += 1;
  }
  while(h >= 24){
    h -= 24;
    d += 1;
  }

  output.html('Days: ' + d + '<br>' + 'Hour: ' + h + '<br>' + 'Minute: ' + m + '<br>' + 'Second: ' + round(seconds));

}
