document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formResponse = document.getElementById('formResponse');

    if (name && email && message) {
        formResponse.textContent = 'Obrigado pelo contato, ' + name + '! Nós entraremos em contato em breve.';
        formResponse.style.color = 'green';

        // Limpar o formulário
        document.getElementById('contactForm').reset();
    } else {
        formResponse.textContent = 'Por favor, preencha todos os campos.';
        formResponse.style.color = 'red';
    }
});
