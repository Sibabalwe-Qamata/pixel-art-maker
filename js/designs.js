//Declaring strict mode so that block-scope declarations can be used.
"use strict";
// Select color input
let color;
// Select size input
let height;
let width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();

    //Call the makeGrid function and pass the height, width.
    makeGrid(height, width);
})

function makeGrid(a,b) {
 $('tr').remove();
    for(var k = 0; k <= a; k++)
    {
     $('#pixelCanvas').append('<tr id=table'+k +'></tr>');
     for(var m =0 ; m <= b; m++){
        $('#table' +k).append('<td> </td>');
     }
    }
    $('td').click(function (event)
     { 
        color = $('#colorPicker').val();
        $(event.target).css('background-color', color);
      });
   
}
