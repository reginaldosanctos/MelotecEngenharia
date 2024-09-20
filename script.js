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

// Seleciona o botão de minimizar e o conteúdo da caixa de contato
const minimizeBtn = document.getElementById('minimizeBtn');
const contactBox = document.getElementById('contactBox');

// Adiciona um evento de clique ao botão de minimizar
minimizeBtn.addEventListener('click', () => {
    // Alterna a classe "minimized" para minimizar/maximizar a caixa
    contactBox.classList.toggle('minimized');
    
    // Troca o símbolo do botão entre − e +
    if (contactBox.classList.contains('minimized')) {
        minimizeBtn.textContent = '+';
    } else {
        minimizeBtn.textContent = '−';
    }
});

// Função de envio de formulário com resposta
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
