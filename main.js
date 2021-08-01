nosex = 0;
nosey = 0;
difference = 0;
leftwristX = 0;
rightwristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); 
}

function modelLoaded()
{
    console.log('PoseNet is Initialized !');
}

function gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
       nosex = results[0].pose.nose.x;
       nosey = results[0].pose.nose.y;
       console.log("nosex = " + nosex + "nosey = " + nosey );
       leftwristX = results[0].pose.leftWrist.x;
       rightwristX = results[0].pose.rightWrist.x;
       difference = floor(leftwristX - rightwristX);
       console.log("rightWristX = " + rightwristX + "leftwristX = " + leftwristX + "difference = " + difference);
   }
}

function draw()
{
    background('#808080');
    fill('#03fcf4');
    stroke('#03fcf4');
    square(nosex, nosey, difference);
}

