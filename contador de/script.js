var x = 0;
function somar() {
  x++;
   let resultado = document.getElementById('resultado');
    resultado.innerHtml = `o contador esta com ${x} cliques.`
}