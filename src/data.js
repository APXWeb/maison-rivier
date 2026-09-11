export const WHATSAPP_NUMBER = '5511944815707'

const CORE_COLORS = [
  { name: 'Preto', hex: '#17171A' },
  { name: 'Branco', hex: '#F5F3EE' },
  { name: 'Bege Areia', hex: '#C9B79C' },
  { name: 'Cinza Mescla', hex: '#9B9B9B' },
  { name: 'Verde Oliva', hex: '#5C5F45' }
]

export const PRODUCTS = [
  {
    id: 'polo',
    article: 'no',
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
    sizes: ['P', 'M', 'G', 'GG'],
    variants: [
      { name: 'Piquet', sketch: 'polo', photo: 'assets/img/polo.jpg' }
    ]
  },
  {
    id: 'moletom',
    article: 'no',
    tag: 'Moletons',
    name: 'Moletom',
    description: 'Capuz duplo, cordão personalizado e bordado exclusivo. Composição em algodão premium com felpa penteada.',
    price: 'R$ 399,90',
    colors: CORE_COLORS,
    sizes: ['P', 'M', 'G', 'GG'],
    variants: [
      { name: 'Oversized', sketch: 'moletom', photo: 'assets/img/moletom.jpg' },
      { name: 'Zíper', sketch: 'moletom-zip', photo: 'assets/img/moletom-zip.jpg' }
    ]
  },
  {
    id: 'calca',
    article: 'na',
    tag: 'Calças',
    name: 'Calça',
    description: 'Cós elástico com cordão personalizado, bolsos laterais e bolso traseiro, bordado exclusivo. Algodão premium com elastano.',
    price: 'R$ 329,90',
    colors: CORE_COLORS,
    sizes: ['P', 'M', 'G', 'GG'],
    variants: [
      { name: 'Reta', sketch: 'calca', photo: 'assets/img/calca.jpg' },
      { name: 'Cargo', sketch: 'calca-cargo', photo: 'assets/img/calca-cargo.jpg' }
    ]
  },
  {
    id: 'bermuda',
    article: 'na',
    tag: 'Bermudas',
    name: 'Bermuda',
    description: 'Cós com passantes, fechamento em botão, bolsos laterais e bolso traseiro, bordado exclusivo.',
    price: 'R$ 279,90',
    colors: CORE_COLORS,
    sizes: ['P', 'M', 'G', 'GG'],
    variants: [
      { name: 'Alfaiataria', sketch: 'bermuda', photo: 'assets/img/bermuda.jpg' },
      { name: 'Moletom', sketch: 'bermuda-moletom', photo: 'assets/img/bermuda-moletom.jpg' }
    ]
  }
]

export const ACCESSORIES = [
  { id: 'bone', sketch: 'bone', name: 'Boné', article: 'no', price: 'R$ 199,90' },
  { id: 'cinto', sketch: 'cinto', name: 'Cinto', article: 'no', price: 'R$ 249,90' },
  { id: 'meia', sketch: 'meia', name: 'Meias', article: 'nas', price: 'R$ 59,90' },
  { id: 'pochete', sketch: 'pochete', name: 'Pochete', article: 'na', price: 'R$ 179,90' },
  { id: 'mochila', sketch: 'mochila', name: 'Mochila', article: 'na', price: 'R$ 399,90' },
  { id: 'carteira', sketch: 'carteira', name: 'Carteira', article: 'na', price: 'R$ 219,90' },
  { id: 'tag', sketch: 'tag', name: 'Chaveiro', article: 'no', price: 'R$ 99,90' }
]

export function accessoryWhatsAppLink(item) {
  const message = `Olá! Tenho interesse ${item.article} ${item.name} Maison Rivier. Poderiam me ajudar com disponibilidade?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function contactWhatsAppLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vi o site da Maison Rivier e gostaria de mais informações.')}`
}
