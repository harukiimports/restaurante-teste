// Dados do restaurante — editar aqui quando o briefing.md for preenchido
// (endereço, telefone, cardápio e fotos reais).
export const restaurante = {
  nome: "Paulistão de Ouro",
  slogan: "Tradição paulista, em cada detalhe.",
  descricao:
    "Há anos servindo os clássicos da cozinha paulista com cortes nobres, ingredientes selecionados e o acolhimento de quem recebe em casa.",
  endereco: "Av. Exemplo, 000 — Centro, Cotia/SP",
  telefone: "(11) 90000-0000",
  whatsapp: "5511900000000",
  horario: [
    { dias: "Terça a Sexta", horas: "18h às 23h" },
    { dias: "Sábado e Domingo", horas: "12h às 23h" },
  ],
  redes: {
    instagram: "https://instagram.com/",
  },
  imagemHero: "/images/hero.jpg",
  cardapio: [
    {
      categoria: "Entradas",
      itens: [
        { nome: "Pão de Alho na Brasa", desc: "Manteiga de ervas, finalizado na brasa.", preco: "29", imagem: "/images/pao-de-alho.jpg" },
        { nome: "Carpaccio Paulistão", desc: "Lâminas finas, alcaparras e parmesão.", preco: "42", imagem: "/images/carpaccio.jpg" },
      ],
    },
    {
      categoria: "Pratos Principais",
      itens: [
        { nome: "Picanha na Brasa", desc: "400g, acompanha farofa e vinagrete.", preco: "98", imagem: "/images/picanha.jpg" },
        { nome: "Risoto de Filé Mignon", desc: "Arbóreo, funghi secco e parmesão.", preco: "76", imagem: "/images/risoto.jpg" },
        { nome: "Bacalhau à Paulistão", desc: "Receita da casa, azeite extra virgem.", preco: "89", imagem: "/images/bacalhau.jpg" },
      ],
    },
    {
      categoria: "Sobremesas",
      itens: [
        { nome: "Petit Gâteau", desc: "Sorvete de creme artesanal.", preco: "28", imagem: "/images/petit-gateau.jpg" },
      ],
    },
  ],
};
