$(document).ready(function () {
  $('header button').click(function () {
    $('form').slideDown()
  })

  $('#botao-cancelar').click(function () {
    $('form').slideUp()
  })

  $('form').on('submit', function (e) {
    e.preventDefault()
    const enderecoNovaImagem = $('#endereco-imagem-nova').val()
    const novoItem = $('<li style="display:none"></li>')
    $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem)
    
    $(`

    <div class="overlay-imagem-link">
      <a href="${enderecoNovaImagem}" target="_blanck" tittle="Ver imagem em tamanho real"
        Ver imagem em tamanho real
    </div
    
    `).appendTo(novoItem)
    $(novoItem).appendTo('ul')
    $(novoItem).fadeIn()
    $('#endereco-imagem-nova').val("")
})
})
