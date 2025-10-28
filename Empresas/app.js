// assets/js/empresas.js

// Configuração base do ScrollReveal
const sr = ScrollReveal({
  distance: '50px',
  duration: 1200,
  easing: 'ease-out',
  opacity: 0,
  origin: 'bottom',
  reset: false
});

// Hero
sr.reveal('header.section h1', { delay: 200, origin: 'top' });
sr.reveal('header.section .btn', { delay: 400 });

// Cards
sr.reveal('.card', { interval: 150 });

// Depoimentos
sr.reveal('#carouselDepoimentos', { delay: 200, origin: 'bottom' });

// Benefícios
sr.reveal('.ab-card', { interval: 120 });

// Preço e Garantia
sr.reveal('.price-card, .guarantee-card', { delay: 250 });

// FAQ
sr.reveal('.ab-acc', { interval: 100 });

// WhatsApp
sr.reveal('.btn-whats', { delay: 150 });

// Footer
sr.reveal('.footer', { delay: 200, origin: 'bottom' });

const offerBtn = document.querySelector('.cta-button');
if (offerBtn) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        offerBtn.classList.add('highlight');
      }
    });
  });
  observer.observe(offerBtn);
}

const formEmpresas = document.getElementById('formEmpresas');
const whatsEmpresas = document.getElementById('whatsEmpresas');

if (formEmpresas) {
  formEmpresas.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const empresa = document.getElementById('empresa').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const unidades = document.getElementById('unidades').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const numeroLoja = '5511999999999'; // seu número
    const texto = `Olá! Gostaria de uma proposta corporativa.\n\n*Nome:* ${nome}\n*Empresa:* ${empresa}\n*Cidade:* ${cidade}\n*Unidades:* ${unidades}\n*Mensagem:* ${mensagem}`;
    const link = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(texto)}`;
    window.open(link, '_blank');
  });
}

// WhatsApp fixo direto
if (whatsEmpresas) {
  const numeroLoja = '5511999999999';
  const link = `https://wa.me/${numeroLoja}?text=${encodeURIComponent('Olá! Gostaria de falar com o time corporativo da Lucc Concept.')}`;
  whatsEmpresas.href = link;
}
