noseX=0;
noseY=0;
rhandX=0;
lhandX=0;
width=0;
function preload(){

}
function setup(){
    canvas=createCanvas(550,350)
canvas.position(560,200)
video=createCapture(VIDEO)
video.size(550,350)
poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("Model Loaded")
}
function draw(){
    background("#808080");
    textSize(width)
    fill("orange")
    text("Scott", noseX,noseY)
}
function gotPoses(results){
    
if (results.length>0) {
    console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    rhandX=results[0].pose.rightWrist.x;
    lhandX=results[0].pose.leftWrist.x;
width=Math.floor(lhandX-rhandX);
}else{
    console.log("error")
}
}