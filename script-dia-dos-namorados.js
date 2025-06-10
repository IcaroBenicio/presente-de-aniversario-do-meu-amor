document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const cards = document.querySelectorAll('.card');

  container.addEventListener('mouseenter', () => {
    cards.forEach(card => {
      card.style.transition = 'top 0.6s ease';
      card.style.top = '-90px';
    });
  });

  container.addEventListener('mouseleave', () => {
    cards.forEach(card => {
      card.style.transition = 'top 0.6s ease';
      card.style.top = '0';
    });
  });
});
















 const dataFutura = new Date("2029-06-10T00:00:00");

  function atualizarContagem() {
    const agora = new Date();
    let diff = dataFutura - agora;

    if (diff <= 0) {
      document.getElementById("horas").textContent = "00";
      document.getElementById("minutos").textContent = "00";
      document.getElementById("segundos").textContent = "00";
      return;
    }

    const totalSegundos = Math.floor(diff / 1000);
    const totalHoras = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    atualizarElemento("horas", totalHoras);
    atualizarElemento("minutos", minutos);
    atualizarElemento("segundos", segundos);
  }

  function atualizarElemento(id, novoValor) {
    const el = document.getElementById(id);
    const atual = el.textContent;
    const novoTexto = novoValor.toString().padStart(2, "0");

    if (atual !== novoTexto) {
      el.textContent = novoTexto;
      el.classList.remove("number");
      void el.offsetWidth;
      el.classList.add("number");
    }
  }

  atualizarContagem();
  setInterval(atualizarContagem, 1000);