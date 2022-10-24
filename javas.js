const pegarncartas =ncartas();
const figura = pegarims(pegarncartas);
agrvai(figura);

function ncartas() {
    let numero = parseInt(prompt("quantas cartas voce precisa ?!"));

    while(isNaN(numero) || numero < 4 || numero > 14 || (numero % 2) === 1) {
        numero = parseInt(prompt("quantas cartas voce precisa ?!"));
    }

    return numero;
}




function pegarims(distribuir) {
    const numeroi =  [
        'c1p',
        'c2p',
        'c3p',
        'c4p',
        'c5p',
        'c6p',
        'c7p',
    
    ];
    const elementos = [];

    for(let i = 0; i < (distribuir/2); i++) {
        const quantidade = numeroi[i];
        elementos.push(quantidade);
        elementos.push(quantidade);
    }

    elementos.sort(combinacao);

    return elementos;
}


function agrvai(elementos) {
    const mesa = document.querySelector('.mesa')

    for(let i = 0; i < elementos.length; i++) {
        mesa.innerHTML += `
        <li class="card" onclick="escolhe(this)">
        <div class='capa frente'>
            <img src='imagem/logo.png'>
        </div>
        <div class='costas frente'>
            <img src='imagem/${elementos[i]}.gif'>
        </div>
        </li>
        `;
    }
}

let acertou1 = null;
let acertou2 = null;
let acertos = 0;
let naofoi = 0;

function escolhe(essa) {
    if(essa.classList.contains('escolhida') || acertou2 !== null) {
        return;
    }
    
    naofoi++;
    essa.classList.add('escolhida');

    if(acertou1 === null) {
        acertou1 = essa
    } else {
        acertou2  = essa

        if(acertou1.innerHTML ===acertou2 .innerHTML) {
            acertos += 2;
            acabou();
            começar();            
        } else {
            setTimeout(revelar, 1000);
        }
    }
}

function revelar() {
    acertou1.classList.remove('escolhida');
    acertou2.classList.remove('escolhida');
    
    começar();
}

function começar() {
    acertou1 = null;
    acertou2 = null;
}
function acabou() {
    if(acertos === pegarncartas) {
        alert(`voce precisou de  ${naofoi} jogadas!`);
    }
}

function combinacao() { 
	return Math.random() - 0.5; 
}








