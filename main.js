const form = document.getElementById("form-calcnumber");
const number_a = document.getElementById("number-a");
const number_b = document.getElementById("number-b");
const formSucessMessage = document.querySelector(".sucess-message");
const formErrorMessage = document.querySelector(".error-message");
const btnEnviar = document.getElementById("btn-enviar");

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//Função de pausa para mostrar a mensagem 'X' segundos
const timeMessage = async() => {
    await sleep(3000)
    formSucessMessage.style.display = 'none';
    formErrorMessage.style.display = 'none';
    number_a.disabled = false;
    number_b.disabled = false;
    btnEnviar.disabled = false;
}

form.addEventListener("submit", function(e) {
    let validForm = true;
    e.preventDefault();

    const sucessMsg = `Formulário válido, numero B <b>[${number_b.value}]</b> é maior que numero A <b>[${number_a.value}]</b>`;
    const errorMsg = `Formulário inválido, numero B <b>[${number_b.value}]</b> NÃO é maior que numero A <b>[${number_a.value}]</b>`;

    /*
    === Formas de verificar a condição ===
    validForm = calcNumber(number_a.value, number_b.value);
    if (validForm) {
    */

    //Condição ternário
    if (parseInt(number_b.value, 0) > parseInt(number_a.value, 0) ? true : false) {
        formSucessMessage.innerHTML = sucessMsg;
        formSucessMessage.style.display = 'block';
    } else {
        formErrorMessage.innerHTML = errorMsg;
        formErrorMessage.style.display = 'block';
    }
    resetFields();
})

//Função (opcional) conforme chamada acima, caso tenha várias validações fica mais organizado com função separada.
function calcNumber(n1, n2) {
    let retValid = n2 > n1 ? true : false;
    return retValid
}

//Limpa campos
function resetFields() {
    number_a.value = '';
    number_b.value = '';
    number_a.disabled = true;
    number_b.disabled = true;
    btnEnviar.disabled = true;

    timeMessage();
}