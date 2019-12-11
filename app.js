// When the document loads
$(document).ready(function(){
    // Defining the function that will create the grid
    function createGrid(){
        $("#container").empty(); // empties any .box divs inside the #container div
        var gridSize = +prompt("Enter a grid dimension", "Enter a value of 128 or less");
        while (gridSize > 128 || gridSize / gridSize != 1 || gridSize < 1){ //checks to see if positive number less than 128, or truly a number
            gridSize = +prompt("Max value = 128", "Enter a value of 128 or less");
        }
        gridSize = Math.floor(gridSize); // makes sure user input number is an integer 
        var containerSize = +$("#container").width(); // grabbing container size in order to find .box size 
        var boxSize = containerSize / gridSize // Calculating the box size
        for (i = 0; i < gridSize; i++){ // when each row is completed, counter will increase, initialize creation of another row 
            for (j = 0; j < gridSize; i++) {// Creates a row 
                var newBox = $("<div class='box'></div>"); // converting div into jQuery object
                // stores the newbox variable into the container 
                $("#container").append(newBox); // <div id="container"><div class='box'></div></div>
        }
    }
    $(".box").width(boxSize).height(boxSize); // Changes each div with .box to the defined width and height. 
    }
});