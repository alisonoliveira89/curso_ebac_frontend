function Produto(codigo, nome, tipo, saldoEstq) {
  this.codigo = codigo;
  this.nome = nome;
  this.tipo = tipo;

  let _saldoEstq = saldoEstq;

  this.getSaldoEstoque = function () {
    return _saldoEstq;
  };

  this.setSaldoEstoque = function (valor) {
    if (typeof valor == "number") {
      _saldoEstq = valor;
    }
  };
}

//Também poderia ter mais um atributo para para Entrada ou Saida, eliminado uma classe.
function MovEntrada(codigo, nome, tipo, saldoEstq, qtdMov) {
  Produto.call(this, codigo, nome, tipo, saldoEstq);

  let _qtdMov = qtdMov + saldoEstq;
  this.setSaldoEstoque(_qtdMov);

  this.getQtde = function () {
    return _qtdMov;
  };

  this.setQtde = function (valor) {
    if (typeof valor == "number") {
      _qtdMov = valor + this.getSaldoEstoque();
      this.setSaldoEstoque(_qtdMov);
    }
  };
}

function MovSaida(codigo, nome, tipo, saldoEstq, qtdMov) {
  Produto.call(this, codigo, nome, tipo, saldoEstq);

  let _qtdMov = qtdMov;

  this.getQtde = function () {
    return _qtdMov;
  };

  this.setQtde = function (valor) {
    if (typeof valor == "number") {
      _qtdMov = this.getSaldoEstoque() - valor;
      this.setSaldoEstoque(_qtdMov);
    }
  };
}

const mov1 = new MovEntrada(1, "212 Vip Men", "Fragrância", 10, 5);
//mov1.setSaldoEstoque(2);
//mov1.setQtde(10);
console.log(
  "Entrada-> Produto: " +
    mov1.codigo +
    " - " +
    mov1.nome +
    " - Saldo: " +
    mov1.getSaldoEstoque()
);
console.log("");

const mov2 = new MovSaida(2, "Shampoo Aussie", "Cabelo");
mov2.setSaldoEstoque(1);
mov2.setQtde(5);
if (mov2.getSaldoEstoque() < 0) {
  console.log(
    "Saida-> Produto: " +
      mov2.codigo +
      " - " +
      mov2.nome +
      " - Qtd " +
      mov2.getQtde() +
      ": **Sem saldo disponivel**"
  );
} else {
  console.log(
    "Saida-> Produto: " +
      mov2.codigo +
      " - " +
      mov2.nome +
      " - Saldo: " +
      mov2.getSaldoEstoque()
  );
}
console.log("");

const mov3 = new MovEntrada(3, "Hidratante Victoria Secret", "Corpo");
mov3.setSaldoEstoque(2);
mov3.setQtde(5);
console.log(
  "Entrada-> Produto: " +
    mov3.codigo +
    " - " +
    mov3.nome +
    " - Saldo: " +
    mov3.getSaldoEstoque()
);
console.log("");
