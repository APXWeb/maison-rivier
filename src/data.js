export const WHATSAPP_NUMBER = '5511944815707'

export const PRODUCTS = [
  {
    id: 'polo',
    sketch: 'polo',
    tag: 'Polos',
    name: 'Polo Piquet',
    description: 'Algodão piquet premium, gola estruturada, brasão bordado.',
    price: 'R$ 249,90',
    colors: [
      { name: 'Azul Marinho', hex: '#0B1E33' },
      { name: 'Branco', hex: '#F5F3EE' },
      { name: 'Bege Areia', hex: '#C9B79C' },
      { name: 'Verde Oliva', hex: '#5C5F45' },
      { name: 'Preto', hex: '#17171A' }
    ],
    sizes: ['P', 'M', 'G', 'GG']
  },
  {
    id: 'moletom',
    sketch: 'moletom',
    tag: 'Moletons',
    name: 'Moletom',
    description: 'Oversized ou com zíper, capuz duplo, bordado exclusivo.',
    price: 'R$ 399,90',
    colors: [
      { name: 'Preto', hex: '#17171A' },
      { name: 'Branco', hex: '#F5F3EE' },
      { name: 'Bege Areia', hex: '#C9B79C' },
      { name: 'Cinza Mescla', hex: '#9B9B9B' },
      { name: 'Verde Oliva', hex: '#5C5F45' }
    ],
    sizes: ['P', 'M', 'G', 'GG']
  },
  {
    id: 'calca',
    sketch: 'calca',
    tag: 'Calças',
    name: 'Calça',
    description: 'Modelagem reta ou cargo, cós elástico, bordado exclusivo.',
    price: 'R$ 329,90',
    colors: [
      { name: 'Preto', hex: '#17171A' },
      { name: 'Branco', hex: '#F5F3EE' },
      { name: 'Bege Areia', hex: '#C9B79C' },
      { name: 'Cinza Mescla', hex: '#9B9B9B' },
      { name: 'Verde Oliva', hex: '#5C5F45' }
    ],
    sizes: ['P', 'M', 'G', 'GG']
  },
  {
    id: 'bermuda',
    sketch: 'bermuda',
    tag: 'Bermudas',
    name: 'Bermuda',
    description: 'Alfaiataria ou moletom, leve e versátil.',
    price: 'R$ 279,90',
    colors: [
      { name: 'Preto', hex: '#17171A' },
      { name: 'Branco', hex: '#F5F3EE' },
      { name: 'Bege Areia', hex: '#C9B79C' },
      { name: 'Cinza Mescla', hex: '#9B9B9B' },
      { name: 'Verde Oliva', hex: '#5C5F45' }
    ],
    sizes: ['P', 'M', 'G', 'GG']
  }
]

export const ACCESSORIES = [
  { id: 'bone', sketch: 'bone', name: 'Boné', article: 'no', price: 'R$ 199,90' },
  { id: 'cinto', sketch: 'cinto', name: 'Cinto', article: 'no', price: 'R$ 249,90' },
  { id: 'meia', sketch: 'meia', name: 'Meia', article: 'na', price: 'R$ 59,90' },
  { id: 'pochete', sketch: 'pochete', name: 'Pochete', article: 'na', price: 'R$ 179,90' },
  { id: 'mochila', sketch: 'mochila', name: 'Mochila', article: 'na', price: 'R$ 399,90' },
  { id: 'carteira', sketch: 'carteira', name: 'Carteira', article: 'na', price: 'R$ 219,90' },
  { id: 'tag', sketch: 'tag', name: 'Tag/Chaveiro', article: 'na', price: 'R$ 99,90' }
]

export function accessoryWhatsAppLink(item) {
  const message = `Olá! Tenho interesse ${item.article} ${item.name} Maison Rivier. Poderiam me ajudar com disponibilidade?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function contactWhatsAppLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vi o site da Maison Rivier e gostaria de mais informações.')}`
}
