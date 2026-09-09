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

  // Header scroll state + active link + back-to-top
  const header = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');
  const pageSections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function onScroll() {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 20);
    backToTop.classList.toggle('show', scrollY > 600);

    let currentId = '';
    pageSections.forEach(section => {
      const top = section.offsetTop - 160;
      if (scrollY >= top) currentId = section.id;
    });
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`));
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
          entry.target.style.transitionDelay = `${delay * 90}ms`;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  // Product options: color + size + order link
  const colorButtons = document.querySelectorAll('.color-swatch');
  const colorLabel = document.getElementById('color-selected-label');
  const sizeButtons = document.querySelectorAll('.size-chip');
  const orderBtn = document.getElementById('product-order-btn');

  let selectedColor = 'Azul Marinho';
  let selectedSize = 'P';

  function updateOrderLink() {
    const message = `Olá! Tenho interesse na Polo Piquet Maison Rivier.\nCor: ${selectedColor}\nTamanho: ${selectedSize}\n\nPoderiam me ajudar com disponibilidade e prazo?`;
    orderBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      colorButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedColor = btn.dataset.color;
      colorLabel.textContent = selectedColor;
      updateOrderLink();
    });
  });

  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.dataset.size;
      updateOrderLink();
    });
  });

  updateOrderLink();

  // Size guide toggle
  const sizeGuideToggle = document.getElementById('size-guide-toggle');
  const sizeGuide = document.getElementById('size-guide');
  sizeGuideToggle.addEventListener('click', () => {
    const isHidden = sizeGuide.hidden;
    sizeGuide.hidden = !isHidden;
    sizeGuideToggle.textContent = isHidden ? 'Ocultar tabela de medidas' : 'Ver tabela de medidas';
  });

  // Catalog cards (Moletom, Calça, Bermuda): independent color/size state each
  document.querySelectorAll('.catalog-card').forEach(card => {
    const productName = card.dataset.product;
    const swatches = card.querySelectorAll('.mini-swatch');
    const sizes = card.querySelectorAll('.mini-size');
    const orderLink = card.querySelector('.catalog-order');
    const priceText = card.querySelector('.catalog-price').textContent.trim();

    let cardColor = swatches[0] ? swatches[0].dataset.color : '';
    let cardSize = sizes[0] ? sizes[0].dataset.size : '';

    function updateCardOrderLink() {
      const message = `Olá! Tenho interesse no ${productName} Maison Rivier.\nCor: ${cardColor}\nTamanho: ${cardSize}\nPreço: ${priceText}\n\nPoderiam me ajudar com disponibilidade e prazo?`;
      orderLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }

    swatches.forEach(sw => {
      sw.addEventListener('click', () => {
        swatches.forEach(s => s.classList.remove('active'));
        sw.classList.add('active');
        cardColor = sw.dataset.color;
        updateCardOrderLink();
      });
    });

    sizes.forEach(sz => {
      sz.addEventListener('click', () => {
        sizes.forEach(s => s.classList.remove('active'));
        sz.classList.add('active');
        cardSize = sz.dataset.size;
        updateCardOrderLink();
      });
    });

    updateCardOrderLink();
  });
})();
