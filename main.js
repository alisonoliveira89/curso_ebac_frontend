document.addEventListener('DOMContentLoaded', function() {
    const inputNome = document.getElementById('nome');
    const modalExemplo = document.getElementById('contato-modal');

    modalExemplo.addEventListener('shown.bs.modal', () => {
        inputNome.focus();
    })
})