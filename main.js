//Declaração de constante do tipo array
const alunos = [
  { nome: "Maria", nota: 6 },
  { nome: "João", nota: 5 },
  { nome: "José", nota: 5 },
  { nome: "Pedro", nota: 10 },
  { nome: "Letícia", nota: 9 },
  { nome: "Alice", nota: 4 },
  { nome: "Murilo", nota: 8 },
];

//Testa se pelo menos um argumento é maior que 5 - função some()
const alunosComNotaMaiorOuIgual6 = alunos.some(function (item) {
  return item.nota > 5;
});

//console.log(alunosComNotaMaiorOuIgual6);

//Declaração de Função convencional
function filtraAlunos(aluno) {
  return aluno.nota > 5;
}

//Declaração de Função: Arrow function
const filtraAlunos2 = (aluno) => aluno.nota > 5;

const listaAlunos = alunos.filter(filtraAlunos2);

console.log(listaAlunos);

listaAlunos.forEach((valor) => {
  console.log(`Aluno: ${valor.nome} - Nota: ${valor.nota}`);
});

//Find, busca apenas um item do array
const buscaNome = alunos.find(function (item) {
  return item.nome === "Letícia";
});

//console.log(buscaNome);
