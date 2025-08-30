

    const text = document.querySelector('.text');

     text.addEventListener('mouseout', function() {
        text.textContent = 'Passe o mouse aqui para alterar este texto.';
    });

    text.addEventListener('mouseover', function() {
        text.textContent = 'O texto foi alterado porque o mouse está em cima!';
    });

   
