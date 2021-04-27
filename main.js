song="";
function preload()
{
    song=loadSound("music.mp3");
   
}
function setup()
{
canva=createCanvas(450 , 450);
video=createCapture(VIDEO);
video.hide();
canva.position(500 , 200);

}
function draw()
{
 image(video , 0 , 0 , 450 , 450);
}
function songPlay()
{
    song.play();
    song.setVolume(0.5);
    song.rate(1)
}
function songStop()
{
    song.stop()
}