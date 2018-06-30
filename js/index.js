
$(function(){
//Declaring a Variables for Width, Height,Color
	const gridWidth = $( "#gridWidth" ).val();
	const gridHeight = $( "#gridHeight" ).val();
	const colorSelector = $( "#colorPicker");
//Calling makeGrind Function
	makeGrid(gridWidth,gridHeight);
//Calling updateColorPicker Function
	updateColorPicker(colorSelector.val());

	$( "#gridSize" ).submit(function( event ) {
		const gridWidth = $('#gridWidth').val();
		const gridHeight = $('#gridHeight').val();

		makeGrid(gridWidth,gridHeight);
  		event.preventDefault();
	});
//Implementing makeGrid Function
	function makeGrid(row,column) {
		const gridCanvas = $('#gridTable');
		
		gridCanvas.empty();
		let newWidth = '<tr>';
  		for (let i = 0; i < row; i++) {
  			newWidth+='<td></td>';
  		}
  		newWidth+='</tr>';
  		for (let i = 0; i < column; i++) {
  			gridCanvas.append(newWidth);
  		}
	}
//Implementing updateColorPicker Function
	function updateColorPicker(color) {
		colorSelector.css("background-color", color)
	}
	$("select").on('change',function() {
		updateColorPicker(colorSelector.val());
		$( "td" ).each(function() {
		    if ($( this ).css("background-color") !== "rgba(0, 0, 0, 0)") {
		    	$( this ).css("background-color", colorSelector.val());
		    }
		});
	});
	$( "table" ).on("click", "td", function( e ) {
		const activeColor = $( "#colorPicker" ).val();
		$( this ).css("background-color", activeColor);
	});
})