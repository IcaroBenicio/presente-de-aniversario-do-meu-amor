  const destino = new Date("May 28, 2029 23:59:59").getTime();
    const anteriores = {};

    function animar(id, val) {
      const el = document.getElementById(id);
      if (anteriores[id] !== val) {
        el.textContent = val.toString().padStart(2, "0");
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = "flip 0.7s ease-in-out";
        anteriores[id] = val;
      }
    }

    function atualizar() {
      const agora = Date.now();
      const dif = destino - agora;

      if (dif <= 0) {
        document.querySelector(".contador").innerHTML =
          "<div class='tempo'><div class='numero'>🎉</div><div class='rotulo'>Chegou!</div></div>";
        clearInterval(timer);
        return;
      }

      const dias = Math.floor(dif / 864e5);
      const horas = Math.floor((dif % 864e5) / 36e5);
      const minutos = Math.floor((dif % 36e5) / 6e4);
      const segundos = Math.floor((dif % 6e4) / 1000);

      animar("dias", dias);
      animar("horas", horas);
      animar("minutos", minutos);
      animar("segundos", segundos);
    }

    const timer = setInterval(atualizar, 1000);
    atualizar();