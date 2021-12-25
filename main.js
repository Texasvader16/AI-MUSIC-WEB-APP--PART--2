song1 = "";
song2 = "";
counter = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function setup()
    {
canvas = createCanvas(600 , 500)
canvas.center()

video = createCapture(VIDEO)
video.hide()

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Working!!!')
}


function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results)

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY)

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY)
    }
}


function draw()
{
    image(video , 0 , 0 , 600 , 500)
}

function preload()
{
song1 = loadSound("Acapulco.mp3");
song2 = loadSound("Ghost.mp3");
}

function play()
{
counter = counter + 1
if(counter == 1)
{
song2.stop()
    song1.play()
console.log("Playing 1")
}
else{
    song1.stop()
    song2.play()
    console.log('Playing 2')
    counter = 0;
}

}