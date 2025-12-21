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
  nome: "Coleção completa - Rastro",
  tipo: "kit-colecao",
  quantidade: "Rastro",
  preco: 1980,
  imagens: [
    "imagens/Sala Rastro.jpg",
    "imagens/ilustração4 (2).png",
    "imagens/ilustração6.png",
    "imagens/difusorhomerastro.png",
  ],
  descricao: "Rastro nasce daquilo que permanece quando o instante passa. É o desejo de viver cercada por beleza com significado: ambientes que traduzem identidade, sensibilidade e elegância sem excesso. Uma coleção criada para quem entende que o verdadeiro luxo não se impõe: ele se revela, aos poucos, e fica.",
    descricaoHtml: `
  <h3>Coleção Rastro</h3>

  <p>
    <strong>Rastro</strong> nasce daquilo que permanece quando o instante passa.
    É sobre presença — não a que ocupa espaço, mas a que se instala em silêncio.
    Uma coleção criada para quem sonha em viver cercada por beleza com significado,
    onde cada detalhe carrega intenção, sensibilidade e elegância sem esforço.
  </p>

  <p>
    As obras e os perfumes da coleção conversam entre si como camadas de uma mesma história.
    Nada é excessivo. Tudo permanece.
    <strong>Rastro</strong> traduz o desejo de ambientes que acolhem,
    refletem identidade e revelam profundidade com o tempo.
  </p>

  <h4>As obras</h4>
  <p>
    As peças da coleção são produzidas em <strong>impressão Fine Art</strong>,
    valorizando textura, contraste e fidelidade cromática.
    Cada obra acompanha <strong>moldura branca</strong>, criando um acabamento limpo,
    sofisticado e atemporal — ideal para ambientes contemporâneos e sensoriais.
  </p>

  <ul>
    <li>Impressão Fine Art de alta qualidade;</li>
    <li>Moldura branca, elegante e minimalista;</li>
    <li>Tamanho padrão: <strong>30 x 40 cm</strong>;</li>
    <li>Produção cuidadosa, pensada para presença de galeria.</li>
  </ul>

  <h4>Os perfumes da coleção</h4>
  <p>
    Para além do visual, <strong>Rastro</strong> se completa no ar.
    A coleção inclui um <strong>difusor de varetas</strong> e um
    <strong>home spray</strong>, ambos com perfume autoral e exclusivo,
    criados para vestir o ambiente com sofisticação e identidade.
  </p>

  <ul>
    <li>Difusor de varetas com perfume autoral exclusivo;</li>
    <li>Frasco em <strong>vidro preto</strong>, design elegante e atemporal;</li>
    <li>Volume: <strong>300 ml</strong>;</li>
    <li>Home spray com o mesmo perfume da coleção;</li>
    <li>Volume do spray: <strong>300 ml</strong>;</li>
    <li>Perfumes pensados para criar atmosfera e permanência.</li>
  </ul>

  <h4>O conceito</h4>
  <p>
    Rastro é atmosfera.
    É a marca invisível que um espaço deixa em quem entra.
    Uma estética pensada para quem valoriza o essencial,
    o equilíbrio entre força e delicadeza,
    e o luxo que não se impõe — apenas permanece.
  </p>

  <h4>Para quem é</h4>
  <p>
    Para quem sonha em morar dentro de uma atmosfera.
    Para quem escolhe com cuidado o que permanece à sua volta.
    <strong>Rastro</strong> é para pessoas que entendem que casa,
    arte e perfume não são objetos —
    são extensões da própria identidade.
  </p>

  <p class="seo">
    Palavras-chave: coleção Rastro, fine art autoral, moldura branca,
    arte sensorial, difusor de varetas luxo, home spray autoral,
    decoração sofisticada, Lucc Concept, ambientes marcantes.
  </p>

  `
},

{
  nome: "Wave After Wave – Kit Assinatura Automotivo",
  tipo: "aromatizadores",
  colecao: "Wave After Wave",
  quantidade: "kit",
  preco: 369,
  badge: "Edição Limitada",
  imagens: [
    "imagens/wawcarro1.png",
    "imagens/wawcarro2.png",
  ],
  descricao: "Kit automotivo premium com perfume autoral exclusivo e difusor com tampa de cedro. Uma assinatura olfativa que transforma o interior do carro em experiência.",
  descricaoHtml: `
    <h3>Wave After Wave — Kit Automotivo</h3>

    <p>
      <strong>Wave After Wave</strong> não é um perfume para carro.
      É uma assinatura.
      Uma presença que acompanha o movimento, o silêncio entre uma música e outra,
      e o tempo vivido dentro do veículo.
    </p>

    <p>
      Criado para quem entende que o carro também é extensão da identidade,
      este kit transforma o interior em um espaço sensorial sofisticado —
      elegante, envolvente e absolutamente diferente do que existe no mercado.
    </p>

    <h4>O perfume</h4>
    <p>
      O perfume automotivo <strong>Wave After Wave</strong> vem em
      <strong>frasco de vidro</strong>, com concentração pensada para
      performance, elegância e permanência.
      Não é spray. É perfume.
    </p>

    <p>
      A fragrância se revela em camadas:
      começa limpa e envolvente, evolui para notas quentes e profundas,
      e permanece no ar com um rastro confortável, sofisticado e adulto.
      Daqueles que fazem quem entra no carro perguntar:
      <em>“Que perfume é esse?”</em>
    </p>

    <ul>
      <li>Perfume automotivo autoral e exclusivo;</li>
      <li>Frasco de vidro premium;</li>
      <li>Volume: <strong>100 ml</strong>;</li>
      <li>Alta performance com elegância — sem exageros;</li>
      <li>Perfuma sem invadir, permanece sem cansar.</li>
    </ul>

    <h4>O difusor automotivo</h4>
    <p>
      O difusor acompanha o mesmo perfume da coleção,
      mas com uma proposta ainda mais refinada:
      <strong>tampa de cedro natural</strong>.
    </p>

    <p>
      Diferente dos difusores tradicionais com bambu,
      o cedro entrega uma difusão mais elegante, contínua e estável,
      além de agregar valor estético e sensorial.
      O resultado é um perfume que se espalha com naturalidade,
      acompanhando o ritmo do carro e do dia.
    </p>

    <ul>
      <li>Difusor automotivo com perfume Wave After Wave;</li>
      <li>Tampa de <strong>cedro natural</strong> (mais nobre e sofisticada);</li>
      <li>Difusão suave e constante;</li>
      <li>Volume: <strong>30 ml</strong>;</li>
      <li>Design elegante que valoriza o interior do veículo.</li>
    </ul>

    <h4>Por que esse kit é diferente dos tradicionais?</h4>
    <ul>
      <li>Não utiliza spray nem fragrâncias genéricas;</li>
      <li>Perfume autoral, criado como assinatura olfativa;</li>
      <li>Difusor com cedro — material mais nobre que o bambu;</li>
      <li>Estética premium: frascos em vidro e acabamento sofisticado;</li>
      <li>Experiência sensorial contínua, não apenas “cheiro de carro”.</li>
    </ul>

    <h4>Para quem é</h4>
    <p>
      Para quem vive o carro como refúgio, ritual e companhia.
      Para quem escolhe música, rota e perfume com o mesmo cuidado.
      <strong>Wave After Wave</strong> é para quem entende que luxo
      está na sensação — e não no excesso.
    </p>

    <p class="seo">
      Palavras-chave: perfume automotivo premium, difusor automotivo luxo,
      tampa de cedro, perfume autoral para carro, Wave After Wave,
      Lucc Concept, assinatura olfativa, experiência sensorial automotiva.
    </p>
  `
},


{
  nome: "Figo Caramel — Difusor + Home Spray - 200ml",
  tipo: "aromatizadores",
  colecao: "Lucc Concept",
  quantidade: "kit",
  preco: 189, 
  imagens: [
    "imagens/dhpeqsala.png",
    "imagens/dhpeq.png",
  ],
  descricao: "Difusor de varetas e home spray Figo Caramel. Um perfume envolvente, confortável e elegante para o dia a dia.",
  
  descricaoHtml: `
    <h3>Figo Caramel — Lucc Concept</h3>

    <p>
      <strong>Figo Caramel</strong> é presença acolhedora.
      Um perfume criado para acompanhar o cotidiano com elegância,
      trazendo a sensação de casa bem cuidada,
      conforto imediato e atmosfera envolvente.
    </p>

    <p>
      A união do figo com notas adocicadas e cremosas
      cria um perfume quente, equilibrado e sofisticado.
      Doce na medida certa,
      sem excessos,
      com aquele fundo que convida a permanecer.
    </p>

    <h4>A experiência</h4>
    <p>
      Figo Caramel se revela aos poucos.
      A abertura frutada é suave e elegante,
      evoluindo para um corpo mais quente e confortável,
      que envolve o ambiente sem saturar.
      Um perfume fácil de amar,
      pensado para uso diário,
      mas com personalidade.
    </p>

    <h4>O kit</h4>
    <p>
      O conjunto reúne um <strong>difusor de varetas</strong>
      e um <strong>home spray</strong>,
      permitindo controlar a intensidade
      e manter o ambiente sempre agradável,
      com o mesmo perfume autoral da coleção.
    </p>

    <ul>
      <li>Difusor de varetas com perfume Figo Caramel;</li>
      <li>Home spray com o mesmo perfume;</li>
      <li>Frascos em <strong>PET</strong>, leves e funcionais;</li>
      <li>Volume: <strong>200 ml</strong> (cada item);</li>
      <li>Perfume confortável, elegante e de alta qualidade.</li>
    </ul>

    <h4>Por que escolher Figo Caramel?</h4>
    <ul>
      <li>Cria atmosfera acolhedora e sofisticada;</li>
      <li>Perfume adocicado equilibrado, nunca enjoativo;</li>
      <li>Funciona bem em diferentes ambientes;</li>
      <li>Ideal para quem busca elegância no cotidiano;</li>
      <li>Qualidade autoral Lucc Concept.</li>
    </ul>

    <h4>Para quem é</h4>
    <p>
      Para quem valoriza o conforto,
      a sensação de casa bem cuidada
      e perfumes que acompanham a rotina
      com leveza e sofisticação.
    </p>
    <small> *Imagens meramente ilustrativas.</small>

    <p class="seo">
      Palavras-chave: figo caramel, difusor de varetas,
      home spray Lucc Concept, perfume autoral,
      aromatizador sofisticado, decoração sensorial,
      bem-estar e elegância.
    </p>
  `
},

{
  nome: "Figo Caramel — Difusor + Home Spray - 350ml",
  tipo: "aromatizadores",
  colecao: "Lucc Concept",
  quantidade: "kit",
  preco: 279, 
  imagens: [
    "imagens/dhgrfigo.png"
  ],
  descricao: "Difusor de varetas e home spray Figo Caramel. Um perfume envolvente, confortável e elegante para o dia a dia.",
  descricaoHtml: `
    <h3>Figo Caramel — Lucc Concept</h3>

    <p>
      <strong>Figo Caramel</strong> é presença acolhedora.
      Um perfume criado para acompanhar o cotidiano com elegância,
      trazendo a sensação de casa bem cuidada,
      conforto imediato e atmosfera envolvente.
    </p>

    <p>
      A união do figo com notas adocicadas e cremosas
      cria um perfume quente, equilibrado e sofisticado.
      Doce na medida certa,
      sem excessos,
      com aquele fundo que convida a permanecer.
    </p>

    <h4>A experiência</h4>
    <p>
      Figo Caramel se revela aos poucos.
      A abertura frutada é suave e elegante,
      evoluindo para um corpo mais quente e confortável,
      que envolve o ambiente sem saturar.
      Um perfume fácil de amar,
      pensado para uso diário,
      mas com personalidade.
    </p>

    <h4>O kit</h4>
    <p>
      O conjunto reúne um <strong>difusor de varetas</strong>
      e um <strong>home spray</strong>,
      permitindo controlar a intensidade
      e manter o ambiente sempre agradável,
      com o mesmo perfume autoral da coleção.
    </p>

    <ul>
      <li>Difusor de varetas com perfume Figo Caramel;</li>
      <li>Home spray com o mesmo perfume;</li>
      <li>Frascos em <strong>PET</strong>, leves e funcionais;</li>
      <li>Volume: <strong>350 ml</strong> (cada item);</li>
      <li>Perfume confortável, elegante e de alta qualidade.</li>
    </ul>

    <h4>Por que escolher Figo Caramel?</h4>
    <ul>
      <li>Cria atmosfera acolhedora e sofisticada;</li>
      <li>Perfume adocicado equilibrado, nunca enjoativo;</li>
      <li>Funciona bem em diferentes ambientes;</li>
      <li>Ideal para quem busca elegância no cotidiano;</li>
      <li>Qualidade autoral Lucc Concept.</li>
    </ul>

    <h4>Para quem é</h4>
    <p>
      Para quem valoriza o conforto,
      a sensação de casa bem cuidada
      e perfumes que acompanham a rotina
      com leveza e sofisticação.
    </p>
    <small> *Imagens meramente ilustrativas.</small>

    <p class="seo">
      Palavras-chave: figo caramel, difusor de varetas,
      home spray Lucc Concept, perfume autoral,
      aromatizador sofisticado, decoração sensorial,
      bem-estar e elegância.
    </p>
  `
},

 {
  nome: "Rastro — Díptico Fine Art",
  tipo: "obras",
  colecao: "Rastro",
  quantidade: "kit-obras",
  preco: 1280, 
  imagens: [
    "imagens/rastrofineart.jpg",
    "imagens/ilustração4 (2).png",
    "imagens/ilustração6.png"
  ],
  descricao: "Duas obras Fine Art vendidas em conjunto. Um díptico sobre presença, ausência e aquilo que permanece.",
  descricaoHtml: `
    <h3>Rastro — Díptico Fine Art</h3>

    <p>
      <strong>Rastro</strong> é sobre o que permanece depois da travessia.
      Não o encontro explícito, nem o adeus declarado —
      mas aquilo que continua no ar, mesmo quando tudo parece ter seguido adiante.
    </p>

    <p>
      Este díptico apresenta duas figuras que não se olham,
      mas se reconhecem.
      Ele e ela caminham em direções distintas,
      carregando consigo vestígios do que foi vivido.
      O espaço entre as obras não separa —
      ele conecta.
    </p>

    <h4>A narrativa visual</h4>
    <p>
      Na obra feminina, o movimento é marcado pela liberação.
      O corpo avança com elegância silenciosa,
      enquanto o rastro se fragmenta em tons profundos,
      como emoções que finalmente encontram saída.
      Há força, decisão e transformação.
    </p>

    <p>
      Na obra masculina, o gesto é mais contido.
      O caminhar é firme, quase introspectivo,
      e o rastro se dissolve em camadas mais sóbrias,
      revelando memória, permanência e silêncio.
      Ele não olha para trás —
      mas o passado ainda o acompanha.
    </p>

    <p>
      Juntas, as obras constroem uma narrativa sutil sobre
      encontros que não se completam,
      histórias que não se apagam
      e sentimentos que continuam existindo,
      mesmo sem presença física.
    </p>

    <h4>O diálogo no ambiente</h4>
    <p>
      Pensadas para serem exibidas lado a lado,
      as obras criam um ponto de equilíbrio visual e emocional.
      O díptico funciona como um convite à contemplação,
      onde cada observador projeta sua própria história
      no intervalo entre uma imagem e outra.
    </p>

    <p>
      A moldura branca reforça a leitura contemporânea e sofisticada,
      permitindo que a obra respire
      e dialogue com diferentes estilos de décor,
      do minimalista ao sensorial.
    </p>

    <h4>Ficha Técnica</h4>
    <table class="tabela-ficha">
      <tr><th>Coleção</th><td>Rastro</td></tr>
      <tr><th>Formato</th><td>Díptico (2 obras vendidas juntas)</td></tr>
      <tr><th>Técnica</th><td>Ilustração digital autoral</td></tr>
      <tr><th>Impressão</th><td>Fine Art de alta qualidade</td></tr>
      <tr><th>Moldura</th><td>Moldura branca, acabamento clean e contemporâneo</td></tr>
      <tr><th>Tamanho</th><td>30 x 40 cm (cada obra)</td></tr>
      <tr><th>Produção</th><td>Sob demanda</td></tr>
      <tr><th>Certificado</th><td>Acompanha certificado de autenticidade</td></tr>
    </table>

    <h4>Para quem é</h4>
    <p>
      Para quem entende que arte não é apenas imagem,
      mas sensação.
      Para quem aprecia silêncio, narrativa e profundidade.
    </p>

    <p>
      <strong>Rastro</strong> é ideal para ambientes sofisticados,
      contemporâneos e sensoriais —
      salas, escritórios, galerias pessoais
      e espaços onde a arte não decora,
      mas permanece.
    </p>

    <p class="seo">
      Palavras-chave: coleção Rastro, díptico fine art, obras contemporâneas,
      arte autoral brasileira, moldura branca, arte sensorial,
      decoração sofisticada, Lucc Concept, arte com narrativa.
    </p>
  `
},



 {
  nome: "Lavanda Francesa — Difusor + Home Spray - 200ml",
  tipo: "aromatizadores",
  colecao: "Lucc Concept",
  quantidade: "kit",
  preco: 189, // defina o valor final
  imagens: [
    "imagens/dhpeqlav.png"
  ],
  descricao: "Difusor de varetas e home spray Lavanda Francesa. Um perfume elegante, limpo e sofisticado para ambientes que pedem calma e equilíbrio.",
  descricaoHtml: `
    <h3>Lavanda Francesa — Lucc Concept</h3>

    <p>
      <strong>Lavanda Francesa</strong> é elegância serena.
      Um perfume criado para trazer equilíbrio, leveza e sensação de ordem,
      como um espaço que respira calma e bom gosto.
    </p>

    <p>
      Diferente da lavanda comum, esta interpretação é mais refinada,
      limpa e sofisticada.
      Nada de excessos adocicados ou notas agressivas —
      aqui, a lavanda aparece com suavidade,
      envolta em uma composição que transmite frescor,
      conforto e sofisticação silenciosa.
    </p>

    <h4>A experiência</h4>
    <p>
      Lavanda Francesa se abre com frescor delicado,
      quase translúcido,
      e evolui para um corpo confortável e elegante,
      que organiza o ambiente sem pesar.
      É aquele perfume que traz sensação de limpeza emocional,
      de espaço bem cuidado,
      de rotina que flui.
    </p>

    <p>
      Ideal para momentos de pausa,
      leitura,
      descanso
      e ambientes que pedem serenidade com estilo.
    </p>

    <h4>O kit</h4>
    <p>
      O conjunto reúne um <strong>difusor de varetas</strong>
      e um <strong>home spray</strong>,
      permitindo ajustar a intensidade do perfume
      de acordo com o momento e o espaço.
    </p>

    <ul>
      <li>Difusor de varetas com perfume Lavanda Francesa;</li>
      <li>Home spray com o mesmo perfume autoral;</li>
      <li>Frascos em <strong>PET</strong>, leves e funcionais;</li>
      <li>Volume: <strong>200 ml</strong> (cada item);</li>
      <li>Perfume equilibrado, limpo e sofisticado.</li>
    </ul>

    <h4>Por que escolher Lavanda Francesa?</h4>
    <ul>
      <li>Promove sensação imediata de calma e bem-estar;</li>
      <li>Perfume limpo e elegante, nunca invasivo;</li>
      <li>Ideal para quartos, lavabos, salas e espaços de relaxamento;</li>
      <li>Excelente para quem busca equilíbrio no dia a dia;</li>
      <li>Qualidade autoral Lucc Concept.</li>
    </ul>

    <h4>Para quem é</h4>
    <p>
      Para quem aprecia ambientes tranquilos,
      organizados e acolhedores.
      Para quem entende que o verdadeiro luxo
      também mora no silêncio,
      na leveza
      e na sensação de paz que fica.
    </p>
    <small> *Imagens meramente ilustrativas.</small>

    <p class="seo">
      Palavras-chave: lavanda francesa, difusor de varetas,
      home spray Lucc Concept, perfume autoral,
      perfume limpo e sofisticado, aromatizador elegante,
      decoração sensorial, bem-estar.
    </p>
  `
},
{
  nome: "Lavanda Francesa — Difusor + Home Spray - 350ml",
  tipo: "aromatizadores",
  colecao: "Lucc Concept",
  quantidade: "kit",
  preco: 279, 
  imagens: [
    "imagens/dhgrlav.png"
  ],
  descricao: "Difusor de varetas e home spray Lavanda Francesa. Um perfume elegante, limpo e sofisticado para ambientes que pedem calma e equilíbrio.",
  descricaoHtml: `
    <h3>Lavanda Francesa — Lucc Concept</h3>

    <p>
      <strong>Lavanda Francesa</strong> é elegância serena.
      Um perfume criado para trazer equilíbrio, leveza e sensação de ordem,
      como um espaço que respira calma e bom gosto.
    </p>

    <p>
      Diferente da lavanda comum, esta interpretação é mais refinada,
      limpa e sofisticada.
      Nada de excessos adocicados ou notas agressivas —
      aqui, a lavanda aparece com suavidade,
      envolta em uma composição que transmite frescor,
      conforto e sofisticação silenciosa.
    </p>

    <h4>A experiência</h4>
    <p>
      Lavanda Francesa se abre com frescor delicado,
      quase translúcido,
      e evolui para um corpo confortável e elegante,
      que organiza o ambiente sem pesar.
      É aquele perfume que traz sensação de limpeza emocional,
      de espaço bem cuidado,
      de rotina que flui.
    </p>

    <p>
      Ideal para momentos de pausa,
      leitura,
      descanso
      e ambientes que pedem serenidade com estilo.
    </p>

    <h4>O kit</h4>
    <p>
      O conjunto reúne um <strong>difusor de varetas</strong>
      e um <strong>home spray</strong>,
      permitindo ajustar a intensidade do perfume
      de acordo com o momento e o espaço.
    </p>

    <ul>
      <li>Difusor de varetas com perfume Lavanda Francesa;</li>
      <li>Home spray com o mesmo perfume autoral;</li>
      <li>Frascos em <strong>PET</strong>, leves e funcionais;</li>
      <li>Volume: <strong>350 ml</strong> (cada item);</li>
      <li>Perfume equilibrado, limpo e sofisticado.</li>
    </ul>

    <h4>Por que escolher Lavanda Francesa?</h4>
    <ul>
      <li>Promove sensação imediata de calma e bem-estar;</li>
      <li>Perfume limpo e elegante, nunca invasivo;</li>
      <li>Ideal para quartos, lavabos, salas e espaços de relaxamento;</li>
      <li>Excelente para quem busca equilíbrio no dia a dia;</li>
      <li>Qualidade autoral Lucc Concept.</li>
    </ul>

    <h4>Para quem é</h4>
    <p>
      Para quem aprecia ambientes tranquilos,
      organizados e acolhedores.
      Para quem entende que o verdadeiro luxo
      também mora no silêncio,
      na leveza
      e na sensação de paz que fica.
    </p>
    <small> *Imagens meramente ilustrativas.</small>

    <p class="seo">
      Palavras-chave: lavanda francesa, difusor de varetas,
      home spray Lucc Concept, perfume autoral,
      perfume limpo e sofisticado, aromatizador elegante,
      decoração sensorial, bem-estar.
    </p>
  `
},


  
   {
  nome: "Bamboo — Difusor + Home Spray - 200ml",
  tipo: "aromatizadores",
  colecao: "Lucc Concept",
  quantidade: "kit",
  preco: 189, // defina o valor final
  imagens: [
    "imagens/dhpeqbamboo.png"
  ],
  descricao: "Difusor de varetas e home spray Bamboo. Um perfume verde, limpo e contemporâneo para ambientes que pedem frescor elegante.",
  descricaoHtml: `
    <h3>Bamboo — Lucc Concept</h3>

    <p>
      <strong>Bamboo</strong> é frescor com intenção.
      Um perfume criado para trazer leveza, organização e sensação de espaço,
      como um ambiente que respira bem-estar e modernidade.
    </p>

    <p>
      Verde, limpo e equilibrado,
      Bamboo traduz a ideia de natureza urbana —
      aquele frescor que convive com concreto, vidro e linhas contemporâneas,
      sem perder sofisticação.
    </p>

    <h4>A experiência</h4>
    <p>
      Bamboo se abre com notas verdes transparentes,
      trazendo sensação imediata de ar renovado.
      Ao evoluir, revela um corpo suave e confortável,
      que permanece no ambiente de forma elegante,
      sem pesar e sem cansar.
    </p>

    <p>
      É um perfume que organiza o espaço.
      Ideal para quem gosta de ambientes claros,
      funcionais e visualmente limpos.
    </p>

    <h4>O kit</h4>
    <p>
      O conjunto reúne um <strong>difusor de varetas</strong>
      e um <strong>home spray</strong>,
      permitindo reforçar o perfume pontualmente
      ou manter uma presença constante no ambiente.
    </p>

    <ul>
      <li>Difusor de varetas com perfume Bamboo;</li>
      <li>Home spray com o mesmo perfume autoral;</li>
      <li>Frascos em <strong>PET</strong>, leves e funcionais;</li>
      <li>Volume: <strong>200 ml</strong> (cada item);</li>
      <li>Perfume verde, limpo e contemporâneo.</li>
    </ul>

    <h4>Por que escolher Bamboo?</h4>
    <ul>
      <li>Cria sensação de frescor imediato;</li>
      <li>Perfume limpo, elegante e nada invasivo;</li>
      <li>Combina com ambientes modernos e minimalistas;</li>
      <li>Excelente para salas, escritórios, lavabos e recepções;</li>
      <li>Qualidade autoral Lucc Concept.</li>
    </ul>

    <h4>Para quem é</h4>
    <p>
      Para quem gosta de ambientes claros,
      organizados e contemporâneos.
      Para quem busca frescor elegante no dia a dia,
      sem excessos
      e sem obviedade.
    </p>
    <small> *Imagens meramente ilustrativas.</small>

    <p class="seo">
      Palavras-chave: bamboo, difusor de varetas,
      home spray Lucc Concept, perfume verde,
      aromatizador contemporâneo, frescor elegante,
      decoração minimalista, bem-estar.
    </p>
  `
},

{
  nome: "Bamboo — Difusor + Home Spray - 350ml",
  tipo: "aromatizadores",
  colecao: "Lucc Concept",
  quantidade: "kit",
  preco: 279, // defina o valor final
  imagens: [
    "imagens/dhgrbamboo.png"
  ],
  descricao: "Difusor de varetas e home spray Bamboo. Um perfume verde, limpo e contemporâneo para ambientes que pedem frescor elegante.",
  descricaoHtml: `
    <h3>Bamboo — Lucc Concept</h3>

    <p>
      <strong>Bamboo</strong> é frescor com intenção.
      Um perfume criado para trazer leveza, organização e sensação de espaço,
      como um ambiente que respira bem-estar e modernidade.
    </p>

    <p>
      Verde, limpo e equilibrado,
      Bamboo traduz a ideia de natureza urbana —
      aquele frescor que convive com concreto, vidro e linhas contemporâneas,
      sem perder sofisticação.
    </p>

    <h4>A experiência</h4>
    <p>
      Bamboo se abre com notas verdes transparentes,
      trazendo sensação imediata de ar renovado.
      Ao evoluir, revela um corpo suave e confortável,
      que permanece no ambiente de forma elegante,
      sem pesar e sem cansar.
    </p>

    <p>
      É um perfume que organiza o espaço.
      Ideal para quem gosta de ambientes claros,
      funcionais e visualmente limpos.
    </p>

    <h4>O kit</h4>
    <p>
      O conjunto reúne um <strong>difusor de varetas</strong>
      e um <strong>home spray</strong>,
      permitindo reforçar o perfume pontualmente
      ou manter uma presença constante no ambiente.
    </p>

    <ul>
      <li>Difusor de varetas com perfume Bamboo;</li>
      <li>Home spray com o mesmo perfume autoral;</li>
      <li>Frascos em <strong>PET</strong>, leves e funcionais;</li>
      <li>Volume: <strong>350 ml</strong> (cada item);</li>
      <li>Perfume verde, limpo e contemporâneo.</li>
    </ul>

    <h4>Por que escolher Bamboo?</h4>
    <ul>
      <li>Cria sensação de frescor imediato;</li>
      <li>Perfume limpo, elegante e nada invasivo;</li>
      <li>Combina com ambientes modernos e minimalistas;</li>
      <li>Excelente para salas, escritórios, lavabos e recepções;</li>
      <li>Qualidade autoral Lucc Concept.</li>
    </ul>

    <h4>Para quem é</h4>
    <p>
      Para quem gosta de ambientes claros,
      organizados e contemporâneos.
      Para quem busca frescor elegante no dia a dia,
      sem excessos
      e sem obviedade.
    </p>
    <small> *Imagens meramente ilustrativas.</small>

    <p class="seo">
      Palavras-chave: bamboo, difusor de varetas,
      home spray Lucc Concept, perfume verde,
      aromatizador contemporâneo, frescor elegante,
      decoração minimalista, bem-estar.
    </p>
  `
},
{
  nome: "QUASE — Fine Art",
  tipo: "obras",
  colecao: "Autoral",
  quantidade: "obra-unica",
  preco: 680, 
  imagens: [
    "imagens/galeria.png",
    "imagens/ilustração3.png",
   ],
  descricao: "Uma pausa antes do gesto. Um instante suspenso entre desejo e silêncio.",
  descricaoHtml: `
    <h3>QUASE — Fine Art</h3>

    <p>
      <strong>QUASE</strong> é o instante em que tudo hesita.
      O tempo diminui o passo,
      o desejo respira,
      e nada ainda acontece.
    </p>

    <p>
      Uma obra de atmosfera noir,
      onde luz e sombra se aproximam
      da mesma forma que os corpos —
      sem pressa,
      sem ruído,
      sem explicação.
    </p>

    <h4>A obra</h4>
    <p>
      Criada a partir de ilustração autoral,
      <strong>QUASE</strong> trabalha o espaço do não-dito:
      o intervalo entre um gesto e outro,
      onde a tensão é mais intensa do que o toque.
    </p>

    <ul>
      <li>Impressão <strong>Fine Art</strong> de alta qualidade;</li>
      <li>Contraste profundo e leitura sofisticada;</li>
      <li>Textura pensada para atmosfera de galeria;</li>
      <li>Obra autoral Lucc Concept.</li>
    </ul>

    <h4>Ficha Técnica</h4>
    <table class="tabela-ficha">
      <tr><th>Técnica</th><td>Ilustração digital autoral</td></tr>
      <tr><th>Impressão</th><td>Fine Art de alta qualidade</td></tr>
      <tr><th>Formato</th><td>Vertical</td></tr>
      <tr><th>Produção</th><td>Sob demanda</td></tr>
      <tr><th>Certificado</th><td>Acompanha certificado de autenticidade</td></tr>
    </table>

    <h4>Para quem é</h4>
    <p>
      Para quem entende que arte não precisa explicar.
      Para quem sente antes de compreender.
      Para ambientes que pedem silêncio,
      profundidade
      e presença.
    </p>

    <p class="seo">
      Palavras-chave: obra quase, fine art noir, arte autoral brasileira,
      arte contemporânea, casal noir, quase beijo, Lucc Concept, arte sensorial.
    </p>
  `
},

{
  nome: "Vanilla Home — Difusor + Home Spray - 200ml",
  tipo: "aromatizadores",
  colecao: "Lucc Concept",
  quantidade: "kit",
  preco: 189, // defina o valor final
  imagens: [
    "imagens/dhpeqvanilla.png"
  ],
  descricao: "Difusor de varetas e home spray Vanilla Home. Um perfume cremoso, acolhedor e sofisticado para ambientes que pedem conforto elegante.",
  descricaoHtml: `
    <h3>Vanilla Home — Lucc Concept</h3>

    <p>
      <strong>Vanilla Home</strong> é conforto elevado.
      Um perfume criado para acolher,
      envolver
      e transformar o ambiente em refúgio —
      elegante, calmo e profundamente agradável.
    </p>

    <p>
      Aqui, a baunilha aparece em sua versão mais adulta e sofisticada.
      Nada de doçura excessiva ou notas artificiais.
      Vanilla Home é cremosa, macia e equilibrada,
      com fundo quente que transmite cuidado e permanência.
    </p>

    <h4>A experiência</h4>
    <p>
      A abertura é suave e envolvente,
      trazendo sensação imediata de aconchego.
      Ao evoluir, o perfume ganha corpo,
      permanecendo no ambiente de forma confortável,
      elegante
      e silenciosamente marcante.
    </p>

    <p>
      É o tipo de perfume que transforma a rotina em ritual:
      chegar em casa,
      fechar a porta,
      respirar fundo.
    </p>

    <h4>O kit</h4>
    <p>
      O conjunto reúne um <strong>difusor de varetas</strong>
      e um <strong>home spray</strong>,
      permitindo controlar a intensidade do perfume
      de acordo com o momento e o espaço.
    </p>

    <ul>
      <li>Difusor de varetas com perfume Vanilla Home;</li>
      <li>Home spray com o mesmo perfume autoral;</li>
      <li>Frascos em <strong>PET</strong>, leves e funcionais;</li>
      <li>Volume: <strong>200 ml</strong> (cada item);</li>
      <li>Perfume cremoso, elegante e acolhedor.</li>
    </ul>

    <h4>Por que escolher Vanilla Home?</h4>
    <ul>
      <li>Cria sensação imediata de conforto e acolhimento;</li>
      <li>Baunilha sofisticada, adulta e nada enjoativa;</li>
      <li>Ideal para salas, quartos e espaços de descanso;</li>
      <li>Perfume que permanece sem invadir;</li>
      <li>Qualidade autoral Lucc Concept.</li>
    </ul>

    <h4>Para quem é</h4>
    <p>
      Para quem ama a sensação de casa bem cuidada.
      Para quem valoriza conforto,
      calor emocional
      e perfumes que abraçam
      sem excesso.
    </p>
    <small> *Imagens meramente ilustrativas.</small>

    <p class="seo">
      Palavras-chave: vanilla home, difusor de varetas,
      home spray Lucc Concept, perfume de baunilha sofisticado,
      aromatizador acolhedor, decoração sensorial,
      bem-estar e conforto.
    </p>
  `
},

{
  nome: "Vanilla Home — Difusor + Home Spray - 350ml",
  tipo: "aromatizadores",
  colecao: "Lucc Concept",
  quantidade: "kit",
  preco: 279, // defina o valor final
  imagens: [
    "imagens/dhgrvanilla.png"
  ],
  descricao: "Difusor de varetas e home spray Vanilla Home. Um perfume cremoso, acolhedor e sofisticado para ambientes que pedem conforto elegante.",
  descricaoHtml: `
    <h3>Vanilla Home — Lucc Concept</h3>

    <p>
      <strong>Vanilla Home</strong> é conforto elevado.
      Um perfume criado para acolher,
      envolver
      e transformar o ambiente em refúgio —
      elegante, calmo e profundamente agradável.
    </p>

    <p>
      Aqui, a baunilha aparece em sua versão mais adulta e sofisticada.
      Nada de doçura excessiva ou notas artificiais.
      Vanilla Home é cremosa, macia e equilibrada,
      com fundo quente que transmite cuidado e permanência.
    </p>

    <h4>A experiência</h4>
    <p>
      A abertura é suave e envolvente,
      trazendo sensação imediata de aconchego.
      Ao evoluir, o perfume ganha corpo,
      permanecendo no ambiente de forma confortável,
      elegante
      e silenciosamente marcante.
    </p>

    <p>
      É o tipo de perfume que transforma a rotina em ritual:
      chegar em casa,
      fechar a porta,
      respirar fundo.
    </p>

    <h4>O kit</h4>
    <p>
      O conjunto reúne um <strong>difusor de varetas</strong>
      e um <strong>home spray</strong>,
      permitindo controlar a intensidade do perfume
      de acordo com o momento e o espaço.
    </p>

    <ul>
      <li>Difusor de varetas com perfume Vanilla Home;</li>
      <li>Home spray com o mesmo perfume autoral;</li>
      <li>Frascos em <strong>PET</strong>, leves e funcionais;</li>
      <li>Volume: <strong>350 ml</strong> (cada item);</li>
      <li>Perfume cremoso, elegante e acolhedor.</li>
    </ul>

    <h4>Por que escolher Vanilla Home?</h4>
    <ul>
      <li>Cria sensação imediata de conforto e acolhimento;</li>
      <li>Baunilha sofisticada, adulta e nada enjoativa;</li>
      <li>Ideal para salas, quartos e espaços de descanso;</li>
      <li>Perfume que permanece sem invadir;</li>
      <li>Qualidade autoral Lucc Concept.</li>
    </ul>

    <h4>Para quem é</h4>
    <p>
      Para quem ama a sensação de casa bem cuidada.
      Para quem valoriza conforto,
      calor emocional
      e perfumes que abraçam
      sem excesso.
    </p>
    <small> *Imagens meramente ilustrativas.</small>

    <p class="seo">
      Palavras-chave: vanilla home, difusor de varetas,
      home spray Lucc Concept, perfume de baunilha sofisticado,
      aromatizador acolhedor, decoração sensorial,
      bem-estar e conforto.
    </p>
  `
},

];


// ================================
// 🧱 Renderizar produtos na loja
// ================================
function renderProdutos(lista = produtos) {
  const grid = document.getElementById("grid-produtos");
  if (!grid) return;

  grid.innerHTML = "";

  lista.forEach((produto) => {
    const card = document.createElement("div");
    card.classList.add("produto-card");

    const preco = (produto.preco ?? 0);

    card.innerHTML = `
      <img src="${produto.imagens?.[0] || ""}" alt="${produto.nome || ""}">
      <div class="produto-info">
        <h3>${produto.nome || ""}</h3>
        <p class="preco">R$ ${Number(preco).toFixed(2)}</p>
        <button class="btn-comprar" type="button">Ver detalhes</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Render inicial
renderProdutos();

// ================================
// 🖼️ Modal do Produto + Carrossel
// ================================
function ensureCarouselWrapper(modalImagem) {
  // Evita criar wrapper infinito toda vez que abre o modal
  let wrapper = modalImagem.closest(".carousel-wrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.classList.add("carousel-wrapper");
    modalImagem.parentNode.insertBefore(wrapper, modalImagem);
    wrapper.appendChild(modalImagem);
  }
  return wrapper;
}

function renderCarouselControls(wrapper) {
  // Remove controles antigos
  const oldControls = wrapper.querySelector(".carousel-controls");
  if (oldControls) oldControls.remove();

  const controls = document.createElement("div");
  controls.classList.add("carousel-controls");
  controls.innerHTML = `
    <button id="prevImg" type="button">←</button>
    <button id="nextImg" type="button">→</button>
  `;
  wrapper.appendChild(controls);

  return controls;
}

function openProductModal(produto) {
  const elModal = document.getElementById("modalProduto");
  const modalImagem = document.getElementById("modalImagem");
  const modalTitulo = document.getElementById("modalTitulo");
  const modalDescricao = document.getElementById("modalDescricao");
  const modalPreco = document.getElementById("modalPreco");
  const btnComprar = document.getElementById("modalComprar");

  if (!elModal || !modalImagem || !modalTitulo || !modalDescricao || !modalPreco) return;

  // Bootstrap instance (seguro, mesmo se chamar várias vezes)
  const modalProduto = bootstrap.Modal.getOrCreateInstance(elModal);

  // Preenche texto
  modalTitulo.textContent = produto.nome || "";
  modalDescricao.innerHTML = produto.descricaoHtml || produto.descricao || "";
  modalPreco.textContent = `R$ ${Number(produto.preco ?? 0).toFixed(2)}`;

  // Botão do modal -> Mercado Livre
  if (btnComprar) {
    btnComprar.textContent = "Comprar no Mercado Livre";
    btnComprar.onclick = () => {
      if (!produto.mlUrl) {
        alert("Falta configurar o link do Mercado Livre (mlUrl) para este produto no java.js.");
        return;
      }
      window.open(produto.mlUrl, "_blank", "noopener,noreferrer");
    };
  }

  // Carrossel
  let imagemIndex = 0;
  const imagens = Array.isArray(produto.imagens) ? produto.imagens : [];

  modalImagem.style.transition = "opacity 0.4s ease";
  modalImagem.src = imagens[0] || "";

  const wrapper = ensureCarouselWrapper(modalImagem);
  renderCarouselControls(wrapper);

  function trocarImagem(novoIndex) {
    if (!imagens.length) return;

    modalImagem.style.opacity = 0;
    setTimeout(() => {
      imagemIndex = (novoIndex + imagens.length) % imagens.length;
      modalImagem.src = imagens[imagemIndex];
      modalImagem.style.opacity = 1;
    }, 250);
  }

  const prevBtn = document.getElementById("prevImg");
  const nextBtn = document.getElementById("nextImg");

  if (prevBtn) prevBtn.onclick = () => trocarImagem(imagemIndex - 1);
  if (nextBtn) nextBtn.onclick = () => trocarImagem(imagemIndex + 1);

  // Abre modal
  modalProduto.show();
}

// ================================
// 🖱️ Clique no card OU no botão -> abre modal
// ================================
document.addEventListener("click", (e) => {
  const card = e.target.closest(".produto-card");
  if (!card) return;

  const nome = card.querySelector("h3")?.textContent?.trim();
  if (!nome) return;

  const produto = produtos.find((p) => (p.nome || "").trim() === nome);
  if (!produto) return;

  // Qualquer clique no card (incluindo "Ver detalhes") abre o modal
  openProductModal(produto);
});
