//Globals

const squareGrid = document.querySelector('.squareGridContainer')
const canvas = document.querySelector ('#generateGrid')
const btn1 = document.querySelector ('#nordic');
const btn2 = document.querySelector ('#shading');
const btn3 = document.querySelector ('#spectrum');
const btn4 = document.querySelector ('#erase');
const btn5 = document.querySelector ('#refresh');
const btn6 = document.querySelector ('#gridlines')

//Generate Grid
function createGrid(num) {
    squareGrid.innerHTML = "";  
    squareGrid.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
    squareGrid.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
    for (let c = 0; c < (num * num); c++) {
        const box = document.createElement('div');
        box.classList.add("square");
        box.addEventListener("mouseover", final
        )
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
let mode=1
function final(){
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(box => box.addEventListener("mouseover", function (e) {
    switch(mode){
    case 1: {box.style.opacity = 1;
        box.style.backgroundColor = "#434C5E";}
        break;
    case 2: {let opacity = Number (box.style.opacity);
        box.style.opacity = opacity += 0.1;
        box.style.backgroundColor = 'black';}
    break;
    case 3: {
        box.style.opacity = 1;
        box.style.backgroundColor = getRandColor();}
        break;
    case 4: { 
        box.style.background = "#ECEFF4"
        break;}
    }}
))}
function shadedColor(box) {
    if (!box.style.background.includes("rgba")) {
        console.log("doesnt include");
        return "rgba(0,0,0,0.1)";
    }
    let alpha = box.style.background.split(',')[3];
    alpha = alpha.substr(0, alpha.length - 1);
    alpha = +alpha;
    alpha += 0.1;
    if (alpha >= 1) alpha = 0.99; // -> so ugly (for some reason setting rgba to alpha 1 it gets set to rgb without alpha)
    console.log(alpha);
    return "rgba(0,0,0," + alpha + ")";
}

//nord
btn1.addEventListener('click', function nord(e){mode=1})
//graphite
btn2.addEventListener('click', function shade(e){mode=2;
    lightness = 80})
    
//spectrum
btn3.addEventListener('click', function spectrum(e){mode=3})
//erase
btn4.addEventListener('click', function erase(e){mode=4})


//refresh
btn5.addEventListener('click', function(e){
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(box => box.style.backgroundColor = "");
})

btn6.addEventListener('click', function(e){
	const gridSquares = document.querySelectorAll('.square');
	gridSquares.forEach(box => box.classList.toggle('grid-lines'));
})

createGrid(16)
