// FORMULÁRIO - Envio Simulado com Feedback
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formEmpresas");
  const msg = document.getElementById("msgSucesso");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // validação simples
    const inputs = form.querySelectorAll("input[required], textarea[required]");
    let valido = true;
    inputs.forEach((el) => {
      if (!el.value.trim()) {
        el.style.borderColor = "#a94442";
        valido = false;
      } else {
        el.style.borderColor = "rgba(166,124,82,0.5)";
      }
    });

    if (!valido) {
      msg.style.display = "none";
      return;
    }

    // animação de envio
    msg.style.display = "block";
    msg.style.opacity = "0";
    setTimeout(() => (msg.style.opacity = "1"), 100);

    // limpa os campos depois de alguns segundos
    setTimeout(() => {
      form.reset();
      msg.style.display = "none";
    }, 5000);
  });
});

// Animação de aparição ao rolar
const elementos = document.querySelectorAll(".prova-social, .proposta-valor, .planos-grid, .processo, .cases-section, .garantia-section, .cta-sentir");

const aparecer = () => {
  const trigger = window.innerHeight * 0.85;
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", aparecer);
window.addEventListener("load", () => {
  elementos.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 1s ease, transform 1s ease";
  });
  aparecer();
});

// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute("href"));
    if (alvo) {
      window.scrollTo({
        top: alvo.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const botao = form.querySelector("button");
  botao.disabled = true;
  botao.textContent = "Enviando...";

  setTimeout(() => {
    msg.style.display = "block";
    botao.disabled = false;
    botao.textContent = "Enviar proposta";
    form.reset();

    setTimeout(() => (msg.style.display = "none"), 4000);
  }, 1500);
});
