
// Select color input
// Select size input
let gridTable, gridHeight, gridWidth, gridColor;
$(document).ready(function(){
    $('#sizePicker').submit(function(event){
        event.preventDefault();
        gridHeight = $('#inputHeight').val();
        gridWidth = $('#inputWeight').val();
        gridTable = $('#pixelCanvas');
                makeGrid(gridHeight, gridWidth);

    });
})

    // When size is submitted by the user, call makeGrid()
function makeGrid(row, column) {
    // Your code goes here!
    $('tr').remove();
        for (let i = 1; i <= row; i++){
        $('#pixelCanvas').append('<tr></tr>');
        for (let j = 1; j <= column; j++){
            $('tr').filter(':last').append('<td></td>');

        }
    }

}
    //adding color to cell
$('#pixelCanvas').on('click', 'td', function(){
    gridColor = $('#colorPicker').val();
    if($(this).attr('style')){
      $(this).removeAttr('style');
    }else {
      $(this).attr('style', 'background-color:' + gridColor);
     }
});








