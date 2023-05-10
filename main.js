song = "";

function preload()
{
    song = loadSound("Panic_At_the_Disco_-_High_Hopes.mp3");
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("poseNet is intialized!");
}

function draw()
{
    image = video(0, 0, 600, 500);
}