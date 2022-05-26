window.onload = function () {
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
  }
  criarGrid(5, 5);
};
