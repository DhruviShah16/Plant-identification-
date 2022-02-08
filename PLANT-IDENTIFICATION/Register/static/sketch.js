
let video;
let label = "waiting...";
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/EOSNguWbZ/';
//https://teachablemachine.withgoogle.com/models/8N-a_D9i3/';

//https://teachablemachine.withgoogle.com/models/5ivg-nr0_/
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  var cnv = createCanvas(400, 400);
   cnv.position( windowWidth/2 , windowHeight/6 );
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();
}

function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(255);

  image(video, 0,0,width, height);

	
	var ele = document.getElementById("output");
	var ele2 = document.getElementById("description");
    console.log(label)
   if(label== "NOT FOUND")
   {
      ele.innerHTML = "NOT FOUND";
      ele2.innerHTML = "Leaf is not visible";
   }

    else if(label == "Plumeria alba(champa)")
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
	
}



function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
		var button = document.getElementById("stop")
if(button.checked){	
  	label = results[0].label;
	}  	
classifyVideo();
	
}
