// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/5ivg-nr0_/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {
  var cnv = createCanvas(400, 400);
cnv.position( windowWidth/2, windowHeight/6 );
// Create the video
  video = createCapture(VIDEO);
  video.hide();
  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(255);

  // Draw the video
  image(video, 0,0,width, height);
//     for(let i=0;i<400;i++){
//      for(let j = 0; j < 400; ++j){
//        var c=video.get(i,j);
////      noStroke();
////      fill(c,25);
//        var h = hue(c);
//        var s = saturation(c);
//        var b = brightness(c);
//
//        if(h >= 75 && h <= 130){
//            stroke(c[0],c[1],c[2])
//            point(i,j)
//        }
//       }
//    }



	var ele = document.getElementById("output");
	var ele2 = document.getElementById("description");

if(label == "Plumeria alba(champa)")
	{
	    ele.innerHTML ="Plumeria alba";
		ele2.innerHTML = "Common Name: White Frangipani(champa) <br>\
                                  Habitate : Mexico, Central America, India <br>\
                                  Non-Poisonous <br>\
                                  Uses: Remedy for diarrhea, cure of itch, cough, asthama, fever, piles, blood disorder and tumor.";
	}
	else if(label == "Terminalia catappa(Badam)"){
		ele.innerHTML ="Terminalia catappa";
		ele2.innerHTML = "Common Name: Almond(Badam) <br>\
                                  Habitate : Asia,Africa,Australia<br> \
                                  Non-Poisonous                    <br>\
                                  Uses: Reduce PH in water,increase fertility,aid fishes ";
	}
	else if(label == "Ashoka Tree(Asopalav)"){
		ele.innerHTML ="Saraca asoca";
		ele2.innerHTML = "Common Name:Ashoka Tree <br>\
                                  Habitate : Himalaya,Near Mumbai,Nepal,Sri Lanka<br> \
                                  Non-Poisonous <br>\
                                  Uses: Used in indian rituals,dysmenorrhea cure and Menorrhagia,control bleeding in piles due to it's cold property.";
	}
	else if(label == "Money plant"){
		ele.innerHTML ="Epipremnum aureum";
		ele2.innerHTML = "Common Name:Golden pothos(Money plant) <br> \
                                  Habitate : India,Brazil,Africa<br> \
                                  Non-Poisonous <br>\
                                  Uses: Used in aquariums as it absorb nitrate and uses them for the growth of fishes.";
	}
	else if(label == "Juglans Regia(Wal nut)"){
		ele.innerHTML ="Juglans Regia";
		ele2.innerHTML = "Common Name:English Walnut <br>  \
                                  Habitate : India,Iran,US,Turky,Mexico. <br>\
                                  Non-Poisonous <br>\
                                  Uses: Used in diabetes,skin eruptions.";
	}else if(label == "Millettia pinnata(Karan)"){
		ele.innerHTML ="Millettia pinnata";
		ele2.innerHTML = "Common Name:Yellow oleander \
                                  Habitate : Mexico,Central America,India<br> \
				  Poisonous <br>\
                                  Uses: Treatment of Malaria,termination of embroyo , ulcer around genitals.";
	}
	//ele.appendChild(document.createTextNode(label))
	
  // Draw the emoji

}


// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
		var button = document.getElementById("stop")
if(button.checked){	
  	label = results[0].label;
	}  	
classifyVideo();
	
}
