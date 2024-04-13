function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    canvas.mouseReleased(identifySketch);
}
function preload(){
    model = ml5.imageClassifier("DoodleNet",modelloaded)
}
function modelloaded(){
    console.log("DoodleNet is linked.");
}
function draw(){
    stroke("black");
    strokeWeight(13);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function clearC(){
    background("white");
}
function identifySketch(){
    model.classify(canvas,showResult);
}
function showResult(error,result){
    if(error){
        console.log(error);
    }else{
        console.log(result);
        document.getElementById("sketch").innerHTML = "Sketch :"+result[0].label;
        youdraw= result[0].label;
        confidence = result[0].confidence*100;
        document.getElementById("confidence").innerHTML = "Confidence :"+Math.floor(confidence)+"%";
    }
}
rn = Math.floor(Math.random()*32);
sketches = ["apple" , "cake" ,"door" , "candle" , "matches" , "chair" , "bed" ,"clock","square", "hexagon" ,"butterfly", "camera" , "calculator","book","map","car","cat","cell phone","circle" , "diamond" ,"coffee_cup" ,"cookie", "crown","eye" ,"fish" ,"flower" , "hat" , "ice cream" ,"house","line","purse","envelope"];
sketch = sketches[rn];
document.getElementById("sketchto").innerHTML = "Sketch to be drawn : "+sketch;
function check(){
    if(sketch==youdraw){
        window.alert("Your drawing is very good!!!");
        clearC();
    }else{
        window.alert("You suck at drawing. Go get a life and emotional damage.");
        clearC();
    }
}