/* Highlands Home Services Network — main.js */
(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var open = navList.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.site-header')) {
        navList.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

    // Service Areas dropdown — hover (desktop) + click/tap (all)
  var dropdownItem = document.querySelector('.nav-item-dropdown');

  if (dropdownItem) {
    // Click/tap toggle
    var dropdownTrigger = dropdownItem.querySelector('a');
    dropdownTrigger.addEventListener('click', function (e) {
      // Only intercept if it's acting as a toggle (mobile or keyboard nav)
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownItem.classList.toggle('open');
      }
    });

    // Desktop hover
    dropdownItem.addEventListener('mouseenter', function () {
      if (window.innerWidth > 768) {
        dropdownItem.classList.add('open');
      }
    });

    dropdownItem.addEventListener('mouseleave', function () {
      if (window.innerWidth > 768) {
        dropdownItem.classList.remove('open');
      }
    });

    // Keyboard: open on Enter/Space, close on Escape
    dropdownTrigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dropdownItem.classList.toggle('open');
      }
      if (e.key === 'Escape') {
        dropdownItem.classList.remove('open');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!dropdownItem.contains(e.target)) {
        dropdownItem.classList.remove('open');
      }
    });
  }


  // Mark active nav link (simple match by pathname)
  var currentPath = window.location.pathname.replace(/\/+$/, '');
  document.querySelectorAll('.nav-list a').forEach(function (link) {
    var linkPath = link.pathname.replace(/\/+$/, '');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = this.nextElementSibling;
      var isOpen = answer.classList.contains('open');

      document.querySelectorAll('.faq-answer').forEach(function (a) {
        a.classList.remove('open');
      });
      document.querySelectorAll('.faq-question').forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        answer.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Waitlist inline confirmation (for plumbing/electrical/roofing cards)
  document.querySelectorAll('.waitlist-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = form.querySelector('input[type="email"]');
      var email = emailInput ? emailInput.value.trim() : '';
      if (!email) return;

      var msg = document.createElement('p');
      msg.style.cssText = 'font-size:.85rem;color:#2D6A4F;font-weight:600;margin-top:.5rem;';
      msg.textContent = 'You’re on the list! We’ll notify you when this vertical opens.';

      form.innerHTML = '';
      form.appendChild(msg);
    });
  });

  // Handle simple ?submitted=true success state
  if (window.location.search.indexOf('submitted=true') !== -1) {
    document.querySelectorAll('.form-success').forEach(function (el) {
      el.style.display = 'block';
    });
    var firstForm = document.querySelector('form');
    if (firstForm) firstForm.style.display = 'none';
  }

  // Smooth scroll for same-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navList && toggle) {
          navList.classList.remove('open');
          toggle.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Lazy load fallback for browsers without native loading="lazy"
  if (!('loading' in HTMLImageElement.prototype)) {
    document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
      img.src = img.dataset.src || img.src;
    });
  }
})();
