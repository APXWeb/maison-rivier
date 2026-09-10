import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import Sketch from './components/Sketch.jsx'
import ProductCard from './components/ProductCard.jsx'
import AccessoryCard from './components/AccessoryCard.jsx'
import { PRODUCTS, ACCESSORIES, contactWhatsAppLink } from './data.js'

const EASE = [0.16, 1, 0.3, 1]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.8, delay, ease: EASE }
  }
}

export default function App() {
  const prefersReducedMotion = useReducedMotion()
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const cursorRef = useRef(null)

  useEffect(() => {
    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)
        setShowBackToTop(window.scrollY > 600)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll);
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return
    function onMove(e) {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [prefersReducedMotion])

  function closeNav() {
    setNavOpen(false)
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <>
      {!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches && (
        <div className="cursor-glow" ref={cursorRef} aria-hidden="true" />
      )}

      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#inicio" className="logo">
            <img src="assets/img/crest-square.jpg" alt="Maison Rivier" className="logo-crest" />
          </a>

          <nav className={`nav-links${navOpen ? ' open' : ''}`}>
            <a href="#colecao" onClick={closeNav}>Coleção</a>
            <a href="#acessorios" onClick={closeNav}>Acessórios</a>
            <a href="#contato" onClick={closeNav}>Contato</a>
          </nav>

          <button
            className={`nav-toggle${navOpen ? ' open' : ''}`}
            aria-label="Abrir menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(o => !o)}
          >
            <span></span><span></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <img src="assets/img/crest.jpg" alt="" className="hero-glow-logo" aria-hidden="true" />

          <div className="hero-content">
            <motion.span className="hero-place" {...fadeUp(0)}>
              <i></i>Paris
            </motion.span>
            <motion.span className="hero-wordmark" {...fadeUp(0.11)}>
              Maison Rivier
            </motion.span>
            <motion.span className="hero-sub" {...fadeUp(0.22)}>
              Élégance · Discrétion · Intemporel
            </motion.span>
            <motion.p className="hero-desc" {...fadeUp(0.33)}>
              Peças atemporais, feitas sob encomenda em pequenos lotes — para o homem que não precisa gritar para ser notado.
            </motion.p>
            <motion.a href="#colecao" className="hero-cta" {...fadeUp(0.44)}>
              Ver Coleção
            </motion.a>
          </div>

          <div className="hero-scroll" aria-hidden="true"><i></i></div>
        </section>

        <section className="filmstrip" aria-label="Peças da coleção">
          <div className="filmstrip-track">
            {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
              <div className="filmstrip-item" key={`${p.id}-${i}`}>
                <div className="sketch-slot">
                  <Sketch name={p.sketch} />
                </div>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="colecao" id="colecao">
          <motion.div className="colecao-heading" {...fadeUp(0)}>
            <span className="eyebrow">Nossa coleção</span>
            <h2>Peças <span className="text-accent">disponíveis</span></h2>
            <p>Já em produção, feitas sob encomenda em pequenos lotes.</p>
          </motion.div>

          <div className="produtos-grid">
            {PRODUCTS.map((product, i) => (
              <ProductCard product={product} index={i} key={product.id} />
            ))}
          </div>
        </section>

        <section className="acessorios" id="acessorios">
          <motion.div className="colecao-heading" {...fadeUp(0)}>
            <span className="eyebrow">Detalhes que fazem a diferença</span>
            <h2>Acessórios</h2>
          </motion.div>

          <div className="acessorios-grid">
            {ACCESSORIES.map((item, i) => (
              <AccessoryCard item={item} index={i} key={item.id} />
            ))}
          </div>
        </section>

        <section className="contact" id="contato">
          <motion.div className="contact-inner" {...fadeUp(0)}>
            <span className="eyebrow">Fale conosco</span>
            <h2>Alguma <em>dúvida?</em></h2>
            <p>Pedidos, dúvidas sobre tamanhos ou prazos, fale direto com a gente.</p>
            <a className="text-link text-link-lg" href={contactWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp <i>→</i>
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer">
        <img src="assets/img/crest-square.jpg" alt="Maison Rivier" className="footer-crest" />
        <span className="footer-word">Maison Rivier</span>
        <nav className="footer-links">
          <a href="#colecao">Coleção</a>
          <a href="#acessorios">Acessórios</a>
          <a href="#contato">Contato</a>
        </nav>
        <p className="footer-legal">© 2026 Maison Rivier. Todos os direitos reservados.</p>
      </footer>

      <a
        className="whatsapp-float"
        href={contactWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.85 1h0a7.94 7.94 0 0 0 7.94-7.94 7.9 7.9 0 0 0-2.39-5.64Zm-5.55 12.2a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1 1 12.24-3.51 6.6 6.6 0 0 1-6.65 6.6Zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1-.5.64-.62.77-.23.15-.43.05a5.42 5.42 0 0 1-1.6-.98 5.98 5.98 0 0 1-1.1-1.37c-.12-.2 0-.3.09-.4s.2-.23.3-.35a1.4 1.4 0 0 0 .2-.33.37.37 0 0 0 0-.35c0-.1-.45-1.08-.62-1.48s-.33-.33-.45-.33-.25 0-.38 0a.73.73 0 0 0-.53.25 2.24 2.24 0 0 0-.7 1.66 3.9 3.9 0 0 0 .82 2.06 8.9 8.9 0 0 0 3.4 3.01c.47.2.84.32 1.13.42a2.7 2.7 0 0 0 1.24.08 2 2 0 0 0 1.32-.93 1.63 1.63 0 0 0 .11-.93c-.05-.08-.18-.13-.38-.23Z"/></svg>
      </a>

      <motion.button
        className={`back-to-top${showBackToTop ? ' show' : ''}`}
        aria-label="Voltar ao topo"
        onClick={scrollToTop}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        ↑
      </motion.button>
    </>
  )
}
