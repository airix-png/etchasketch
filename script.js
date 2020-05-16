//Globals

const squareGrid = document.querySelector('.squareGridContainer')
const canvas = document.querySelector ('#generateGrid')
const btn1 = document.querySelector ('#nordic');
const btn2 = document.querySelector ('#shading');
const btn3 = document.querySelector ('#spectrum');
const btn4 = document.querySelector ('#erase');
const btn5 = document.querySelector ('#refresh');
const btn6 = document.querySelector ('#gridlines')
const colorBox = document.querySelector('#color');
const btn7 = document.querySelector ('#precision')
document.getElementById("myAudio").volume = 0.5;



//Generate Grid
function createGrid(num) {
    squareGrid.innerHTML = "";  
    squareGrid.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
    squareGrid.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
    for (let c = 0; c < (num * num); c++) {
        const box = document.createElement('div');
        box.classList.add("square");
            squareGrid.appendChild(box);
    }
  precision()
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

function getAuroraColor(e){
    let aurora = ["#8FBCBB", "#4C566A", "#4bee8f", "#74b6b5", "#676087", "#341936"]
    let random_aurora = aurora[Math.floor(Math.random() * aurora.length)];
    return random_aurora
}

let click = 2
function precision () {
    const gridSquares = document.querySelectorAll('.square');
    switch (click) {
        case 1: { gridSquares.forEach(box => box.removeEventListener('mouseover', final));
        gridSquares.forEach(box => box.addEventListener('click', final));}
      
        break;
        case 2: {gridSquares.forEach(box => box.removeEventListener('click', final));
        gridSquares.forEach(box => box.addEventListener('mouseover', final));
        
        }
        break;
    }
}

                //Event Listeners
//GENERATOR
canvas.addEventListener('click', function(e){
        let generate = prompt ("Enter canvas size (integers 1-50 only)")
    createGrid(generate);
    })


                    //BUTTONS
let mode=1
function final(e){
    switch(mode){
    case 1: {this.style.opacity = 1;
        this.style.backgroundColor = "#434C5E";}
        break;
    case 2: {let opacity = Number (this.style.opacity);
        this.style.opacity = opacity += 0.1;
        this.style.backgroundColor = 'black';}
    break;
    case 3: {
        this.style.opacity = 1;
        this.style.backgroundColor = getAuroraColor();}
        break;
    case 4: { 
        this.style.opacity = 1;
        this.style.background = "#ECEFF4";}
        break;
    
    case 5: {
        this.style.opacity = 1; 
        this.style.background = colorPick
    
    }
    }
}


const picker = new Picker(colorBox);
let colorPick;

picker.onChange = function(color) {
    colorBox.style.background = color.rgbaString;
    colorPick = color.rgbaString;
};


//nord
btn1.addEventListener('click', function nord(e){mode=1})
//graphite
btn2.addEventListener('click', function shade(e){mode=2;
    lightness = 80})
//spectrum
btn3.addEventListener('click', function spectrum(e){mode=3})
//erase
btn4.addEventListener('click', function erase(e){mode=4})
colorBox.addEventListener('click', function colorpick(e){mode=5})

//refresh
btn5.addEventListener('click', function(e){
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach (box => box.style.opacity = "")
    gridSquares.innerHTML = "";
    gridSquares.forEach(box => box.style.backgroundColor = "");})

btn6.addEventListener('click', function(e){

    if (btn6.style.backgroundColor !== "rgb(143, 188, 187)") {
        btn6.style.backgroundColor = "rgb(143, 188, 187)";
    console.log(btn6.style.backgroundColor)}
    else if (btn6.style.backgroundColor === "rgb(143, 188, 187)")
        {btn6.style.backgroundColor = "";
        console.log(btn6.style.backgroundColor)}; 
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach (box => box.style.opacity = "")
    gridSquares.innerHTML = "";
	gridSquares.forEach(box => box.classList.toggle('grid-lines'));
})

btn7.addEventListener('click', function switcher(e) {console.log(click)
    if (click == 1){click = 2;
    console.log(click)
    btn7.style.backgroundColor = ""}
    else if (click == 2) {click = 1; 
    console.log(click)
    btn7.style.backgroundColor = "rgb(143, 188, 187)"}

precision()})

createGrid(20)


