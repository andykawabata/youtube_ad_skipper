
console.log("in."); 
var initialSkipInProgress= true;


//SKIP ON DOM MUTATION

const targetNode = document.getElementsByClassName("video-ads").item(0);
const config = {childList: true}

function callback(mutationList, observer){
	asyncSkip();
}

var myObserver = new MutationObserver(callback);
myObserver.observe(targetNode, config);



//SKIP ON ARVIAL TO YOUTUBE OR REFRESH

window.addEventListener ("load", myMain, false);
function myMain () {
	console.log("into main");
	initialSkip();
}


//SKIP ON URL CHANGE

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){

	initialSkip();
}


//SKIP FUNCTIONS

function initialSkip(){
	count = 0;
	let skipper = setInterval(function(){ 
		console.log("initialSkip")
		let buttonList = document.getElementsByClassName("ytp-ad-skip-button-container");
		let skipButton = buttonList.item(0);
		if( skipButton || count >= 20){
			clearInterval(skipper);
			initialSkipInProgress = false;
			skipButton.click();
		}
		count++;
	},200);
}
//same as initialSkip except it also looks for the pop-up banner adds and closes them
function asyncSkip(){
	if(!initialSkipInProgress){
		count = 0;
		let skipper = setInterval(function(){ 
			console.log("asyncSkip")
			let buttonList = document.getElementsByClassName("ytp-ad-skip-button-container");
			let skipButton = buttonList.item(0);
			let closeButton = document.getElementsByClassName("ytp-ad-overlay-close-button")[0];
			if( skipButton || closeButton || count >= 20){
				clearInterval(skipper);
				if(skipButton)
					skipButton.click();	
				else if(closeButton)
					closeButton.click();
			}
			count++;
		},200);
	}
}



