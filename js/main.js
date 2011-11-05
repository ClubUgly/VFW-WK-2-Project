    //John Williams
    //November 3, 2011
    //VFW Deliverable 2
    //Online Beer Store

//alert("JavaScript works!");

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	//Create select field element and populate with options.
	function makeCats(){
		var formTag = document.getElementsByTagName("form"), //formTag is an array of all the form tags.
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=beerSelection.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = beerSelection[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	//Variable defaults
	var beerSelection = ["--Choose your can of beer--", "Bud Light", "Bud Select", "Sam Adams Cherry", "Sam Adams October Fest", "Corona", "Corona Light", "Milwaukee's Best" ];
	makeCats();
	
	//Set Link & Submit Click Events
/*	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearlink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData); */

});



