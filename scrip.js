
let adulto = document.getElementById("adultos");
let crianca = document.getElementById("criancas");
let duracao = document.getElementById("duracao");
let resultado = document.getElementById('resultado');
let limpar = document.getElementById('limpar');


function calc(){

  let inAdultos = adulto.value;
  let inCrianca = crianca.value;
  let inDuracao = duracao.value;
  resultado.style.display = 'block';

  console.log(resultado);

  let carne = carneP(inDuracao) * inAdultos + (carneP(inDuracao) / 2 * inCrianca);

  let cerveja = cervejaP(inDuracao) * inAdultos;

  let bebidas = bebidaP(inDuracao) * inAdultos + (bebidaP(inDuracao) / 2 * inCrianca);

  resultado.innerHTML = `<p style="border-bottom: solid gold;">Você vai precisar de:</p>`;  
  resultado.innerHTML += `<br><p>${carne / 1000} kg de carne</p>`;  
  resultado.innerHTML += `<br><p>${Math.ceil(cerveja / 355)} Latas de cerveja</p>`;  
  resultado.innerHTML += `<br><p>${Math.ceil(bebidas / 2000)} Litros de bebidas</p>`;  
  
}

limpar.addEventListener('click', function(){
  adulto.value = '';
  crianca.value = '';
  duracao.value = '';
  resultado.style.display = 'none';
  
})

function carneP(inDuracao){
  
  if(inDuracao >= 6){
    return 650;
  }else{
    return 400;
  }
};
function cervejaP(inDuracao){

  if(inDuracao >= 6){
    return 2000;
  }else{
    return 1200;
  }
};
function bebidaP(inDuracao){

  if(inDuracao >= 6){
    return 2000;
  }else{
    return 1200;
  }
};

