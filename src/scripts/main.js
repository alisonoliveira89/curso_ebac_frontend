function calculaArea(base, altura) {
  let retCalc = base * altura;

  if (Number.isNaN(retCalc)) {
    return "parametros inválidos, permitido apenas numeros";
  }

  return retCalc;
}
