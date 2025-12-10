function pescar() {
  const peixes = [
    "🐟 Peixe comum",
    "🐠 Peixe colorido",
    "🐡 Baiacu raro",
    "🦈 Tubarão lendário 👑",
    "🌊 Nada foi pescado..."
  ];

  const sorteio = peixes[Math.floor(Math.random() * peixes.length)];
  document.getElementById("resultado").innerText = sorteio;
}
.escondido {
  display: none;
}

.sobre {
  animation: surgir 0.4s ease;
}

@keyframes surgir {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
