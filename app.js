'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // --- Page Loader Counter & Animation ---
  const loader = document.getElementById('page-loader');
  const loaderFill = document.getElementById('loader-fill');
  const loaderCounter = document.getElementById('loader-counter');

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      if (loaderFill) loaderFill.style.width = '100%';
      if (loaderCounter) loaderCounter.textContent = '100';

      setTimeout(() => {
        if (loader) {
          loader.style.transform = 'translateY(-100%)';
          setTimeout(() => {
            loader.style.display = 'none';
            triggerHeroAnimations();
          }, 700);
        }
      }, 300);
    } else {
      if (loaderFill) loaderFill.style.width = `${progress}%`;
      if (loaderCounter) loaderCounter.textContent = String(progress).padStart(3, '0');
    }
  }, 60);

  // --- Hero Animations Reveal ---
  function triggerHeroAnimations() {
    const heroH1 = document.getElementById('hero-h1');
    const heroDesc = document.getElementById('hero-description');
    const heroCta = document.getElementById('hero-cta');
    const heroCard = document.getElementById('hero-card');
    const heroBuiltFor = document.getElementById('hero-built-for');
    const heroStatus = document.getElementById('hero-status');
    const header = document.getElementById('header');

    if (heroH1) heroH1.classList.add('is-revealed');
    if (header) {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
    }

    setTimeout(() => {
      if (heroDesc) heroDesc.style.opacity = '1';
      if (heroDesc) heroDesc.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
      if (heroCta) heroCta.style.opacity = '1';
      if (heroCta) heroCta.style.transform = 'translateY(0)';
    }, 400);

    setTimeout(() => {
      if (heroCard) {
        heroCard.style.opacity = '1';
        heroCard.style.transform = 'translateY(0) scale(1)';
      }
      if (heroBuiltFor) {
        heroBuiltFor.style.opacity = '1';
        heroBuiltFor.style.transform = 'translateY(0)';
      }
    }, 500);

    setTimeout(() => {
      if (heroStatus) heroStatus.style.opacity = '1';
    }, 700);
  }

  // --- Header Scrolled State ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // --- Interactive Hero Card Slider ---
  const cardData = [
    {
      cap: 'Rapid Delivery',
      title: 'Live prototype in 48 hours.',
    },
    {
      cap: 'Bespoke Engineering',
      title: 'Sub-second page speeds guaranteed.',
    },
    {
      cap: 'High Converting',
      title: 'Designed to turn visitors into clients.',
    },
  ];

  let cardIndex = 0;
  const cardCap = document.getElementById('card-cap');
  const cardTitle = document.getElementById('card-title');
  const cardDashes = document.querySelectorAll('.hero-dash');
  const cardNext = document.getElementById('card-next');
  const cardPrev = document.getElementById('card-prev');
  const cardClick = document.getElementById('hero-card-click');

  function updateCard(index) {
    cardIndex = (index + cardData.length) % cardData.length;

    if (cardCap && cardTitle) {
      cardCap.style.opacity = '0';
      cardTitle.style.opacity = '0';

      setTimeout(() => {
        cardCap.textContent = cardData[cardIndex].cap;
        cardTitle.textContent = cardData[cardIndex].title;
        cardCap.style.opacity = '1';
        cardTitle.style.opacity = '1';
      }, 150);
    }

    cardDashes.forEach((dash, idx) => {
      if (idx === cardIndex) {
        dash.className = 'hero-dash active';
      } else {
        dash.className = 'hero-dash inactive';
      }
    });
  }

  cardNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateCard(cardIndex + 1);
  });

  cardPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateCard(cardIndex - 1);
  });

  cardClick?.addEventListener('click', () => {
    updateCard(cardIndex + 1);
  });

  // --- Navigation Overlay / Mobile Menu Modal ---
  const navModal = document.getElementById('nav-modal');
  const openModalBtns = document.querySelectorAll('[data-open-modal="nav"]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal="nav"]');

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      navModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      navModal?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // --- Smooth Scroll Navigation ---
  const scrollTriggers = document.querySelectorAll('[data-scroll]');
  scrollTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSelector = trigger.getAttribute('data-scroll');
      if (!targetSelector) return;

      const targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        navModal?.classList.remove('active');
        document.body.style.overflow = '';

        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // --- FAQ Accordion Logic ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach((other) => other.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --- Intersection Observer for Scroll Reveals ---
  const revealElements = document.querySelectorAll(
    '.service-row-item, .info-card, .founder-card, .process-step, .stat-item, .faq-item, .stats-panel, .build-band-item'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
});