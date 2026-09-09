(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const WHATSAPP_NUMBER = '5511944815707';

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

  // Cinematic product spotlight scroll (photo Ken-Burns + staggered captions)
  function setupSpotlights() {
    const sections = Array.from(document.querySelectorAll('[data-spotlight]'));
    if (!sections.length || prefersReducedMotion) return;

    const items = sections.map(sec => ({
      section: sec,
      photo: sec.querySelector('.spotlight-photo'),
      glow: sec.querySelector('.spotlight-glow'),
      captions: Array.from(sec.querySelectorAll('.spotlight-caption'))
    }));

    function update() {
      const vh = window.innerHeight;
      items.forEach(({ section, photo, glow, captions }) => {
        const rect = section.getBoundingClientRect();
        const total = rect.height - vh;
        let progress = total > 0 ? (-rect.top) / total : 0;
        progress = Math.max(0, Math.min(1, progress));

        if (photo) {
          const scale = 1 + progress * 0.14;
          const shift = progress * -20;
          photo.style.transform = `scale(${scale.toFixed(3)}) translateY(${shift.toFixed(1)}px)`;
        }
        if (glow) {
          glow.style.opacity = (0.28 + progress * 0.32).toFixed(2);
        }

        const step = 1 / captions.length;
        captions.forEach((cap, i) => {
          const start = i * step;
          const end = start + step;
          const fadeMargin = step * 0.18;
          let opacity;
          if (progress <= start || progress >= end) {
            opacity = 0;
          } else if (progress < start + fadeMargin) {
            opacity = (progress - start) / fadeMargin;
          } else if (progress > end - fadeMargin) {
            opacity = (end - progress) / fadeMargin;
          } else {
            opacity = 1;
          }
          cap.style.opacity = opacity.toFixed(2);
          cap.style.transform = `translateY(${((1 - opacity) * 14).toFixed(1)}px)`;
        });
      });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    });
    window.addEventListener('resize', update);
    update();
  }
  setupSpotlights();

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
