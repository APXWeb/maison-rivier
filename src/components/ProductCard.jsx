import { useState } from 'react'
import { motion } from 'motion/react'
import Sketch from './Sketch.jsx'
import { WHATSAPP_NUMBER } from '../data.js'

export default function ProductCard({ product, index }) {
  const [variant, setVariant] = useState(product.variants[0])
  const [color, setColor] = useState(product.colors[0])
  const [size, setSize] = useState(product.sizes[0])

  const fullName = product.variants.length > 1 ? `${product.name} ${variant.name}` : product.name
  const message = `Olá! Tenho interesse no ${fullName} Maison Rivier.\nCor: ${color.name}\nTamanho: ${size}\nPreço: ${product.price}\n\nPoderiam me ajudar com disponibilidade e prazo?`
  const orderHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <motion.article
      className="produto-card"
      style={{ '--current-fill': color.hex }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.11, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="produto-card-photo">
        {variant.photo ? (
          <img src={variant.photo} alt={`${product.name} ${variant.name} Maison Rivier`} className="produto-card-real-photo" />
        ) : (
          <div className="sketch-slot">
            <Sketch name={variant.sketch} />
          </div>
        )}
      </div>
      <span className="produto-card-tag">{product.tag}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="produto-card-price">{product.price}</div>

      {product.variants.length > 1 && (
        <div className="produto-card-row">
          <span className="produto-card-label">Modelo: <em>{variant.name}</em></span>
          <div className="variant-row">
            {product.variants.map(v => (
              <button
                key={v.name}
                type="button"
                className={`variant-chip${v.name === variant.name ? ' active' : ''}`}
                aria-pressed={v.name === variant.name}
                onClick={() => setVariant(v)}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="produto-card-row">
        <span className="produto-card-label">Cor: <em>{color.name}</em></span>
        <div className="swatch-row">
          {product.colors.map(c => (
            <button
              key={c.name}
              type="button"
              className={`swatch${c.name === color.name ? ' active' : ''}`}
              style={{ '--swatch': c.hex }}
              aria-label={c.name}
              aria-pressed={c.name === color.name}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
      </div>

      <div className="produto-card-row">
        <span className="produto-card-label">Tamanho</span>
        <div className="size-row">
          {product.sizes.map(s => (
            <button
              key={s}
              type="button"
              className={`size-chip${s === size ? ' active' : ''}`}
              aria-pressed={s === size}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <a className="produto-card-btn" href={orderHref} target="_blank" rel="noopener noreferrer">
        Solicitar via WhatsApp
      </a>
    </motion.article>
  )
}
