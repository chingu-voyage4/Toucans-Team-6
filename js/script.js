// Initializes Side Navigation
$(".button-collapse").sideNav();

// Initialize carousel
onload  = start;

function start(){	
    var i = 1;

    function Move(){ 	
        i = (i % 4)  +1; // 4 is the Number of image in slider
        document.getElementById('i' + i).checked = true;
    }

    setInterval(Move, 8000); // Change img in 8 sec
}