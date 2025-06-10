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



















// Data final (ex: 10 de junho de 2029, às 00:00)
  const dataFutura = new Date("2029-05-28T00:00:00");

  function atualizarContagem() {
    const agora = new Date();
    let diff = dataFutura - agora;

    if (diff <= 0) {
      document.getElementById("timer").innerHTML = "Tempo esgotado!";
      return;
    }

    // Calcula os componentes do tempo
    const segundosTotal = Math.floor(diff / 1000);

    const anos = Math.floor(segundosTotal / (3600 * 24 * 365.25));
    const meses = Math.floor((segundosTotal % (3600 * 24 * 365.25)) / (3600 * 24 * 30.44));
    const dias = Math.floor((segundosTotal % (3600 * 24 * 30.44)) / (3600 * 24));
    const horas = Math.floor((segundosTotal % (3600 * 24)) / 3600);
    const minutos = Math.floor((segundosTotal % 3600) / 60);
    const segundos = segundosTotal % 60;

    document.getElementById("timer").innerHTML = `
      ${anos} ano(s), ${meses} mês(es), ${dias} dia(s),
      ${horas.toString().padStart(2, '0')}h :
      ${minutos.toString().padStart(2, '0')}m :
      ${segundos.toString().padStart(2, '0')}s
    `;
  }

  // Atualiza a cada segundo
  atualizarContagem();
  setInterval(atualizarContagem, 1000);