function pescar() {
  const peixes = [
    "🐟 Peixe comum",
    "🐠 Peixe colorido",
    "🐡 Baiacu raro",
    "🦈 Tubarão lendário 👑",
    "🦐 Um belo camarão!",
    "🦀 Um caranguejo?!",
    "🐋 Muito grande!",
    "🌊 Nada foi pescado..."
  ];

  const sorteio = peixes[Math.floor(Math.random() * peixes.length)];
  document.getElementById("resultado").innerText = sorteio;
}

function toggleSobre() {
  const sobre = document.getElementById("sobre");
  sobre.classList.toggle("escondido");
}
