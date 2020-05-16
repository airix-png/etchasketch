//Globals

const squareGrid = document.querySelector('.squareGridContainer')
const canvas = document.querySelector ('#generateGrid')
const btn1 = document.querySelector ('#nordic');
const btn2 = document.querySelector ('#shading');
const btn3 = document.querySelector ('#spectrum');
const btn4 = document.querySelector ('#erase');
const btn5 = document.querySelector ('#refresh');

//Generate Grid
function createGrid(num) {
    squareGrid.innerHTML = "";  
    squareGrid.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
    squareGrid.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
    for (let c = 0; c < (num * num); c++) {
        const box = document.createElement('div');
        box.classList.add("square");
        box.addEventListener("mouseover", function (e) {
            box.style.backgroundColor = "#434C5E";
        })
            squareGrid.appendChild(box);
    }
}

//FUNCTIONS
function getRandColor(e){
    let letters = "0123456789ABCDEF"
    let getRandLetter = letters.charAt(Math.floor(Math.random()*16));
    let randColor = "#"
    for (i=0; i<6; i++) {
        getRandLetter = letters.charAt(Math.floor(Math.random()*16));
        randColor += getRandLetter;
    }
    return randColor;
}



                //Event Listeners
//GENERATOR
canvas.addEventListener('click', function(e){
        let generate = prompt ("Enter canvas size (integers 1-100 only)")
    createGrid(generate);
    })


                    //BUTTONS
//nord
btn1.addEventListener('click', function (e){
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(box => box.addEventListener('mouseover', function nord(e) {
        box.style.opacity = 1;
        box.style.backgroundColor = "#434C5E";
}))
})
//graphite
btn2.addEventListener('click', function (e){
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(box => box.addEventListener("mouseover", function shading(e){
        let opacity = Number(box.style.opacity);
        box.style.opacity = opacity += 0.1;
        box.style.backgroundColor = '#000';
        box.style.transition = 'background-color 0.25s';
		}

))})
    
//spectrum
btn3.addEventListener('click', function (e){
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(box => box.addEventListener("mouseover", function spectrum(e){
        box.style.opacity = 1;
        box.style.backgroundColor = getRandColor();
    }))
})
//erase
btn4.addEventListener('click', function (e){
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(box => box.addEventListener("mouseover",function (e) {
        box.style.background = "#ECEFF4"
    }))
})
//refresh
btn5.addEventListener('click', function(e){
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(box => box.style.backgroundColor = "");
})


createGrid(16)
