function calcNumbers(n1: number, n2: number): number {
  return n1 * n2;
}

function saudacoes(nome: String) {
  return "Olá " + `${nome}`;
}

//Arrow function
const saudacoes2 = (nome: String): String => `Olá ${nome}`;

console.log(calcNumbers(2, 7));
console.log(saudacoes("Alison"));
console.log(saudacoes2("Carine"));
