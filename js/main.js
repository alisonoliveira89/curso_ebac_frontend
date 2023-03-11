$('document').ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    })

    $('#btn-view').click(function() {
        $('form').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira o nome completo",
            email: "Por favor, insira seu melhor e-mail",
            telefone: "Por favor, insira seu telefone",
            cpf: "Por favor, insira seu CPF",
            endereco: "Por favor, insira seu endereço",
            cep: "Por favor, insira seu CEP"
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();
            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campo incorretos`)
            }
        }
    })

})