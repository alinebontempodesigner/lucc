/* ================================
   L U C C   C O N C E P T - Loja
   ================================ */

// ====== ELEMENTOS DOS FILTROS ======
const aplicarBtn = document.querySelector('.btn-aplicar');
const precoInput = document.getElementById('preco');
const valorPreco = document.getElementById('valor-preco');

// ====== PRODUTOS ======
const produtos = [
 {
  nome: "Difusor Aromático Premium",
  tipo: "difusores",
  quantidade: "Kits",
  preco: 197,
  imagem: "imagens/mockupdifusorestilo1.png",
  descricao: "Perfumes artesanais Lucc Concept — sofisticação, serenidade e design artesanal em um só gesto.",

  descricaoHtml: `
    <h3>Difusor Aromático Premium Lucc Concept</h3>
    <p>
      Com design elegante em vidro fumê e acabamento artesanal, o <strong>Difusor Aromático Premium Lucc Concept</strong> transforma ambientes em experiências sensoriais únicas.
      Sua fragrância exclusiva combina <em>notas florais e amadeiradas</em> que evocam serenidade, aconchego e sofisticação.
    </p>

    <ul>
      <li>Essência autoral com blend floral-amadeirado</li>
      <li>Vidro premium com acabamento artesanal</li>
      <li>Varetas de madeira natural para difusão contínua</li>
      <li>Ideal para salas, escritórios e espaços de recepção</li>
    </ul>

    <h4>Ficha Técnica</h4>
    <table class="tabela-ficha">
      <tr><th>Produto</th><td>Difusor Aromático Premium</td></tr>
      <tr><th>Marca</th><td>Lucc Concept</td></tr>
      <tr><th>Categoria</th><td>Home & Decor</td></tr>
      <tr><th>Fragrância</th><td>Notas florais e amadeiradas</td></tr>
      <tr><th>Volume</th><td>250 ml</td></tr>
      <tr><th>Material</th><td>Vidro fumê + madeira natural</td></tr>
      <tr><th>Duração</th><td>Até 90 dias</td></tr>
      <tr><th>Produção</th><td>Artesanal e sob demanda</td></tr>
      <tr><th>Origem</th><td>Feito no Brasil</td></tr>
    </table>

    <h4>Modo de Uso</h4>
    <ul>
      <li>Remova a tampa e insira as varetas no frasco.</li>
      <li>Aguarde a absorção da essência e vire as varetas a cada 2 dias para intensificar o aroma.</li>
      <li>Evite exposição direta ao sol para preservar a fragrância.</li>
    </ul>

    <p class="seo">
      Palavras-chave: difusor aromático de luxo, decoração sofisticada, aromas autorais, fragrância floral amadeirada, Lucc Concept, design artesanal, bem-estar olfativo.
    </p>
  `
},


  {
  nome: "Kit Lucc Concept – Difusor + Spray Perfumador",
  tipo: "aromatizadores",
  quantidade: "kits",
  preco: 219,
  imagem: "imagens/kitdifusorhomeestilo2.png",
  descricao: "Kit aromático premium Lucc Concept — difusor com varetas e spray com fragrância autoral para transformar seus espaços.",

  descricaoHtml: `
    <h3>Kit Lucc Concept – Difusor e Spray Perfumador</h3>
    <p>
      Sofisticação em dobro. O <strong>Kit Lucc Concept</strong> une o charme do difusor aromático com varetas e a praticidade do spray perfumador,
      criando uma experiência sensorial completa para o seu lar ou espaço profissional.
    </p>
    <p>
      O design minimalista em <em>vidro fumê</em> com acabamento metálico reflete elegância contemporânea, enquanto a fragrância exclusiva 
      da Lucc Concept combina <strong>notas florais e amadeiradas</strong> que evocam tranquilidade, conforto e sofisticação duradoura.
    </p>

    <ul>
      <li>Essência autoral com blend floral e amadeirado</li>
      <li>Design decorativo em vidro fumê com tampa metálica</li>
      <li>Difusor com varetas + spray perfumador de ambiente</li>
      <li>Ideal para recepções, salas e espaços corporativos</li>
      <li>Produção artesanal e fragrância de longa duração</li>
    </ul>

    <h4>Ficha Técnica</h4>
    <table class="tabela-ficha">
      <tr><th>Produto</th><td>Kit Difusor + Spray Perfumador</td></tr>
      <tr><th>Marca</th><td>Lucc Concept</td></tr>
      <tr><th>Categoria</th><td>Aromatizadores de ambiente</td></tr>
      <tr><th>Fragrância</th><td>Notas florais e amadeiradas</td></tr>
      <tr><th>Volume</th><td>250 ml (difusor) + 200 ml (spray)</td></tr>
      <tr><th>Material</th><td>Vidro fumê, tampa metálica e varetas naturais</td></tr>
      <tr><th>Duração</th><td>Até 90 dias o difusor / uso diário o spray</td></tr>
      <tr><th>Produção</th><td>Artesanal, sob demanda</td></tr>
      <tr><th>Origem</th><td>Feito no Brasil</td></tr>
    </table>

    <h4>Modo de Uso</h4>
    <ul>
      <li>Coloque as varetas no frasco do difusor e vire-as a cada 2 dias para renovar o aroma.</li>
      <li>Use o spray para reforçar o perfume em momentos específicos ou em tecidos e cortinas.</li>
      <li>Evite exposição direta ao sol e mantenha fora do alcance de crianças e animais.</li>
    </ul>

    <p class="seo">
      Palavras-chave: kit aromatizador de luxo, difusor e spray perfumador, fragrância floral amadeirada, decoração sofisticada,
      Lucc Concept, aromatizadores artesanais, home decor elegante, bem-estar olfativo.
    </p>
  `
},
  
   {
  nome: "Silêncio Dourado",
  tipo: "obras",
  quantidade: "peca-unica",
  preco: 897,
  imagem: "imagens/mockuploira1.png",
  descricao: "Versão curta para listagem/cartões.",
  descricaoHtml: `
    <h3>“Silêncio Dourado” — Série Glam Essence</h3>
    <p>De olhos fechados e expressão serena, <strong>“Silêncio Dourado”</strong> captura a essência da feminilidade atemporal. Ideal para ambientes sofisticados, galerias e espaços corporativos.</p>

    <ul>
      <li>Impressão Fine Art em alta resolução</li>
      <li>Acabamento com proteção UV fosca</li>
      <li>Produção artesanal no Brasil</li>
    </ul>

    <h4>Ficha Técnica</h4>
    <table class="tabela-ficha">
      <tr><th>Título</th><td>Silêncio Dourado</td></tr>
      <tr><th>Artista</th><td>Aline Bontempo</td></tr>
      <tr><th>Coleção</th><td>Glam Essence</td></tr>
      <tr><th>Técnica</th><td>Ilustração digital sobre fundo texturizado</td></tr>
      <tr><th>Dimensões</th><td>45x30, 75x50, 100x75 cm</td></tr>
      <tr><th>Suporte</th><td>Tela de algodão ou papel Fine Art 310g</td></tr>
      <tr><th>Acabamento</th><td>Verniz protetor UV (fosco)</td></tr>
      <tr><th>Assinatura</th><td>Digital + certificado</td></tr>
      <tr><th>Edição</th><td>Limitada e numerada</td></tr>
      <tr><th>Produção</th><td>Sob demanda</td></tr>
    </table>

    <p class="seo">Palavras-chave: arte feminina moderna, ilustração fine art, quadro decorativo elegante, arte digital contemporânea, arte autoral brasileira.</p>
  `
},

{
  nome: "Coleção Urbano – London + New York City + Kit Aromas",
  tipo: "colecoes",
  quantidade: "kit-completo",
  preco: 2397,
  imagem: "imagens/colecaourbanokit.png",
  descricao: "Duas obras da série Urbano em moldura preta + kit difusor e spray com logo Lucc Concept — elegância minimalista para ambientes sofisticados.",

  descricaoHtml: `
    <h3>Coleção Urbano – London & New York City + Kit Aromatizadores</h3>
    <p>
      Uma curadoria que une <strong>arte e atmosfera</strong>. A Coleção <em>Urbano</em> apresenta as obras 
      <strong>London</strong> e <strong>New York City</strong> emolduradas em preto, lado a lado, 
      compondo um cenário minimalista com <em>cores neutras</em>. Abaixo, o <strong>kit de aromatizadores</strong> 
      (difusor com varetas + spray) com o <strong>logo Lucc Concept</strong> aplicado nos frascos reforça o
      caráter premium do conjunto e cria uma experiência sensorial completa.
    </p>

    <ul>
      <li>Dois pôsteres Fine Art da série <strong>Urbano</strong> (London + New York City)</li>
      <li>Molduras pretas idênticas, passe-partout claro e vidro protetor</li>
      <li>Kit aromático: difusor com varetas + spray com logo Lucc Concept</li>
      <li>Ambiente minimalista: estética limpa, tons neutros e sofisticação discreta</li>
      <li>Produção artesanal e acabamento de alto padrão</li>
    </ul>

    <h4>Ficha Técnica – Obras</h4>
    <table class="tabela-ficha">
      <tr><th>Títulos</th><td>London • New York City</td></tr>
      <tr><th>Coleção</th><td>Urbano</td></tr>
      <tr><th>Artista</th><td>Aline Bontempo</td></tr>
      <tr><th>Técnica</th><td>Ilustração digital sobre fundo texturizado</td></tr>
      <tr><th>Dimensões</th><td>45x30, 75x50, 100x75 cm (cada)</td></tr>
      <tr><th>Impressão</th><td>Fine Art em alta resolução</td></tr>
      <tr><th>Moldura</th><td>Preta, perfil fino, com passe-partout</td></tr>
      <tr><th>Proteção</th><td>Vidro/lâmina com proteção UV (fosco)</td></tr>
      <tr><th>Assinatura</th><td>Digital + certificado de autenticidade</td></tr>
      <tr><th>Edição</th><td>Limitada e numerada</td></tr>
      <tr><th>Produção</th><td>Sob demanda</td></tr>
    </table>

    <h4>Ficha Técnica – Kit Aromas</h4>
    <table class="tabela-ficha">
      <tr><th>Itens</th><td>Difusor com varetas + Spray Perfumador</td></tr>
      <tr><th>Frascos</th><td>Vidro preto com tampas douradas e logo Lucc Concept</td></tr>
      <tr><th>Fragrância</th><td>Notas florais e amadeiradas (essência autoral)</td></tr>
      <tr><th>Volume</th><td>250 ml (difusor) • 200 ml (spray)</td></tr>
      <tr><th>Duração</th><td>Até 90 dias o difusor • uso diário o spray</td></tr>
      <tr><th>Origem</th><td>Produção artesanal no Brasil</td></tr>
    </table>

    <h4>Modo de Uso – Aromatizadores</h4>
    <ul>
      <li>Insira as varetas no difusor e vire-as a cada 2–3 dias para renovar o aroma.</li>
      <li>Use o spray para reforçar a perfumação pontual em tecidos e ambientes.</li>
      <li>Mantenha longe de luz solar direta e do alcance de crianças e pets.</li>
    </ul>

    <p class="seo">
      Palavras-chave: coleção urbano, posters cidade, London e New York City, moldura preta minimalista,
      kit aromatizador luxo, difusor e spray com logo, decoração sofisticada, Lucc Concept, arte contemporânea, home decor neutro.
    </p>
  `
}

];

// -------------------------------
// 🛒 Carrinho e renderização
// -------------------------------
let carrinho = [];

// Atualiza contador e total
function atualizarCarrinho() {
  const contador = document.getElementById("contadorCarrinho");
  const totalCarrinho = document.getElementById("totalCarrinho");
  const itensCarrinho = document.getElementById("itensCarrinho");

  if (!contador) return;

  contador.textContent = carrinho.length;
  if (itensCarrinho && totalCarrinho) {
    itensCarrinho.innerHTML = "";
    let total = 0;
    carrinho.forEach((item, i) => {
      total += item.preco;
      itensCarrinho.innerHTML += `
        <div class="item-carrinho">
          <img src="${item.imagem}" alt="${item.nome}">
          <span>${item.nome}</span>
          <strong>R$ ${item.preco.toFixed(2)}</strong>
          <button onclick="removerItem(${i})">❌</button>
        </div>
      `;
    });
    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
  }
}

// Remover item
function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

// -------------------------------
// 🧱 Renderizar produtos na loja
// -------------------------------
function renderProdutos(lista = produtos) {
  const grid = document.getElementById("grid-produtos");
  if (!grid) return;

  grid.innerHTML = "";
  lista.forEach((produto) => {
    const card = document.createElement("div");
    card.classList.add("produto-card");

    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="produto-info">
        <h3>${produto.nome}</h3>
        <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
        <button class="btn-comprar">Comprar</button>
      </div>
    `;

    // Adiciona ao DOM
    grid.appendChild(card);
  });
}

// Render inicial
renderProdutos();

// ================================
// 🛍️ CONTROLE DE MODAIS LUCC CONCEPT
// ================================

// Instâncias do Bootstrap Modal
const modalProduto = new bootstrap.Modal(document.getElementById('modalProduto'));
const modalCarrinho = new bootstrap.Modal(document.getElementById('modalCarrinho'));
const modalCheckout = new bootstrap.Modal(document.getElementById('modalCheckout'));
const modalConfirmacao = new bootstrap.Modal(document.getElementById('modalConfirmacao'));

// === ABRIR MODAL DE PRODUTO ===
document.addEventListener('click', (e) => {
  const card = e.target.closest('.produto-card');
  if (card && !e.target.classList.contains('btn-comprar')) {
    const nome = card.querySelector('h3').textContent;
    const produto = produtos.find((p) => p.nome === nome);
    if (!produto) return;

    document.getElementById('modalImagem').src = produto.imagem;
    document.getElementById('modalTitulo').textContent = produto.nome;
    document.getElementById('modalDescricao').innerHTML = produto.descricaoHtml || produto.descricao || '';
    document.getElementById('modalPreco').textContent = `R$ ${produto.preco.toFixed(2)}`;
    modalProduto.show();
  }
});

// === BOTÃO "COMPRAR" NO CARD ===
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-comprar')) {
    const card = e.target.closest('.produto-card');
    const nome = card.querySelector('h3').textContent;
    const produto = produtos.find((p) => p.nome === nome);
    if (produto) {
      carrinho.push(produto);
      atualizarCarrinho();

      // Feedback visual
      const contador = document.getElementById('contadorCarrinho');
      contador.classList.add('contador-ativo');
      setTimeout(() => contador.classList.remove('contador-ativo'), 500);
    }
  }
});

// === ABRIR CARRINHO ===
const btnCarrinho = document.getElementById('btnCarrinho');
btnCarrinho?.addEventListener('click', () => modalCarrinho.show());

// === FINALIZAR COMPRA ===
const finalizarCompraBtn = document.getElementById('finalizarCompra');
finalizarCompraBtn?.addEventListener('click', () => {
  if (carrinho.length === 0) return;
  modalCarrinho.hide();
  modalCheckout.show();

  const resumo = document.getElementById('resumoCheckout');
  resumo.innerHTML = '';
  carrinho.forEach(item => {
    resumo.innerHTML += `<div><span>${item.nome}</span><span>R$ ${item.preco.toFixed(2)}</span></div>`;
  });
});

// === CONFIRMAR PEDIDO ===
const formCheckout = document.getElementById('formCheckout');
formCheckout?.addEventListener('submit', (e) => {
  e.preventDefault();
  modalCheckout.hide();
  modalConfirmacao.show();

  const numPedido = Math.floor(Math.random() * 1000000);
  document.getElementById('numeroPedido').textContent = `#${numPedido}`;

  const resumoConfirmacao = document.getElementById('resumoConfirmacao');
  resumoConfirmacao.innerHTML = '';
  carrinho.forEach(item => {
    resumoConfirmacao.innerHTML += `<div><strong>${item.nome}</strong> — R$ ${item.preco.toFixed(2)}</div>`;
  });

  const nomeCliente = document.getElementById('nomeCliente').value;
  const linkWhats = `https://wa.me/5599999999999?text=Olá, sou ${nomeCliente} e quero acompanhar o pedido #${numPedido}`;
  document.getElementById('whatsPedido').href = linkWhats;

  carrinho.length = 0;
  atualizarCarrinho();
});