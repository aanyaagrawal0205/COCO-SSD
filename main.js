function setup() {
    canvas = createCanvas(380, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,300);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
img ="";
status = "";
objects = [];
function preload(){
    img=loadImage('dog_cat.jpg');
}
function draw() {
    image(img,0,0,380,300);
}
function draw() {
    image(video, 0, 0, 380, 300);
    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotResult)
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML  = "Number of objects"
            fill(r,g,b);

            fill("blue");
            percent = floor(objects[1].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelLoaded() {
    console.log("Model Loaded!!");
    status = true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
    }