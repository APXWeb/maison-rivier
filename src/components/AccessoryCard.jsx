import { motion } from 'motion/react'
import { accessoryWhatsAppLink } from '../data.js'

export default function AccessoryCard({ item, index }) {
  return (
    <motion.a
      className="acessorio"
      href={accessoryWhatsAppLink(item)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <span className="acessorio-name">{item.name}</span>
      <span className="acessorio-price">{item.price}</span>
    </motion.a>
  )
}
