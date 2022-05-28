
window.onload = gridInicial
function gridInicial() {
  criarGrid(5)
  /* criarPaletaFixa() */
  
  criarPaletaAleatoria() 

}

function criarGrid(inputGrid) {
  
  let px = inputGrid * 40 + inputGrid * 2;
  let widthStyle = document.querySelector('#pixel-board');
  widthStyle.style.width = px + 'px';
  /* console.log(widthStyle); */
  
  let numeroPixel = inputGrid*inputGrid;
  /* console.log(`numero de pixels ${numeroPixel}`); 
  console.log(typeof inputGrid); */

  for (let i = 0; i < numeroPixel; i += 1) {
    let divPixel = document.createElement('div');
    document.getElementById('pixel-board').appendChild(divPixel);
    divPixel.classList = 'pixel';
  }
  escutadorPixel();
  
}

/* function criarPaletaFixa() {
  let secPaleta = document.getElementById("color-palette");
  
  let coresFixas = ["blue","yellow","green"];
  
  for (let index = 0; index < coresFixas.length; index += 1) {
    let divCoresF = document.createElement("div");
    divCoresF.style.backgroundColor = coresFixas[index];
    divCoresF.classList = "color";

   secPaleta.appendChild(divCoresF);
  } 
  
}*/
function criarPaletaAleatoria() {
  
   for (let i = 0; i < 3; i += 1) {
    let divPaleta = document.createElement('div');
    document.getElementById('color-palette').appendChild(divPaleta);
    divPaleta.classList = 'color';
  }
  let coresPaleta = document.getElementsByClassName("color")
  for (let index = 1; index < coresPaleta.length; index+= 1) {
    
    coresPaleta[index].style.backgroundColor = corAleatoria();
    
  }  
  escutadorPaleta();
}  

function corAleatoria() {
  const letters = '0123456789ABCDEF';
  let corX = '#';
  
  for (let i = 0; i < 6; i++) {
    corX += letters[Math.floor(Math.random() * 16)];
  }
  return corX;
  
}

function botão() {
  
    let pixelSec = document.getElementById("pixel-board");
    let pixel = document.getElementsByClassName("pixel");

    pixelSec.innerHTML = ""

    let input = document.querySelector('#board-size');
    let valorInput = parseInt(input.value);
    console.log(valorInput);

    if (valorInput < 5) {
      valorInput = 5
    } else if  (valorInput > 50) {
      valorInput = 50
    } else if (isNaN(valorInput)) {
      window.alert("Board inválido!")
      valorInput = 5
    }
    console.log(valorInput);
      criarGrid(valorInput); 
       
  }
  
function escutadorPixel() {
  let pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', pintar);
  }
}


function escutadorPaleta() {
  let paletaCores = document.getElementsByClassName('color');
  for (let index = 0; index < paletaCores.length; index++) {
    paletaCores[index].addEventListener('click', escolherCor);
  }
}

function escolherCor(event) {
  console.log(event.target);
  let target = event.target;
  let select = document.getElementsByClassName('selected')[0];
  select.classList.remove('selected');
  target.classList.add('selected');
}

function pintar(event) {
  let selected = document.getElementsByClassName('selected')[0];
  let cssTarget = window.getComputedStyle(selected);
  console.log(cssTarget.backgroundColor);
  let target = event.target.style;
  target.backgroundColor = cssTarget.backgroundColor;
}

function reset() {
  console.log('Resetando Grid');
  let pixel = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}



