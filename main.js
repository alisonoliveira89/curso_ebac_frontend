//Todo código que depender do jQuery deverá estar envolvido entre a
//função:
$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $(`<li style="display: none" id="li-tarefa">${novaTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(0500);

        $('#nova-tarefa').val('');
    })

    $('#list').on("click", "li", function() {
        $(this).toggleClass('riscar');
    })
});