/* =========================================================
   Lucc Concept - JS da página de Contato
   Requisitos: validação, máscara BR, LGPD, SLA, WA dinâmico
   ========================================================= */

(() => {
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

  function maskPhoneBR(value) {
    const d = value.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 10) {
      // (11) 9999-9999
      return d
        .replace(/^(\d{0,2})/, '($1')
        .replace(/^\((\d{2})(\d{0,4})/, '($1) $2')
        .replace(/(\d{4})(\d{0,4})$/, '$1-$2');
    }
    // (11) 99999-9999
    return d
      .replace(/^(\d{0,2})/, '($1')
      .replace(/^\((\d{2})(\d{0,5})/, '($1) $2')
      .replace(/(\d{5})(\d{0,4})$/, '$1-$2');
  }

  function showToast(text, timeout = 3500) {
    let wrap = $('.ab-toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'ab-toast-wrap';
      wrap.style.cssText = `
        position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%);
        display: grid; gap: 8px; z-index: 9999; pointer-events: none;
      `;
      document.body.appendChild(wrap);
    }
    const t = document.createElement('div');
    t.className = 'ab-toast';
    t.textContent = text;
    t.style.cssText = `
      pointer-events: auto; background: #2e2e2e; color: #fff;
      padding: 10px 14px; border-radius: 999px;
      box-shadow: 0 10px 24px -16px rgba(0,0,0,.32);
      border: 1px solid rgba(255,255,255,.08);
      font: 600 0.95rem/1.2 var(--font-body, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif);
    `;
    wrap.appendChild(t);
    setTimeout(() => t.remove(), timeout);
  }

  function initContactForm() {
    const form = $('#contato .ab-form');
    if (!form) return;

    // Campos
    const nome = $('#nome', form);
    const email = $('#email', form);
    const telefone = $('#telefone', form);
    const assunto = $('#assunto', form);
    const mensagem = $('#mensagem', form);
    const lgpd = $('#lgpd', form);
    const submitBtn = $('button[type="submit"]', form);

    // (Opcional) botão de WhatsApp na coluna direita
    const waLink = $('#contato .btn-whats-inline');

    // ---------- Máscara de telefone ----------
    if (telefone) {
      telefone.addEventListener('input', () => {
        const pos = telefone.selectionStart;
        telefone.value = maskPhoneBR(telefone.value);
        // mantém posição do cursor (fallback simples)
        try { telefone.setSelectionRange(pos, pos); } catch {}
      });

      // Validação suave: se preencher, exige pelo menos DDD+8
      telefone.addEventListener('blur', () => {
        const digits = telefone.value.replace(/\D/g, '');
        if (digits && digits.length < 10) {
          telefone.setCustomValidity('Digite um telefone válido com DDD.');
        } else {
          telefone.setCustomValidity('');
        }
      });
    }

    // ---------- Mensagens personalizadas ----------
    const setMsg = (el, msg) => { el.setCustomValidity(msg || ''); };

    if (nome) {
      nome.addEventListener('input', () => {
        setMsg(nome, nome.validity.valueMissing ? 'Informe seu nome.' : '');
      });
    }

    if (email) {
      email.addEventListener('input', () => {
        if (email.validity.valueMissing) setMsg(email, 'Informe seu e-mail.');
        else if (email.validity.typeMismatch) setMsg(email, 'Digite um e-mail válido (ex.: voce@exemplo.com).');
        else setMsg(email, '');
      });
    }

    if (assunto) {
      // Exige seleção (placeholder desabilitado deve ter value="")
      if (!assunto.value) assunto.setCustomValidity('Selecione um motivo.');
      assunto.addEventListener('change', () => {
        setMsg(assunto, assunto.value ? '' : 'Selecione um motivo.');
      });
    }

    if (lgpd) {
      lgpd.addEventListener('change', () => {
        setMsg(lgpd, lgpd.checked ? '' : 'Você precisa concordar para continuar.');
        if (submitBtn) submitBtn.disabled = !lgpd.checked; // UX: desabilita botão se não concordar
      });
      // estado inicial
      if (submitBtn) submitBtn.disabled = !lgpd.checked;
    }

    // ---------- Rascunho (sessionStorage) ----------
    const KEY = 'ab-contact-draft';
    const fields = { nome, email, telefone, assunto, mensagem };
    try {
      const saved = JSON.parse(sessionStorage.getItem(KEY) || '{}');
      Object.entries(fields).forEach(([k, el]) => { if (el && saved[k]) el.value = saved[k]; });
    } catch {}
    form.addEventListener('input', () => {
      const data = {};
      Object.entries(fields).forEach(([k, el]) => { if (el) data[k] = el.value; });
      try { sessionStorage.setItem(KEY, JSON.stringify(data)); } catch {}
      updateWhatsHref(); // atualiza WA conforme digita
    });

    // ---------- WhatsApp dinâmico ----------
    function updateWhatsHref() {
      if (!waLink) return;
      const base = 'https://wa.me/5511999999999';
      const assuntoTxt = assunto && assunto.value ? `Motivo: ${assunto.value}` : 'Motivo: (não informado)';
      const nomeTxt = nome && nome.value ? `\nNome: ${nome.value}` : '';
      const msgTxt = mensagem && mensagem.value ? `\nMensagem: ${mensagem.value}` : '';
      const payload = `Olá, vim pelo site da Lucc Concept.\n${assuntoTxt}${nomeTxt}${msgTxt}`;
      waLink.href = `${base}?text=${encodeURIComponent(payload)}`;
    }
    updateWhatsHref();

    // ---------- Envio ----------
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // força validação nativa
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Simulação de envio (substitua pelo fetch do seu backend quando estiver pronto)
      try {
        submitBtn && (submitBtn.disabled = true, submitBtn.textContent = 'Enviando…');
        await new Promise(r => setTimeout(r, 900)); // delay de demonstração

        // Se fosse enviar de verdade:
        // const fd = new FormData(form);
        // const resp = await fetch('/api/contato', { method: 'POST', body: fd });
        // if (!resp.ok) throw new Error('Falha ao enviar');
        // const data = await resp.json();

        showToast('Mensagem enviada! Em breve entraremos em contato. 💛');
        form.reset();
        // Limpa rascunho
        try { sessionStorage.removeItem(KEY); } catch {}
        // Reaplica estados
        setMsg(email, ''); setMsg(nome, ''); setMsg(assunto, ''); setMsg(lgpd, '');
        if (submitBtn) submitBtn.disabled = true, submitBtn.textContent = 'Enviar mensagem';
        updateWhatsHref();
      } catch (err) {
        console.error(err);
        showToast('Não foi possível enviar agora. Tente novamente.', 4500);
        submitBtn && (submitBtn.disabled = false, submitBtn.textContent = 'Enviar mensagem');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initContactForm);
})();


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("lc-modal-exclusivas");
  const btn = document.getElementById("lc-btn-exclusivas");
  const close = document.querySelector(".lc-close");
  const slides = document.querySelector(".lc-slides");
  const slideItems = document.querySelectorAll(".lc-slide");
  const next = document.querySelector(".lc-next");
  const prev = document.querySelector(".lc-prev");
  let index = 0;

  btn.onclick = () => modal.style.display = "flex";
  close.onclick = () => modal.style.display = "none";
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; }

  next.onclick = () => {
    index = (index + 1) % slideItems.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
  };
  prev.onclick = () => {
    index = (index - 1 + slideItems.length) % slideItems.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
  };
});

// Ativa a animação do hambúrguer
document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".navbar-toggler");
  toggler?.addEventListener("click", () => {
    toggler.classList.toggle("active");
  });
});

const LUCC_WHATSAPP_PHONE = "5511995206797";
    const msg = "Oi, Lucc Concept! ✨ Vim pelo site e quero escolher uma experiência (arte + aroma). Pode me orientar?";
    const wa = `https://wa.me/${LUCC_WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;

    ["lc-whats-top","lc-whats-room1","lc-whats-panel","lc-whats-footer"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.href = wa;
    });