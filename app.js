
const button = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const container = document.querySelector('#container');
const slider = document.querySelector('#slider');
const range = document.querySelector('#range');
const buttonL = document.querySelectorAll('.buttonL');
const clear = document.querySelector('.clear');
var  mouseDown = false;
const containerValue = document.getElementById('container');
containerValue.style.backgroundColor = "white";

let grids;
let sliderColor = "#000000";
var buttonV = 256;

function input(){
    
  
   
   buttonL.forEach(buttons =>{
    buttons.addEventListener('click', (e)=>{
      buttonV = buttons.value;
      removeGrid();
      containerValue.style.gridTemplateColumns = `repeat(${buttonV},1fr)`;
      createGrid(buttonV);
       changeGridColor(buttonV,sliderColor);
    });
   
   });
  slider.addEventListener('change', (e) =>{
    sliderColor= e.target.value;
    changeGridColor(buttonV,sliderColor);
   });
clear.addEventListener('click',(e) =>{
    removeColor();
   });
   
}



 function removeGrid(){
  let grids = container.querySelectorAll('.grid');
  grids.forEach(grid => container.removeChild(grid));
  
}

function createGrid(value){
    for (let i = 0; i < value*value; i++) {
    div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);  
}
 grids = container.querySelectorAll('.grid');
 
}

containerValue.style.gridTemplateColumns = `repeat(${16},1fr)`;
createGrid(16);
changeGridColor(16,"#000000");
input();


 function changeGridColor(value,color){
   let isMouseDown = false;

for (let i = 0; i <value*value; i++) {
  grids[i].addEventListener('mousedown', (event) => {
    isMouseDown = true;
  });
  

  grids[i].addEventListener('mousemove', (event) => {
    if (isMouseDown) {
      grids[i].id = `hover-${i}`;
      let idName = document.getElementById(`hover-${i}`);
       idName.style.backgroundColor =color;
    }

  });
  document.addEventListener('mouseup', (event) => {
    isMouseDown = false;
  });
}

}
function removeColor(){
  grids.forEach(grid => grid.style.backgroundColor="white");


}


