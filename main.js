status="";
value="";
function setup(){
    canvas= createCanvas(380,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    video.size(380,400);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
   document.getElementById("status").innerHTML="Object Detecting";
value= document.getElementById("in").value;
}
function modelloaded(){
    console.log("model is loaded");
    status=true;    
    }
function draw() {
        image(video, 0, 0, 400, 400);
    }