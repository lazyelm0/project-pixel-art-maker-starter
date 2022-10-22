


$('#sizePicker').submit(function (event) {
    // preventing the button from submitting too early
    event.preventDefault();
    
    //saving user's input for the grid size
    var gridHeight = $('#inputHeight').val();
    var gridWidth = $('#inputWidth').val();
    
    // calling the funtiions, first to create the grid, then to color cells  
    makeGrid(gridHeight, gridWidth);
    addCellColor();

})

// creating the grid
function makeGrid(height, width) {

    // clearing previous tables
    $('tr').remove();
    
    //building the grid, first rows, then columns
    for (var i = 1; i <= height; i++) {
        $('#pixelCanvas').append('<tr></tr>');
    };
    for (var i = 1; i <= width; i++) {
        $('tr').append('<td></td>');
    };

}

// changing cell color
function addCellColor() {
    // adding event listener 
    $('td').click(event => {
        // saving pixel color
        pixelColor = $('#colorPicker').val();
        //applying chosen color to the cell
        $(event.currentTarget).css("background-color", pixelColor)
    });  
  
};
