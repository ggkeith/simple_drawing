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

//update the new color span
function changeColor() {
	var r = $("#red").val();
	var b = $("#blue").val();
	var g = $("#green").val();
	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}
//when color sliders change 
$("input[type=range]").change(changeColor);

//when add color is clicked
	//append the color to the controls ul
	//select the new color

//on mouse events on the canvas
	//draw lines
