    
  function criarGrid(larguraGrid, alturaGrid) {
    let px = larguraGrid * 40 + larguraGrid * 2;
    let widthStyle = document.querySelector('#pixel-board');
    widthStyle.style.width = px + 'px';

    for (let i = 0; i < larguraGrid; i += 1) {
      let linha = document.createElement('div');
      document.getElementById('pixel-board').appendChild(linha);
      linha.classList = 'pixel';

      for (let i2 = 1; i2 < alturaGrid; i2 += 1) {
        let coluna = document.createElement('div');
        document.getElementById('pixel-board').appendChild(coluna);
        coluna.classList = 'pixel';
      }
    }
    escutadorPixel()
  }

  function escutadorPixel() {
    let pixel = document.getElementsByClassName("pixel");
    for (let index = 0; index < pixel.length; index+= 1) {
     pixel[index].addEventListener("click", pintar);
    
    }
      
  }
  criarGrid(5, 5);
  let paletaCores = document.getElementsByClassName("color")

  for (let index = 0; index < paletaCores.length; index++) {
    paletaCores[index].addEventListener("click",escolherCor)

  }


  function escolherCor(event) {
    console.log(event.target);
    let target = event.target;
    let select = document.getElementsByClassName("selected")[0];
    select.classList.remove("selected");
    target.classList.add("selected");
    
  }



function pintar(event) {

  let selected =  document.getElementsByClassName("selected")[0];
  let cssTarget = window.getComputedStyle(selected);
  console.log(cssTarget.backgroundColor);
  let target =  event.target.style;
  target.backgroundColor = cssTarget.backgroundColor;

}




  