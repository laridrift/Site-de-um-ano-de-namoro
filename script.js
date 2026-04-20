// SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// MÚSICA
const music = document.getElementById("music");
let tocando = false;

function toggleMusic() {
  if (tocando) {
    music.pause();
    document.getElementById("musicBtn").innerText = "🎵 Tocar música";
  } else {
    music.play();
    document.getElementById("musicBtn").innerText = "⏸ Pausar";
  }
  tocando = !tocando;
}

// CARTA
const texto = "Amor, muito obrigada por sempre estar aqui comigo, você é muito especial para mim, te amo de todo o coração e de todo meu ser, o tempo passou muito rápido e já estamos a 1 ano juntos,beijos te amo.❤️";
let i = 0;
let iniciou = false;

function escreverCarta() {
  if (i < texto.length) {
    document.getElementById("carta").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escreverCarta, 40);
  }
}

function abrirCarta() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.toggle("open");

  if (!iniciou) {
    escreverCarta();
    iniciou = true;

    // toca música junto com a carta (efeito emocional forte)
    music.play();
    document.getElementById("musicBtn").innerText = "⏸ Pausar";
    tocando = true;
  }
}

// MENSAGENS
function mostrarMensagem(msg) {
  document.getElementById("mensagem").innerText = msg;
}

// CONTADOR
const dataInicio = new Date("2025-04-25");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("contador").innerText =
    `Estamos juntos há ${dias} dias 💖`;
}
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

setInterval(atualizarContador, 1000);




const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// abrir/fechar menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// fechar ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});