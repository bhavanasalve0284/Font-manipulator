noseX=0;
noseY=0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.console('pose', gotPose);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = "+ difference +"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}
function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("leftWristX = " + leftWrist +" rightWristX = "+ rightWristX +" difference = "+ difference);
    }
}
