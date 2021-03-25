let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');


let resultado = document.getElementById('resultado');

function calcular() {
    // Catching the values  
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    // Calculating the necessary quantity of meat in the barbecue
    let quantidadeCarne = carnePorPessoa(duracao) * adultos + ((carnePorPessoa(duracao) * criancas) / 2);

    // Calculating the necessary quantity of beer in the barbecue
    let quantidadeCerveja = cervejaPorPessoa(duracao) * adultos;

    // Calculating the necessary quantity of soda and water in the barbecue
    let quantidadeBebidas = bebidasPorPessoa(duracao) * adultos + ((bebidasPorPessoa(duracao) * criancas) / 2)

    // Putting the result(kg, L) in our div
    resultado.innerHTML = `<p>A quantidade de carne necessária será de ${quantidadeCarne / 1000} kg.</p>`;
    resultado.innerHTML += `<p>A quantidade de cerveja necessária será de ${quantidadeCerveja / 1000} L.</p>`;
    resultado.innerHTML += `<p>A quantidade de refrigerante e água necessária será de ${quantidadeBebidas / 1000} L.</p>`;
}

// Check the meat consume for person
function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

// Check the beer consume for person
function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

// Check the soda and water consume for person
function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

calcular();