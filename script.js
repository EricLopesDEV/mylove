console.log("Script carregado!");

document.addEventListener("DOMContentLoaded", () => {
  const contador = document.getElementById("contador");
  const dataInicial = new Date("2024-06-01T00:00:00"); // Substitua pela data desejada

  function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicial;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    contador.textContent = `Dias: ${dias}, Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`;
  }

  // Atualiza o contador a cada segundo
  setInterval(atualizarContador, 1000);
  atualizarContador(); // Atualiza imediatamente ao carregar
});
