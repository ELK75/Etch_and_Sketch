
var change = 'rgb(0,0,0)';
var clicked = false;
var fade = false;

$(document).ready(function() {
	number_of_rows(16);
});

function number_of_rows(rows_by_col) {
	for (i = 1; i <= rows_by_col * rows_by_col; i++) {
		/* creates blocks for the x axis */
		$('.container').append('<div class="x_block"></div>');
	}
	var size = (100/rows_by_col)+"%";
	$('.x_block').css("width", size);
	$('.x_block').css("padding-top", size);
	
	$(document).ready(function () {
		$('.x_block').on("mouseenter", function() {
			if (clicked) {
				change = "rgb(" + (Math.floor(Math.random()* 256)) + 
					',' + (Math.floor(Math.random()* 256)) + ','  
					+ (Math.floor(Math.random()* 256)) + ")";
			}
			if (fade) {
				var colArray = ["255", "230", "204", "179", "153", 
				"128", "102", "76", "51", "25", "0"];
				var col = $(this).css('backgroundColor');
				for (i = 0; i <= 10; i++) {
					if ('rgb(' + colArray[i] + ", " + colArray[i] + ", " + colArray[i] + ")" == col) {
						col = 'rgb(' + colArray[i+1] + ", " + colArray[i+1] + ", " + colArray[i+1] + ")";
						break;
					}
				}
				change = col;
			}
			$(this).css('background-color', change);
	});
});
};

$(document).ready(function () {
	function clear() {
		change = 'rgb(0,0,0)';
		var rows_and_col = prompt("Specify how many rows / columns you would like.");
		$('.x_block').remove();
		number_of_rows(rows_and_col);
	}
	$('.clear_button').click(function() {
		fade = false;
		clicked = false;
		clear();
	});
	$('.random').click(function () {
		clicked = true;
		fade = false;
		clear();
	});
	$('.fade').click(function () {
		fade = true;
		clicked = false;
		clear();
	});
});
