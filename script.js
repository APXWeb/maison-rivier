(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const WHATSAPP_NUMBER = '5511944815707';

  // Line-art product illustrations (croqui técnico)
  const SKETCHES = {
    polo: {
      viewBox: '0 0 200 260',
      markup: `
        <path d="M45,50 L8,66 L15,92 L55,98 L45,232 L155,232 L145,98 L185,92 L192,66 L155,50 L122,32 L100,50 L78,32 Z"/>
        <path d="M100,50 L100,112"/>
        <circle cx="100" cy="70" r="2.2"/>
        <circle cx="100" cy="94" r="2.2"/>
        <circle cx="128" cy="110" r="6"/>
        <path d="M14,70 L26,80"/>
        <path d="M186,70 L174,80"/>
      `
    },
    moletom: {
      viewBox: '0 0 200 260',
      markup: `
        <path d="M100,15 Q72,20 70,45 L72,55 L15,60 L10,95 L25,98 L75,80 L65,225 L135,225 L125,80 L175,98 L190,95 L185,60 L128,55 L130,45 Q128,20 100,15 Z"/>
        <path d="M92,50 L90,72"/>
        <path d="M108,50 L110,72"/>
        <circle cx="90" cy="74" r="1.6"/>
        <circle cx="110" cy="74" r="1.6"/>
        <path d="M72,160 L78,195 L122,195 L128,160"/>
        <circle cx="112" cy="105" r="6"/>
      `
    },
    calca: {
      viewBox: '0 0 200 260',
      markup: `
        <path d="M58,20 L142,20 L152,140 L160,235 L122,235 L108,150 L92,150 L78,235 L40,235 L48,140 Z"/>
        <path d="M58,28 L142,28"/>
        <path d="M100,20 L100,90"/>
        <path d="M60,35 L75,45"/>
        <path d="M140,35 L125,45"/>
        <circle cx="75" cy="60" r="5"/>
      `
    },
    bermuda: {
      viewBox: '0 0 200 260',
      markup: `
        <path d="M58,20 L142,20 L152,140 L158,175 L130,175 L110,150 L90,150 L70,175 L42,175 L48,140 Z"/>
        <path d="M58,28 L142,28"/>
        <path d="M100,20 L100,90"/>
        <path d="M60,35 L75,45"/>
        <path d="M140,35 L125,45"/>
        <circle cx="75" cy="60" r="5"/>
      `
    },
    bone: {
      viewBox: '0 0 220 170',
      markup: `
        <path d="M45,120 Q50,55 110,50 Q165,52 165,100 L165,112 L45,120 Z"/>
        <path d="M160,105 Q210,100 215,118 Q205,128 158,120 Z"/>
        <circle cx="108" cy="50" r="3"/>
        <path d="M108,52 Q108,90 100,118"/>
        <circle cx="95" cy="85" r="5"/>
      `
    },
    cinto: {
      viewBox: '0 0 220 170',
      markup: `
        <path d="M20,90 Q110,70 200,88 L200,102 Q110,86 20,104 Z"/>
        <rect x="8" y="78" width="28" height="30" rx="3"/>
        <path d="M22,90 L30,96"/>
        <circle cx="140" cy="95" r="2"/>
        <circle cx="155" cy="94" r="2"/>
        <circle cx="170" cy="93" r="2"/>
      `
    },
    meia: {
      viewBox: '0 0 220 170',
      markup: `
        <path d="M90,20 L128,20 L128,108 Q130,128 152,132 L190,138 Q198,148 188,154 L140,156 Q96,156 88,138 Z"/>
        <path d="M94,30 L124,30"/>
        <path d="M94,38 L124,38"/>
        <path d="M94,46 L124,46"/>
        <circle cx="108" cy="70" r="4"/>
      `
    },
    pochete: {
      viewBox: '0 0 220 170',
      markup: `
        <path d="M38,58 Q38,28 80,26 L140,26 Q182,28 182,58 L182,112 Q182,134 152,136 L68,136 Q38,134 38,112 Z"/>
        <path d="M42,84 L8,80"/>
        <path d="M178,84 L212,80"/>
        <path d="M44,52 Q110,44 176,52"/>
        <path d="M62,92 L158,92 L158,122 Q158,130 148,130 L72,130 Q62,130 62,122 Z"/>
        <circle cx="110" cy="72" r="5"/>
      `
    },
    mochila: {
      viewBox: '0 0 220 170',
      markup: `
        <path d="M55,55 Q55,35 80,32 L140,32 Q165,35 165,55 L165,150 Q165,165 140,167 L80,167 Q55,165 55,150 Z"/>
        <path d="M95,32 Q95,15 110,15 Q125,15 125,32"/>
        <path d="M70,95 L150,95 L150,150 Q150,158 140,158 L80,158 Q70,158 70,150 Z"/>
        <circle cx="110" cy="70" r="5"/>
        <path d="M75,35 Q65,70 72,95"/>
        <path d="M145,35 Q155,70 148,95"/>
      `
    },
    carteira: {
      viewBox: '0 0 220 170',
      markup: `
        <path d="M55,40 L155,40 Q165,40 165,50 L165,130 Q165,140 155,140 L55,140 Q45,140 45,130 L45,50 Q45,40 55,40 Z"/>
        <path d="M55,65 L165,65"/>
        <circle cx="70" cy="95" r="6"/>
        <path d="M66,95 L74,95 M70,91 L70,99"/>
      `
    },
    tag: {
      viewBox: '0 0 220 170',
      markup: `
        <circle cx="110" cy="22" r="12"/>
        <path d="M110,34 L110,58"/>
        <path d="M70,60 L150,60 Q165,60 165,75 L165,140 Q165,155 150,155 L70,155 Q55,155 55,140 L55,75 Q55,60 70,60 Z"/>
        <circle cx="110" cy="80" r="9"/>
        <circle cx="110" cy="80" r="5"/>
        <path d="M85,115 L135,115 M90,125 L130,125 M95,135 L125,135"/>
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
      svg.querySelectorAll('path, circle, rect, line').forEach(el => el.classList.add('sketch-line'));
      slot.appendChild(svg);

      const animate = slot.dataset.sketchAnimate !== 'false';
      const shapes = Array.from(svg.querySelectorAll('.sketch-line'));

      if (!animate || prefersReducedMotion) return;

      shapes.forEach((el, i) => {
        const len = (typeof el.getTotalLength === 'function' ? el.getTotalLength() : 60) + 2;
        el.style.strokeDasharray = String(len);
        el.style.strokeDashoffset = String(len);
        el.style.transitionDelay = (i * 70) + 'ms';
      });

      const drawObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              shapes.forEach(el => { el.style.strokeDashoffset = '0'; });
            });
            drawObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
      drawObserver.observe(slot);
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
        updateOrderLink();
      });
    });

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
