// ==========================================================================
// WEBREV - MAIN SCRIPT (app.js)
// Mobile nav drawer, scrolled header state, FAQ accordion, particle sphere
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

  // --- Header: add solid background once page is scrolled ---
  const header = document.getElementById('header');
  function updateHeaderState() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState);

  // --- Mobile Navigation Drawer ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');

  function openMobileNav() {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileNav);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);

  document.querySelectorAll('.mobile-nav-links a').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item.active').forEach(function (openItem) {
        if (openItem !== item) openItem.classList.remove('active');
      });
      item.classList.toggle('active', !isActive);
    });
  });

});
