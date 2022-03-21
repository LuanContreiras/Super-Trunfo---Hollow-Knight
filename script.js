var carta1 = {
  imagem:
    "https://georgetownvoice.com/wp-content/uploads/2020/09/promo_04-700x657.png",
  nome: "Knight",
  atributos: {
    Attack: 7,
    Health: 5,
    Speed: 5
  }
};
var carta2 = {
  imagem: "https://cdn.wallpapersafari.com/94/92/emDZq6.png",
  nome: "Hornet",
  atributos: {
    Attack: 5,
    Health: 5,
    Speed: 10
  }
};
var carta3 = {
  imagem: "https://i.redd.it/xvv2qu8mh9d31.jpg",
  nome: "Grimm",
  atributos: {
    Attack: 10,
    Health: 3,
    Speed: 7
  }
};
var carta4 = {
  imagem: "https://i.ibb.co/gTdxZBg/nailmaster.png",
  nome: "Mato",
  atributos: {
    Attack: 8,
    Health: 6,
    Speed: 2
  }
};
var carta5 = {
  imagem:
    "https://i.pinimg.com/564x/92/39/10/9239101de27c5019187968bc8e05553e.jpg",
  nome: "Zote",
  atributos: {
    Attack: 2,
    Health: 5,
    Speed: 3
  }
};
var carta6 = {
  imagem: "https://i1.sndcdn.com/artworks-000258702911-nzvabv-t500x500.jpg",
  nome: "Radiance",
  atributos: {
    Attack: 6,
    Health: 8,
    Speed: 4
  }
};
var carta7 = {
  imagem: "https://i.ibb.co/1sc9DLS/B-Great-Nailsage-Sly.png",
  nome: "Sly",
  atributos: {
    Attack: 6,
    Health: 2,
    Speed: 7
  }
};
var carta8 = {
  imagem: "https://images.alphacoders.com/866/thumb-1920-866194.jpg",
  nome: "Dung Defender",
  atributos: {
    Attack: 3,
    Health: 7,
    Speed: 4
  }
};
var carta9 = {
  imagem: "https://i1.sndcdn.com/artworks-000251539993-ezsz1m-t500x500.jpg",
  nome: "Sisters of Battle",
  atributos: {
    Attack: 4,
    Health: 6,
    Speed: 8
  }
};
var carta10 = {
  imagem:
    "https://i.pinimg.com/originals/5a/b3/e4/5ab3e477f783d6b21397d3a0c06bc7c1.png",
  nome: "Pure Vessel",
  atributos: {
    Attack: 8,
    Health: 7,
    Speed: 7
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];

function sortearCarta() {
  var nCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[nCartaMaquina];

  var nCartaJogador = parseInt(Math.random() * 10);
  while (nCartaJogador == nCartaMaquina) {
    nCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[nCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("btnJogar").style.opacity = 1;
  document.getElementById("btnSortear").style.opacity = 0.5;

  exibirCartaJogador();
  limpaTela();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked == true) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-vitoria'>Vitória</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-derrota'>Derrota</p>";
  } else {
    htmlResultado = "<p class='resultado-empate'>Empate</p>";
  }
  divResultado.innerHTML = htmlResultado;
  exibirCartaMaquina();

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnJogar").style.opacity = 0.5;
  document.getElementById("btnSortear").style.opacity = 1;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var moldura =
    '<img src="https://i.ibb.co/7451gbM/Sem-t-tulo3.png" style=" width: inherit; height: inherit; position: absolute; ">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://i.ibb.co/7451gbM/Sem-t-tulo3.png"" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function limpaTela() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("carta-maquina").style.backgroundImage = "";
  document.getElementById("carta-maquina").innerHTML =
    '<img src="https://i.pinimg.com/564x/2b/02/a6/2b02a64dea630041ccc7a54457850c8e.jpg" style=" width: inherit; height: inherit; position: absolute;">';
}