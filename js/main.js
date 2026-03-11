/* Highlands Home Services Network — main.js */
(function () {
  'use strict';

  // ── Mobile nav toggle ──────────────────────────────────────
  var toggle  = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var open = navList.classList.toggle('nav-open');
      toggle.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.site-header')) {
        navList.classList.remove('nav-open');
        toggle.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Multi-dropdown (hover + click/tap + keyboard) ──────────
  // Handles ANY number of .nav-item-dropdown elements — e.g.
  // "Contractor Leads" AND "Service Areas" simultaneously.
  var dropdownItems = document.querySelectorAll('.nav-item-dropdown');

  dropdownItems.forEach(function (item) {
    var trigger  = item.querySelector('a');
    var dropdown = item.querySelector('.nav-dropdown');
    if (!trigger || !dropdown) return;

    // Unique id for aria-controls
    var uid = 'dd-' + Math.random().toString(36).slice(2, 7);
    dropdown.id = uid;
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', uid);

    function openItem()  {
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
    function closeItem() {
      item.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    }

    // Desktop hover
    item.addEventListener('mouseenter', function () {
      if (window.innerWidth > 767) openItem();
    });
    item.addEventListener('mouseleave', function () {
      if (window.innerWidth > 767) closeItem();
    });

    // Click/tap toggle
trigger.addEventListener('click', function (e) {
  // Never intercept clicks on dropdown child links
  if (e.target.closest('.nav-dropdown')) return;

  var isMobile = window.innerWidth <= 767;
  var isOpen   = item.classList.contains('is-open');

  if (isMobile) {
    // Mobile: always toggle, never navigate the parent
    e.preventDefault();
    isOpen ? closeItem() : openItem();
  } else if (isOpen) {
    // Desktop + already open: close and let the href navigate
    closeItem();
  }
  // Desktop + closed: hover already handles open, click navigates
});

    // Keyboard: Enter/Space toggle, Escape close
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.classList.contains('is-open') ? closeItem() : openItem();
      }
      if (e.key === 'Escape') {
        closeItem();
        trigger.focus();
      }
    });

    // Close when focus leaves the dropdown group
    item.addEventListener('focusout', function (e) {
      if (!item.contains(e.relatedTarget)) closeItem();
    });
  });

  // Close all dropdowns on outside click
  document.addEventListener('click', function (e) {
    dropdownItems.forEach(function (item) {
      if (!item.contains(e.target)) {
        item.classList.remove('is-open');
        var t = item.querySelector('a');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ── Mark active nav link by pathname ──────────────────────
  var currentPath = window.location.pathname.replace(/\/+$/, '');
  document.querySelectorAll('.nav-list a').forEach(function (link) {
    var linkPath = link.pathname.replace(/\/+$/, '');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  // ── FAQ accordion ──────────────────────────────────────────
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

  // ── Waitlist inline confirmation ───────────────────────────
  document.querySelectorAll('.waitlist-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = form.querySelector('input[type="email"]');
      var email = emailInput ? emailInput.value.trim() : '';
      if (!email) return;

      var msg = document.createElement('p');
      msg.style.cssText = 'font-size:.85rem;color:#2D6A4F;font-weight:600;margin-top:.5rem;';
      msg.textContent = 'You\u2019re on the list! We\u2019ll notify you when this vertical opens.';

      form.innerHTML = '';
      form.appendChild(msg);
    });
  });

  // ── ?submitted=true success state ─────────────────────────
  if (window.location.search.indexOf('submitted=true') !== -1) {
    document.querySelectorAll('.form-success').forEach(function (el) {
      el.style.display = 'block';
    });
    var firstForm = document.querySelector('form');
    if (firstForm) firstForm.style.display = 'none';
  }

  // ── Smooth scroll for anchor links ────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navList && toggle) {
          navList.classList.remove('nav-open');
          toggle.classList.remove('nav-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // ── Lazy load fallback ─────────────────────────────────────
  if (!('loading' in HTMLImageElement.prototype)) {
    document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
      img.src = img.dataset.src || img.src;
    });
  }

})();

