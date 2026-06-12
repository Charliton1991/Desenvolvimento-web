function cadastro() {
    let pnome = document.getElementById('pnome').value;
    window.alert(`${pnome} seu cadasto foi realizado com sucesso`);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Sr. ${pnome}, seu cadastro foi realizado com sucesso!</p>`
    resultado.style.backgroundColor = 'red'
    /*  window.alert('cadastro realizado com sucesso!!!');*/
}