//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");

//when clicking on control list items
$(".controls li").click(function() {
	//deselect sibling elements
	$(this).siblings().removeClass("selected");
	//select clicked element
	$(this).addClass("selected");
	//cache current color
	color = $(this).css("background-color");
});
//when new color is clicked
$("#revealColorSelect").click(function(){
	//show color select or hide color select
	$("#colorSelect").toggle();
});
//when color sliders change 
	//update the new color span

//when add color is clicked
	//append the color to the controls ul
	//select the new color

//on mouse events on the canvas
	//draw lines
