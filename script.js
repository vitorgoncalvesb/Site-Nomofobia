function calcularResultado() {
  const pergunta1 = document.getElementById("pergunta1").value;
  const pergunta2 = document.getElementById("pergunta2").value;
  const pergunta3 = document.getElementById("pergunta3").value;

  const pontuacao = parseInt(pergunta1) + parseInt(pergunta2) + parseInt(pergunta3);

  let resultadoTexto = "";

  if (pontuacao <= 3) {
      resultadoTexto = "Sua relação com a tecnologia parece equilibrada. Você não está excessivamente dependente de seus dispositivos.";
  } else if (pontuacao <= 5) {
      resultadoTexto = "Você tem uma relação moderada com a tecnologia. Vale a pena refletir sobre o tempo que passa conectado.";
  } else {
      resultadoTexto = "Sua relação com a tecnologia pode ser excessiva. Considere reduzir o tempo online e aumentar as interações face a face.";
  }

  // Exibir o resultado
  document.getElementById("resultadoTexto").textContent = resultadoTexto;
  document.getElementById("resultado").classList.remove("d-none");
}