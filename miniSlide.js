
//configure display time here in seconds
var displayTime = 10;
var fadeTime = 2; //has to match fade time from css

var self = this;

function hide(className){
	console.log('fading out:'+ className);
	var all = document.getElementsByClassName(className);
	for (var i = 0; i < all.length; i++) {
		all[i].classList.add('hidden');
		all[i].classList.remove('visible');
	}
}
function show(className){
	console.log('fading in:'+ className);
	var all = document.getElementsByClassName(className);
	for (var i = 0; i < all.length; i++) {
		all[i].classList.remove('hidden');
		all[i].classList.add('visible');
	}
}
function setImage(className, imagePath){
	console.log('setting background-image:'+ imagePath + 'for:' + className);
	var all = document.getElementsByClassName(className);
	for (var i = 0; i < all.length; i++) {
		all[i].style.backgroundImage = "url('" + imagePath + "')";
	}
}

//initial slideshow setup
setImage("imageA",slides[0]);
setImage("imageB",slides[1]);

//play the slideshow
var currentSlide = 0;
var nextSlideIndex = 1;
var currentCycle = 1;

function nextSlide(){
	currentSlide++;
	nextSlideIndex = (currentSlide + 1 )%slides.length;
	if (currentSlide % 2){
		setTimeout(function(){
			show("imageB");		
		},(displayTime - fadeTime) * 1000);
		setTimeout(function(){
			setImage("imageA",slides[nextSlideIndex]);
			nextSlide();
		},(displayTime + fadeTime) * 1000);
	}
	else{
		setTimeout(function(){
			hide("imageB");
		},(displayTime - fadeTime) * 1000);
		setTimeout(function(){
			setImage("imageB",slides[nextSlideIndex]);
			nextSlide();
		},(displayTime + fadeTime) * 1000);
	}
}

//start slides
nextSlide();