//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");

//when clicking on control list items
$(".controls").on("click", "li", function() {
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

//when "add color" is clicked
$("#addNewColor").click(function (){
	//append the color to the controls ul
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	//select the new color
	$newColor.click();
});
//on mouse events on the canvas
	//draw lines
