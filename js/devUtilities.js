/* This file contains some simple utilities to help the web dev process. 
	For now, when the window resizes, it reports it to the console, and 
	whether or not an element has been clicked. If one a subset of elements
	of interest are clicked, it reports the dimensions of that element. The
	elements of interest for now are sections, asides, footers, and the navbar.
*/
$( document ).ready(function() {

	// Report that the document is ready
	console.log( "Document ready!" );
	// Declare a variable to store the last clicked element
	var lastClicked;
	// Declare and initialise an empty dimensions array
	var dimensions = null;

	// Given an element in the DOM, this method returns
	// the dimensions [w, h]
	function getDimensions(target)
	{
		var width = $(target).width();
		var height = $(target).height();
		dimensions = [];
		dimensions.push(width);
		dimensions.push(height);
		return dimensions;
	}

	// Report the width and height of the given element
	function reportDimensions(thisRef,classOrId){
		// Cache this reference
		var thisObj = thisRef;
		// Declare a variable to store the tagname of the last clicked element
		var lastClicked;
		// Declare a variable to store the attribute/s of interest for the last clicked element
		var lastClickedAttribute;
		// Set lastClicked with tagname of last clicked element
		var lastClicked = thisObj.prop("tagName").toLowerCase();

		// Get dimensions of the given object (this will be the object that was clicked)
		dimensions = getDimensions(thisObj);

		// If the function is called with two arguments...
		if(arguments[1] == 'id')
		{
			// get the id attribute of the last clicked element
			lastClickedAttribute = thisObj.attr('id');
			// concatenate the last clicked attribute to the last clicked element name
			lastClicked = lastClicked + "(Id: " + lastClickedAttribute + ")";
		}
		else
		{
			// get the class attribute of the last clicked element
			lastClickedAttribute = thisObj.attr('class');
			// concatenate the last clicked attribute to the last clicked element name
			lastClicked = lastClicked + "(Class: " + lastClickedAttribute + ")";
		}
		// Report the last clicked element name and dimensions
		console.log(lastClicked 
		+ " Dimensions: [w:"
		+dimensions[0]
		+",h:"
		+dimensions[1]+"]");
	}

	// Report the dimensions of header on click
	$("header").on("click", function() {
		reportDimensions($(this));
	});
	// Report the dimensions of section on click
	$("section").on("click", function() {
		reportDimensions($(this), 'id');
	});
	// Report the dimensions of footer on click
	$("footer").on("click", function() {
		reportDimensions($(this));
	});
	// Report the dimensions of navbar on click
	$("div.navbar-header").on("click", function() {
		reportDimensions($(this));
	});
	// Report the dimensions of the header-content element
	$("div.header-content").on("click", function() {
		reportDimensions($(this));
	});
	// Report the dimensions of aside on click
	$("aside").on("click", function() {
		reportDimensions($(this));
	});
	// When the window resizes this method is called
	$( window ).resize(function() {
		if(dimensions == null){
			console.log("Window resized. Nothing clicked yet!");
		}
	});
});
