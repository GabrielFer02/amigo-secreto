const amigo = document.getElementById("amigo");
const resultado = document.getElementById("resultado");
let listaAmigos = [];

function listarAmigo() {
  const conteudo = document.getElementById("listaAmigos");
  conteudo.innerHTML += `<li>${amigo.value}</li>`;
  amigo.value = "";
  console.log(listaAmigos);
}

function adicionarAmigo() {
  resultado.innerHTML = `<span></span>`;
  if (amigo.value.length >= 2) {
    listaAmigos.push(amigo.value);
    listarAmigo();
  } else {
    resultado.innerHTML = `<li style="color:red">Adicione um nome válido</li>`;
    amigo.value = "";
  }
}

function sortearAmigo() {
  if (listaAmigos.length > 0) {
    const sorteio = parseInt(Math.random() * listaAmigos.length + 1);
    resultado.innerHTML = `<li>O amigo sorteado é ${
      listaAmigos[sorteio - 1]
    }</li>`;
  } else {
    resultado.innerHTML = `<li style="color:red">Adicione nomes na lista para sorteio</li>`;
  }
}
