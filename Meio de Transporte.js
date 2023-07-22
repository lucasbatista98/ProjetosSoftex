function descobrirMeioDeTransporte() {
  const pergunta1 = prompt("É terrestre? (Sim/Não)").toLowerCase();
  const pergunta2 = prompt("Cabe apenas uma pessoa? (Sim/Não)").toLowerCase();
  const pergunta3 = prompt("É pesado? (Sim/Não)").toLowerCase();
  const pergunta4 = prompt("Tem pedal? (Sim/Não)").toLowerCase();

  if (
    pergunta1 === "sim" &&
    pergunta2 === "sim" &&
    pergunta3 === "não" &&
    pergunta4 === "sim"
  ) {
    alert("O transporte escolhido foi a bicicleta.");
  } else if (
    pergunta1 === "sim" &&
    pergunta2 === "não" &&
    (pergunta3 === "sim" || pergunta4 === "não")
  ) {
    alert("O transporte escolhido foi o trator.");
  } else if (
    pergunta1 === "sim" &&
    pergunta2 === "não" &&
    pergunta3 === "não" &&
    pergunta4 === "não"
  ) {
    alert("O transporte escolhido foi a moto.");
  } else {
    alert(
      "Não foi possível identificar o meio de transporte com as respostas fornecidas."
    );
  }
}
