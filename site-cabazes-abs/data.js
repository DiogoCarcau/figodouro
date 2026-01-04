// Catálogo para a loja (usado no carrinho/checkout)
const PRODUTOS = [
  {
    id: "azeite-5l",
    name: "Azeite Santa Águeda — Garrafão 5L",
    price: 28.90,
    unit: "L",
    packSize: 5,
    desc: "Azeite virgem extra transmontano (produção biológica + métodos tradicionais). Indique quantos garrafões pretende.",
    img: "images/Azeite5L.png"
  },
  {
    id: "azeite-075",
    name: "Azeite Santa Águeda — 0,75L",
    price: 8.90,
    unit: "UN",
    desc: "Garrafa 0,75L (unidade) — virgem extra, frutado e equilibrado.",
    img: "images/Azeite2L.png"
  },
  {
    id: "figo-seco-1kg",
    name: "Figo Seco — 1Kg",
    price: 10.50,
    unit: "KG",
    desc: "Figo seco selecionado, sabor natural.",
    img: "images/figo.png"
  },
  {
    id: "amendoa-1kg",
    name: "Amêndoa — 1Kg",
    price: 12.90,
    unit: "KG",
    desc: "Amêndoa selecionada, crocante e fresca.",
    img: "images/amendoa.png"
  },
  {
    id: "noz-1kg",
    name: "Noz — 1Kg",
    price: 14.50,
    unit: "KG",
    desc: "Noz com miolo de qualidade e sabor intenso.",
    img: "images/noz.png"
  },
  {
    id: "feijao-frade-1kg",
    name: "Feijão-frade — 1Kg",
    price: 3.40,
    unit: "KG",
    desc: "Feijão-frade ideal para saladas e pratos tradicionais.",
    img: "images/feijao-frade.png"
  },
  {
    id: "grao-bico-1kg",
    name: "Grão-de-bico — 1Kg",
    price: 3.60,
    unit: "KG",
    desc: "Grão-de-bico seco, consistente e saboroso.",
    img: "images/grao-de-bico.png"
  },
  {
    id: "feijocas-1kg",
    name: "Feijocas — 1Kg",
    price: 3.80,
    unit: "KG",
    desc: "Feijocas para pratos de conforto, cheias de tradição.",
    img: "images/feijocas.png"
  },
  {
    id: "cabaz-tradicao",
    name: "Cabaz Tradição (Azeite + Figos)",
    price: 34.90,
    unit: "UN",
    desc: "Seleção para oferecer — azeite e figos.",
    img: "images/Cabaz.png"
  }
  {
    id: "cabaz-vale-do-tua-classico",
    name: "Cabaz FigoDouro — Vale do Tua (Clássico)",
    price: 29.90,
    unit: "UN",
    desc: "Figos secos + snack figo/amêndoa + azeite DOP Mirandela + folheto das aldeias.",
    img: "images/Cabaz.png"
  },
  {
    id: "cabaz-vale-do-tua-gourmet",
    name: "Cabaz FigoDouro — Vale do Tua (Gourmet)",
    price: 54.90,
    unit: "UN",
    desc: "Figo premium + snack figo/noz + compota + azeite Santa Águeda + mel + caixa rígida.",
    img: "images/Cabaz.png"
  },
  {
    id: "cabaz-vale-do-tua-luxo",
    name: "Cabaz FigoDouro — Vale do Tua (Luxo)",
    price: 79.90,
    unit: "UN",
    desc: "Para empresas e exportação: seleção premium, azeite 2L, embalagem madeira e certificado.",
    img: "images/Cabaz.png"
  },

];

// Conteúdos das páginas de produto (Home -> abrir detalhe)
const PRODUCT_PAGES = {
    "azeite": {
    title: "Azeite Santa Águeda",
    subtitle: "Azeite Virgem Extra transmontano — frutado, equilibrado e intenso.",
    img: "images/azeitona.png",
    body: [
      "O nosso azeite chama-se Azeite Santa Águeda e é produzido em Trás-os-Montes, numa das zonas mais tradicionais de olival em Portugal.",
      "Nasce entre oliveiras centenárias e práticas de produção biológica combinadas com métodos tradicionais, preservando o carácter do território.",
      "Apresenta um perfil frutado e equilibrado, típico das variedades transmontanas (Cobrançosa, Verdeal e Madural), com um sabor intenso e grande estabilidade.",
      "É um azeite muito usado tanto em consumo familiar como em restauração, pela sua versatilidade e pela forma como eleva pratos simples: saladas, peixe grelhado, legumes e pão."
    ],
    bullets: [
      "Origem: Trás-os-Montes",
      "Tipo: Azeite Virgem Extra",
      "Produção: biológica + métodos tradicionais",
      "Variedades: Cobrançosa, Verdeal, Madural"
    ]
  },
  "figo": {
    title: "Figos",
    subtitle: "Doces, aromáticos e selecionados com cuidado.",
    img: "images/figo.png",
    body: [
      "Os nossos figos são colhidos quando atingem o ponto certo de maturação, para manterem doçura natural e textura agradável.",
      "A secagem e conservação são feitas com atenção ao detalhe, evitando excessos e preservando o sabor característico.",
      "Perfeitos para snacks, tábuas de queijo, iogurtes ou receitas tradicionais."
    ],
    bullets: ["Doçura natural", "Textura macia", "Ótimos para lanche e culinária"],
    sizes: "Disponível em embalagens de 1Kg."
  },
  "amendoa": {
    title: "Amêndoa",
    subtitle: "Crocante, nutritiva e com sabor limpo.",
    img: "images/amendoa.png",
    body: [
      "A amêndoa é um clássico da nossa região: pequena, crocante e com aquele sabor seco e limpo que não enjoa.",
      "Selecionamos lotes com atenção ao calibre e à frescura, para garantir boa textura e aroma.",
      "Excelente ao natural, em bolos, granola, saladas ou como base para pastas e bebidas."
    ],
    bullets: ["Crocância e frescura", "Versátil na cozinha", "Fonte natural de energia"],
    sizes: "Disponível em embalagens de 1Kg."
  },
  "noz": {
    title: "Noz",
    subtitle: "Miolo consistente e aroma intenso.",
    img: "images/noz.png",
    body: [
      "A noz é valorizada pelo seu sabor rico e pela textura do miolo, ideal para quem gosta de um toque mais 'tostado' e profundo.",
      "Escolhemos nozes com boa qualidade de miolo, reduzindo quebras e garantindo melhor aproveitamento.",
      "Vai bem em saladas, sobremesas, pães e molhos — e, claro, ao natural."
    ],
    bullets: ["Aroma intenso", "Miolo de qualidade", "Perfeita para doces e salgadas"],
    sizes: "Disponível em embalagens de 1Kg."
  },
  "feijao-frade": {
    title: "Feijão-frade",
    subtitle: "Leve, prático e perfeito para pratos frescos.",
    img: "images/feijao-frade.png",
    body: [
      "O feijão-frade é daqueles produtos que 'salva' refeições: fica ótimo em saladas, com atum, bacalhau, ou em pratos de forno.",
      "Depois de demolhado e cozido, mantém a textura firme sem perder suavidade.",
      "Uma opção simples, nutritiva e muito portuguesa."
    ],
    bullets: ["Textura firme", "Ideal para saladas", "Prático e nutritivo"],
    sizes: "Disponível em embalagens de 1Kg."
  },
  "grao-de-bico": {
    title: "Grão-de-bico",
    subtitle: "Tradicional, consistente e cheio de possibilidades.",
    img: "images/grao-de-bico.png",
    body: [
      "O grão-de-bico é base de muitos pratos tradicionais e também de receitas modernas como húmus, saladas e bowls.",
      "Quando bem cozinhado, fica cremoso por dentro e mantém estrutura por fora.",
      "Ótimo para cozidos, sopas e pratos vegetarianos."
    ],
    bullets: ["Consistência e sabor", "Excelente para húmus", "Perfeito para cozidos e sopas"],
    sizes: "Disponível em embalagens de 1Kg."
  },  "cabazes": {
    title: "Cabazes FIGODOURO — Vale do Tua",
    subtitle: "Três versões pensadas para oferta, famílias, empresas e exportação.",
    img: "images/Cabaz.png",
    body: [
      "Os cabazes FigoDouro — Vale do Tua reúnem os sabores mais representativos da nossa terra, com diferentes níveis de seleção e apresentação.",
      "Versão Clássica (25€–30€): figos secos (200g), snack figo + amêndoa (150g), azeite DOP Mirandela (500ml) e folheto com a história das aldeias.",
      "Versão Gourmet (45€–55€): figo seco premium, snack figo + noz, compota de figo, azeite premium Santa Águeda (ou equivalente), mel de rosmaninho e caixa rígida FigoDouro.",
      "Versão Luxo (75€+): para empresas e exportação, com produtos selecionados, garrafa de azeite 2 litros, embalagem em madeira e certificado de origem das aldeias."
    ],
    bullets: [
      "Clássico: perfeito para oferecer",
      "Gourmet: experiência premium",
      "Luxo: empresas e exportação"
    ]
  },

  "feijocas": {
    title: "Feijocas",
    subtitle: "Sabor tradicional para pratos de conforto.",
    img: "images/feijocas.png",
    body: [
      "As feijocas são um produto de cozinha 'à antiga': dão corpo aos pratos e trazem aquele sabor caseiro que se reconhece.",
      "Depois de demolhadas, cozinham bem e ficam macias, ideais para feijoada, acompanhamentos e assados.",
      "Uma escolha segura para quem gosta de comida com identidade."
    ],
    bullets: ["Cozedura uniforme", "Ótimas para feijoadas", "Sabor tradicional"],
    sizes: "Disponível em embalagens de 1Kg."
  }
};
