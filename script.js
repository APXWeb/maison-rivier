(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const WHATSAPP_NUMBER = '5511944815707';

  // Product illustrations — filled, shaded flat-design renders matching the real photos
  const SKETCHES = {
    polo: {
      viewBox: '0 0 300 380',
      fill: '#0B1E33',
      markup: `
        <path class="outline" style="fill:var(--current-fill,#0B1E33)" d="M70,60 L25,78 L35,100 L55,140 L82,148 L68,340 L232,340 L218,148 L245,140 L265,100 L275,78 L230,60 L180,44 L150,66 L120,44 Z"/>
        <path class="shadow" d="M68,150 L82,150 L75,340 L60,340 Z"/>
        <path class="highlight" d="M90,65 L170,58 L165,90 L95,95 Z"/>
        <path class="shadow" d="M120,44 L150,66 L112,76 Z"/>
        <path class="shadow" d="M180,44 L150,66 L188,76 Z"/>
        <rect class="shadow" x="144" y="66" width="12" height="78" rx="2"/>
        <circle cx="150" cy="92" r="3.2" fill="#e9e4d8" stroke="rgba(0,0,0,0.4)" stroke-width="0.8"/>
        <circle cx="150" cy="120" r="3.2" fill="#e9e4d8" stroke="rgba(0,0,0,0.4)" stroke-width="0.8"/>
        <path class="detail" d="M50,138 L62,148"/>
        <path class="detail" d="M250,138 L238,148"/>
        <g transform="translate(184,168)">
          <path class="gold" d="M0,4 Q0,-2 6,-2 L20,-2 Q26,-2 26,4 L26,20 Q26,30 13,36 Q0,30 0,20 Z"/>
          <path class="goldline" d="M13,2 L13,30 M4,10 L22,10"/>
        </g>
      `
    },
    moletom: {
      viewBox: '0 0 300 380',
      fill: '#17171A',
      markup: `
        <path class="outline" style="fill:var(--current-fill,#17171A)" d="M150,15 Q195,20 195,55 L200,75 L245,85 L270,215 L245,222 L207,120 L215,340 L85,340 L93,120 L55,222 L30,215 L55,85 L100,75 L105,55 Q105,20 150,15 Z"/>
        <path class="shadow" d="M93,120 L85,340 L102,340 L112,125 Z"/>
        <path class="highlight" d="M118,28 Q150,20 182,28 L176,48 Q150,42 124,48 Z"/>
        <path class="shadow" d="M55,85 L30,215 L45,218 L68,95 Z"/>
        <path class="detail" d="M140,68 L137,108"/>
        <path class="detail" d="M160,68 L163,108"/>
        <circle cx="137" cy="110" r="2.6" fill="#555"/>
        <circle cx="163" cy="110" r="2.6" fill="#555"/>
        <path class="shadow" d="M100,230 L95,272 Q95,282 105,282 L195,282 Q205,282 200,272 L195,230 Z"/>
        <path class="detail" d="M32,205 L48,201 M35,214 L51,210"/>
        <path class="detail" d="M268,205 L252,201 M265,214 L249,210"/>
        <path class="detail" d="M90,332 L210,332" stroke-width="1"/>
        <g transform="translate(160,148)">
          <path class="gold" d="M0,4 Q0,-2 6,-2 L20,-2 Q26,-2 26,4 L26,20 Q26,30 13,36 Q0,30 0,20 Z"/>
          <path class="goldline" d="M13,2 L13,30 M4,10 L22,10"/>
        </g>
      `
    },
    calca: {
      viewBox: '0 0 300 380',
      fill: '#17171A',
      markup: `
        <path class="outline" style="fill:var(--current-fill,#17171A)" d="M85,30 L215,30 Q225,55 228,95 L232,340 L188,340 L158,140 L142,140 L112,340 L68,340 L72,95 Q75,55 85,30 Z"/>
        <rect class="shadow" x="85" y="30" width="130" height="14" rx="3"/>
        <path class="detail" d="M150,32 L150,60"/>
        <circle cx="140" cy="60" r="2.6" fill="#555"/>
        <circle cx="160" cy="60" r="2.6" fill="#555"/>
        <path class="highlight" d="M92,45 L145,42 L142,90 L96,95 Z"/>
        <path class="shadow" d="M150,140 L158,140 L188,340 L170,340 Z"/>
        <path class="shadow" d="M72,95 L68,340 L84,340 L92,120 Z"/>
        <path class="detail" d="M88,60 L100,72"/>
        <path class="detail" d="M212,60 L200,72"/>
        <path class="detail" d="M230,150 L228,336" stroke-dasharray="1,5"/>
        <g transform="translate(168,68) scale(0.85)">
          <path class="gold" d="M0,3 Q0,-1.5 4.5,-1.5 L15,-1.5 Q19.5,-1.5 19.5,3 L19.5,15 Q19.5,22.5 9.7,27 Q0,22.5 0,15 Z"/>
        </g>
      `
    },
    bermuda: {
      viewBox: '0 0 300 380',
      fill: '#17171A',
      markup: `
        <path class="outline" style="fill:var(--current-fill,#17171A)" d="M85,30 L215,30 Q225,55 228,95 L235,215 L185,215 L158,120 L142,120 L115,215 L65,215 L72,95 Q75,55 85,30 Z"/>
        <rect class="shadow" x="85" y="30" width="130" height="14" rx="3"/>
        <path class="detail" d="M150,32 L150,58"/>
        <circle cx="140" cy="58" r="2.6" fill="#555"/>
        <circle cx="160" cy="58" r="2.6" fill="#555"/>
        <path class="highlight" d="M92,45 L145,42 L142,85 L96,90 Z"/>
        <path class="shadow" d="M150,120 L158,120 L185,215 L165,215 Z"/>
        <path class="shadow" d="M72,95 L65,215 L82,215 L92,118 Z"/>
        <path class="detail" d="M88,58 L102,70"/>
        <path class="detail" d="M212,58 L198,70"/>
        <g transform="translate(168,148) scale(0.85)">
          <path class="gold" d="M0,3 Q0,-1.5 4.5,-1.5 L15,-1.5 Q19.5,-1.5 19.5,3 L19.5,15 Q19.5,22.5 9.7,27 Q0,22.5 0,15 Z"/>
        </g>
      `
    },
    bone: {
      viewBox: '0 0 320 220',
      fill: '#17171A',
      markup: `
        <path class="outline" fill="#17171A" d="M60,150 Q65,70 145,62 Q215,64 218,130 L218,145 L60,150 Z"/>
        <path class="outline" fill="#0d0d0e" d="M212,138 Q270,132 278,152 Q268,166 210,158 Z"/>
        <path class="highlight" d="M75,90 Q100,72 140,68 L136,90 Q105,94 82,108 Z"/>
        <circle cx="140" cy="64" r="4" fill="#0d0d0e" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <path class="detail" d="M140,68 Q136,110 128,148"/>
        <g transform="translate(102,100) scale(0.8)">
          <path class="gold" d="M0,3 Q0,-1.5 4.5,-1.5 L15,-1.5 Q19.5,-1.5 19.5,3 L19.5,15 Q19.5,22.5 9.7,27 Q0,22.5 0,15 Z"/>
        </g>
      `
    },
    cinto: {
      viewBox: '0 0 320 220',
      fill: '#1c130d',
      markup: `
        <circle cx="160" cy="110" r="70" fill="none" stroke="#1c130d" stroke-width="32"/>
        <circle cx="160" cy="110" r="70" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="32" stroke-dasharray="150 290" stroke-dashoffset="60"/>
        <circle cx="160" cy="110" r="86" fill="none" class="outline" stroke-width="1"/>
        <circle cx="160" cy="110" r="54" fill="none" class="outline" stroke-width="1"/>
        <g transform="translate(160,178)">
          <rect x="-25" y="-17" width="50" height="34" rx="4" fill="#1c130d" stroke="#A88B5C" stroke-width="3"/>
          <rect x="-6" y="-9" width="12" height="18" fill="#A88B5C"/>
        </g>
      `
    },
    meia: {
      viewBox: '0 0 220 220',
      fill: '#17171A',
      markup: `
        <path class="outline" fill="#17171A" d="M75,10 L128,10 L128,110 Q130,140 158,148 L195,158 Q205,168 192,178 L145,182 Q95,182 82,150 Z"/>
        <path class="detail" d="M80,26 L122,26 M80,38 L122,38 M80,50 L122,50"/>
        <path class="highlight" d="M80,60 L104,60 L100,150 L84,148 Z"/>
        <g transform="translate(102,88) scale(0.75)">
          <path class="gold" d="M0,3 Q0,-1.5 4.5,-1.5 L15,-1.5 Q19.5,-1.5 19.5,3 L19.5,15 Q19.5,22.5 9.7,27 Q0,22.5 0,15 Z"/>
        </g>
      `
    },
    pochete: {
      viewBox: '0 0 320 220',
      fill: '#17171A',
      markup: `
        <path class="outline" fill="#17171A" d="M55,80 Q55,40 110,36 L210,36 Q265,40 265,80 L265,150 Q265,180 220,184 L100,184 Q55,180 55,150 Z"/>
        <path class="detail" d="M60,70 Q160,58 260,70"/>
        <path class="detail" d="M80,120 L240,120"/>
        <path class="highlight" d="M65,50 L130,44 L126,75 L70,80 Z"/>
        <path class="detail" d="M55,100 L15,92"/>
        <path class="detail" d="M265,100 L305,92"/>
        <g transform="translate(146,90)">
          <path class="gold" d="M0,3 Q0,-1.5 4.5,-1.5 L15,-1.5 Q19.5,-1.5 19.5,3 L19.5,15 Q19.5,22.5 9.7,27 Q0,22.5 0,15 Z"/>
        </g>
      `
    },
    mochila: {
      viewBox: '0 0 220 220',
      fill: '#17171A',
      markup: `
        <path class="outline" fill="#17171A" d="M60,60 Q60,32 92,28 L128,28 Q160,32 160,60 L160,190 Q160,206 138,208 L82,208 Q60,206 60,190 Z"/>
        <path class="detail" d="M92,28 Q92,10 110,10 Q128,10 128,28" stroke-width="6"/>
        <path class="shadow" d="M75,120 L145,120 L145,185 Q145,196 132,196 L88,196 Q75,196 75,185 Z"/>
        <path class="highlight" d="M68,45 L100,40 L96,75 L72,80 Z"/>
        <path class="detail" d="M60,80 Q50,120 58,150"/>
        <path class="detail" d="M160,80 Q170,120 162,150"/>
        <g transform="translate(96,68)">
          <path class="gold" d="M0,3 Q0,-1.5 4.5,-1.5 L15,-1.5 Q19.5,-1.5 19.5,3 L19.5,15 Q19.5,22.5 9.7,27 Q0,22.5 0,15 Z"/>
        </g>
        <g transform="translate(130,180) scale(0.7)">
          <path class="gold" d="M0,2 Q0,-1 3,-1 L10,-1 Q13,-1 13,2 L13,10 Q13,15 6.5,18 Q0,15 0,10 Z"/>
        </g>
      `
    },
    carteira: {
      viewBox: '0 0 220 220',
      fill: '#17171A',
      markup: `
        <path class="outline" fill="#17171A" d="M70,40 L150,30 Q158,30 158,40 L150,175 Q150,183 140,182 L70,190 Q62,190 62,180 L64,50 Q64,42 70,40 Z"/>
        <path class="detail" d="M148,32 L140,178"/>
        <path class="highlight" d="M75,48 L120,42 L116,80 L78,86 Z"/>
        <path class="shadow" d="M64,140 L150,128 L148,175 Q148,183 138,183 L70,190 Q62,190 62,180 Z"/>
        <g transform="translate(84,90)">
          <path class="gold" d="M0,3 Q0,-1.5 4.5,-1.5 L15,-1.5 Q19.5,-1.5 19.5,3 L19.5,15 Q19.5,22.5 9.7,27 Q0,22.5 0,15 Z"/>
        </g>
        <path class="detail" d="M78,140 L118,135 M80,150 L116,146 M82,160 L114,157" stroke-width="1"/>
      `
    },
    tag: {
      viewBox: '0 0 220 220',
      fill: '#17171A',
      markup: `
        <circle cx="110" cy="24" r="13" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="4"/>
        <path class="detail" d="M110,37 L100,58"/>
        <path class="outline" fill="#0e0e10" d="M100,72 L150,64 Q158,64 157,74 L143,182 Q142,190 133,189 L112,192 L124,80 Q125,72 100,72 Z"/>
        <path class="outline" fill="#17171A" d="M75,60 L125,52 Q133,52 132,62 L118,178 Q117,186 108,185 L64,190 Q56,190 57,180 L68,68 Q69,60 75,60 Z"/>
        <path class="highlight" d="M78,68 L112,63 L108,95 L82,99 Z"/>
        <circle cx="97" cy="72" r="7" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="3"/>
        <g transform="translate(78,110) scale(0.8)">
          <path class="gold" d="M0,3 Q0,-1.5 4.5,-1.5 L15,-1.5 Q19.5,-1.5 19.5,3 L19.5,15 Q19.5,22.5 9.7,27 Q0,22.5 0,15 Z"/>
        </g>
        <path class="detail" d="M118,145 L142,142 M120,155 L140,153 M122,165 L138,163" stroke-width="1"/>
      `
    }
  };

  function renderSketches() {
    document.querySelectorAll('[data-sketch]').forEach(slot => {
      const def = SKETCHES[slot.dataset.sketch];
      if (!def) return;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', def.viewBox);
      svg.setAttribute('class', 'sketch');
      svg.innerHTML = def.markup;
      slot.appendChild(svg);
    });
  }
  renderSketches();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Cursor glow
  const cursorGlow = document.getElementById('cursor-glow');
  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  } else if (cursorGlow) {
    cursorGlow.style.display = 'none';
  }

  // Header scroll state + back-to-top
  const header = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');

  function onScroll() {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 20);
    backToTop.classList.toggle('show', scrollY > 600);
  }

  let scrollScheduled = false;
  window.addEventListener('scroll', () => {
    if (scrollScheduled) return;
    scrollScheduled = true;
    setTimeout(() => { onScroll(); scrollScheduled = false; }, 50);
  });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  // Scroll-triggered reveal
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          entry.target.style.transitionDelay = `${delay * 110}ms`;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  // Product sections: color + size selection, WhatsApp order link
  document.querySelectorAll('.produto-card').forEach(produto => {
    const productName = produto.dataset.product;
    const priceText = produto.dataset.price;
    const swatches = produto.querySelectorAll('.swatch');
    const sizes = produto.querySelectorAll('.size-chip');
    const orderLink = produto.querySelector('.product-order');
    const colorLabel = produto.querySelector('.color-live-label');

    let selectedColor = swatches[0] ? swatches[0].dataset.color : '';
    let selectedSize = sizes[0] ? sizes[0].dataset.size : '';

    function updateOrderLink() {
      if (!orderLink) return;
      const message = `Olá! Tenho interesse no ${productName} Maison Rivier.\nCor: ${selectedColor}\nTamanho: ${selectedSize}\nPreço: ${priceText}\n\nPoderiam me ajudar com disponibilidade e prazo?`;
      orderLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }

    swatches.forEach(sw => {
      sw.addEventListener('click', () => {
        swatches.forEach(s => s.classList.remove('active'));
        sw.classList.add('active');
        selectedColor = sw.dataset.color;
        if (colorLabel) colorLabel.textContent = selectedColor;
        const swatchColor = sw.style.getPropertyValue('--swatch');
        if (swatchColor) produto.style.setProperty('--current-fill', swatchColor);
        updateOrderLink();
      });
    });

    if (swatches[0]) {
      const initialColor = swatches[0].style.getPropertyValue('--swatch');
      if (initialColor) produto.style.setProperty('--current-fill', initialColor);
    }

    sizes.forEach(sz => {
      sz.addEventListener('click', () => {
        sizes.forEach(s => s.classList.remove('active'));
        sz.classList.add('active');
        selectedSize = sz.dataset.size;
        updateOrderLink();
      });
    });

    updateOrderLink();
  });
})();
