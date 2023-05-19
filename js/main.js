$('document').ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        $("#toastSuccess").toast("hide");
        $("#toastError").toast("hide");
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nome: "Por favor, insira o nome completo",
            email: "Por favor, insira seu melhor e-mail"
        },
        submitHandler: function(form) {
            $(".toast-body").text("Agradecemos o contato, aguarde nosso retorno.");
            $("#toastSuccess").toast("show");
            limpaForm();
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();
            if (camposInvalidos) {
                $(".toast-body").text("Existem " + camposInvalidos + " campos inválidos.");
                $("#toastError").toast("show");
            }
        }
    })

})

function limpaForm() {
    $("#nome").val("");
    $("#email").val("");
    $("#telefone").val("");
    $("#mensagem").val("");
}