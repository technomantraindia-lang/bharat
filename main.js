/* ==========================================================================
   BHARAT BHUJAL TECH PVT. LTD. - JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initMobileMenu();
  initStratumHoverSync();
  initStatsCounter();
  initSearchButton();
  initAboutReveal();
  initScrollRevealAnimations();
  initClientMarquee();
  initProcessAnimations();
  initServicesAnimations();
});

// 0.1 About section reveal choreography
function initAboutReveal() {
  const section = document.querySelector('.about-bharat-section');
  if (!section) return;

  // Keep the content visible if JavaScript or IntersectionObserver is unavailable.
  section.classList.add('about-motion-ready');

  const reveal = () => section.classList.add('is-visible');

  if (!('IntersectionObserver' in window)) {
    reveal();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting)) {
      reveal();
      observer.disconnect();
    }
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  observer.observe(section);
}

// 0. Hero Background Video - Zero Delay Seamless Loop Controller
function initHeroVideo() {
  const v1 = document.getElementById('heroVideo1');
  const v2 = document.getElementById('heroVideo2');
  if (!v1) return;

  // Single video fallback if v2 is not present
  if (!v2) {
    v1.muted = true;
    v1.play().catch(() => {});
    return;
  }

  let currentVideo = v1;
  let nextVideo = v2;
  let isTransitioning = false;

  v1.muted = true;
  v2.muted = true;

  // Start initial playback
  const playPromise = v1.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Browser autoplay policy fallback
      const triggerPlay = () => {
        currentVideo.play().catch(() => {});
        document.removeEventListener('click', triggerPlay);
        document.removeEventListener('touchstart', triggerPlay);
      };
      document.addEventListener('click', triggerPlay);
      document.addEventListener('touchstart', triggerPlay);
    });
  }

  function swapVideos() {
    if (isTransitioning) return;
    isTransitioning = true;

    // Reset next video to start and immediately start playing
    nextVideo.currentTime = 0;
    const playNext = nextVideo.play();

    const completeSwap = () => {
      // Crossfade: show next, hide current
      nextVideo.classList.add('video-visible');
      currentVideo.classList.remove('video-visible');

      // Swap references
      const prev = currentVideo;
      currentVideo = nextVideo;
      nextVideo = prev;

      // After crossfade completes (350ms), pause and rewind previous video
      setTimeout(() => {
        nextVideo.pause();
        nextVideo.currentTime = 0;
        isTransitioning = false;
      }, 350);
    };

    if (playNext !== undefined) {
      playNext.then(completeSwap).catch(() => {
        isTransitioning = false;
      });
    } else {
      completeSwap();
    }
  }

  // Pre-trigger transition ~0.28 seconds before the video ends so there's zero delay/black flash
  function monitorLoop() {
    if (currentVideo && currentVideo.duration && !isTransitioning) {
      const remainingTime = currentVideo.duration - currentVideo.currentTime;
      if (remainingTime <= 0.28 && remainingTime > 0) {
        swapVideos();
      }
    }
    requestAnimationFrame(monitorLoop);
  }

  // Fallback on ended event in case frame timing was interrupted
  v1.addEventListener('ended', () => {
    if (currentVideo === v1) swapVideos();
  });
  v2.addEventListener('ended', () => {
    if (currentVideo === v2) swapVideos();
  });

  requestAnimationFrame(monitorLoop);
}

// 1. Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });

    const links = navMenu.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

// 2. Hero Visual Showcase Switcher
function switchHeroVisual(type, btn) {
  const img = document.getElementById('heroShowcaseImg');
  if (!img) return;

  if (btn) {
    const pills = document.querySelectorAll('.sw-pill');
    pills.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
  }

  // Smooth fade transition
  img.style.opacity = '0.35';
  img.style.transform = 'scale(0.98)';

  setTimeout(() => {
    if (type === 'rig') {
      img.src = 'assect/hero-drilling-exploration.jpg';
      img.alt = 'Heavy Borewell Drilling Rig Exploration Site';
    } else if (type === 'team') {
      img.src = 'assect/about-engineers-rig.jpg';
      img.alt = 'Hydrogeologists Surveying Groundwater Site';
    } else if (type === 'aquifer') {
      img.src = 'assect/about-aquifer-hands.jpg';
      img.alt = '3D Subterranean Water Aquifer & Borewell System';
    }
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
  }, 180);
}

// 2.1 Stratum Cards Interaction
function initStratumHoverSync() {
  const cards = document.querySelectorAll('.geology-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

// 3. Stats Numbers Counter (Hero, About Floating Pill & Clients Bar)
function initStatsCounter() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const itemCounters = entry.target.querySelectorAll('.num, .pill-num, .cstat-num');
        itemCounters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          if (!target) return;
          let current = 0;
          const step = target / 35;

          const update = () => {
            current += step;
            if (current < target) {
              counter.innerText = Math.ceil(current) + '+';
              requestAnimationFrame(update);
            } else {
              counter.innerText = target + '+';
            }
          };
          update();
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  const statsBar = document.querySelector('.hero-stats-bar');
  const floatingCard = document.querySelector('.floating-stats-pill-card');
  const clientStats = document.querySelector('.clients-stats-row');
  if (statsBar) observer.observe(statsBar);
  if (floatingCard) observer.observe(floatingCard);
  if (clientStats) observer.observe(clientStats);
}

// 4. Watch Our Story Video Modal Popup
function openStoryVideoModal() {
  let modal = document.getElementById('storyVideoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'storyVideoModal';
    modal.className = 'modal-backdrop-layer active';
    modal.innerHTML = `
      <div class="modal-dialog-box" style="max-width: 680px; padding: 28px; text-align: center;">
        <button class="modal-close-btn" onclick="document.getElementById('storyVideoModal').remove()">&times;</button>
        <div style="margin-bottom: 18px;">
          <h3 style="font-size: 1.4rem; color: #0c1e3a; font-weight: 800;">Our Groundwater Journey & Engineering Story</h3>
          <p style="color: #64748b; font-size: 0.9rem;">Bharat Bhujal Tech Pvt. Ltd. — 15+ Years of Scientific Exploration</p>
        </div>
        <div style="position: relative; padding-bottom: 56.25%; height: 0; border-radius: 14px; overflow: hidden; background: #000; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
          <iframe style="position: absolute; top:0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
    document.body.appendChild(modal);
  } else {
    modal.classList.add('active');
  }
}

// 4. Search Button Interaction
function initSearchButton() {
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const query = prompt('Enter keyword to search across Bharat Bhujal:');
      if (query && query.trim()) {
        alert(`Searching services, projects and reports for: "${query.trim()}"`);
      }
    });
  }
}

// 5. Consultation Modal Handlers
function openConsultModal(sectorName) {
  const modal = document.getElementById('consultModal');
  if (modal) {
    modal.classList.add('active');
  } else {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
      const firstInput = contact.querySelector('input, textarea, select');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 600);
      }
    }
  }
}

function closeConsultModal() {
  const modal = document.getElementById('consultModal');
  if (modal) modal.classList.remove('active');
}

// Close on backdrop click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('consultModal');
  if (modal && e.target === modal) {
    closeConsultModal();
  }
});

// 6. Interactive FAQ Accordion Toggle
function toggleFaq(headerEl) {
  const item = headerEl.parentElement;
  if (!item) return;
  const wasActive = item.classList.contains('active');
  
  // Find enclosing stack or column
  const container = item.closest('.faq-accordion-stack') || item.closest('.faq-column') || item.parentElement;
  if (container) {
    const allItems = container.querySelectorAll('.faq-card-item, .faq-accordion-item');
    allItems.forEach(i => {
      i.classList.remove('active');
      const icon = i.querySelector('.toggle-icon');
      if (icon) {
        icon.className = 'fa-solid fa-plus toggle-icon';
      }
    });
  }

  if (!wasActive) {
    item.classList.add('active');
    const icon = item.querySelector('.toggle-icon');
    if (icon) {
      icon.className = 'fa-solid fa-minus toggle-icon';
    }
  }
}

// 7. Testimonials Carousel Slider with Auto-Play & Smooth Left/Right Sliding
function initTestimonialsSlider() {
  const viewport = document.getElementById('testiCardsViewport');
  const track = document.getElementById('testiCardsContainer');
  const prevBtn = document.getElementById('testiPrevBtn');
  const nextBtn = document.getElementById('testiNextBtn');
  const showcase = document.querySelector('.testi-slider-showcase');
  const dotsContainer = document.querySelector('.testi-pagination-dots');

  if (!viewport || !track) return;

  const cards = track.querySelectorAll('.testi-card-box');
  if (cards.length === 0) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const AUTOPLAY_INTERVAL = 3800; // Auto slide every 3.8 seconds

  function getVisibleCount() {
    if (window.innerWidth <= 720) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, cards.length - getVisibleCount());
  }

  function renderDots() {
    if (!dotsContainer) return;
    const maxIdx = getMaxIndex();
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= maxIdx; i++) {
      const dot = document.createElement('span');
      dot.className = `p-dot ${i === currentIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(i);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.p-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(index) {
    const maxIdx = getMaxIndex();
    if (index > maxIdx) {
      currentIndex = 0; // loop back to first
    } else if (index < 0) {
      currentIndex = maxIdx; // loop back to end
    } else {
      currentIndex = index;
    }

    const firstCard = cards[0];
    if (!firstCard) return;

    const cardRect = firstCard.getBoundingClientRect();
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 26;
    const shift = currentIndex * (cardRect.width + gap);

    track.style.transform = `translateX(-${shift}px)`;

    cards.forEach((card, idx) => {
      const isVisible = idx >= currentIndex && idx < currentIndex + getVisibleCount();
      card.classList.toggle('active-card', isVisible);
    });

    updateDots();
  }

  function nextSlide() {
    const maxIdx = getMaxIndex();
    const nextIdx = (currentIndex >= maxIdx) ? 0 : currentIndex + 1;
    goToSlide(nextIdx);
  }

  function prevSlide() {
    const maxIdx = getMaxIndex();
    const prevIdx = (currentIndex <= 0) ? maxIdx : currentIndex - 1;
    goToSlide(prevIdx);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      restartAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      restartAutoplay();
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function restartAutoplay() {
    startAutoplay();
  }

  // Pause on hover so users can comfortably read
  if (showcase) {
    showcase.addEventListener('mouseenter', stopAutoplay);
    showcase.addEventListener('mouseleave', startAutoplay);
  }

  // Touch swipe support for mobile
  let touchStartX = 0;
  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchStartX - touchEndX;
    if (Math.abs(swipeDistance) > 40) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    startAutoplay();
  }, { passive: true });

  // Handle window resizing
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      renderDots();
      goToSlide(Math.min(currentIndex, getMaxIndex()));
    }, 120);
  }, { passive: true });

  // Initialize
  renderDots();
  goToSlide(0);
  startAutoplay();
}

// 8. Valued clients: responsive left/right auto-moving logo strip
function initClientLogoAutoScroll() {
  const viewport = document.querySelector('.client-logos-viewport');
  const track = document.querySelector('.client-logos-grid');
  if (!viewport || !track) return;

  const updateLogoShift = () => {
    const maxShift = Math.max(0, track.scrollWidth - viewport.clientWidth);
    track.style.setProperty('--clients-logo-shift', `${-maxShift}px`);
  };

  updateLogoShift();
  window.addEventListener('resize', updateLogoShift, { passive: true });
}

// ==========================================================================
// ABOUT US: INTERACTIVE 3D / SPLIT VISUAL SHOWCASE SLIDER
// ==========================================================================
let currentAboutSlide = 0;
const totalAboutSlides = 3;
let aboutSlideTimer = null;
let aboutSlideProgressInterval = null;
let aboutSlideProgress = 0;
const ABOUT_SLIDE_DURATION = 5000;

function switchAboutSlide(index) {
  currentAboutSlide = (index + totalAboutSlides) % totalAboutSlides;

  // Update Tabs
  const tabs = document.querySelectorAll('.slider-tab-btn');
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === currentAboutSlide);
  });

  // Update Slides
  const slides = document.querySelectorAll('.about-slide-item');
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentAboutSlide);
  });

  resetAboutSlideTimer();
}

function nextAboutSlide() {
  switchAboutSlide(currentAboutSlide + 1);
}

function prevAboutSlide() {
  switchAboutSlide(currentAboutSlide - 1);
}

function resetAboutSlideTimer() {
  clearInterval(aboutSlideTimer);
  clearInterval(aboutSlideProgressInterval);

  const fill = document.getElementById('aboutSliderProgress');
  if (fill) fill.style.width = '0%';
  aboutSlideProgress = 0;

  const stepMs = 50;
  const increment = (stepMs / ABOUT_SLIDE_DURATION) * 100;

  aboutSlideProgressInterval = setInterval(() => {
    aboutSlideProgress += increment;
    if (fill) fill.style.width = Math.min(aboutSlideProgress, 100) + '%';
  }, stepMs);

  aboutSlideTimer = setInterval(() => {
    nextAboutSlide();
  }, ABOUT_SLIDE_DURATION);
}

function initAboutSlider() {
  const wrapper = document.getElementById('aboutSliderWrapper');
  if (!wrapper) return;

  // Pause timer on hover
  wrapper.addEventListener('mouseenter', () => {
    clearInterval(aboutSlideTimer);
    clearInterval(aboutSlideProgressInterval);
  });

  wrapper.addEventListener('mouseleave', () => {
    resetAboutSlideTimer();
  });

  resetAboutSlideTimer();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTestimonialsSlider();
  initAboutSlider();
  initClientLogoAutoScroll();
  initIndustriesFilter();
});

// Industries We Serve Category Filter
function initIndustriesFilter() {
  const filterBtns = document.querySelectorAll('.ind-filter-btn');
  const cards = document.querySelectorAll('.industry-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards with smooth entrance
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  alert('Thank you! Your consultation request has been submitted to Bharat Bhujal Tech Pvt. Ltd. Our team will contact you shortly.');
  closeConsultModal();
  e.target.reset();
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  alert('Thank you for subscribing to Bharat Bhujal Tech newsletter!');
  e.target.reset();
}

// ==========================================================================
// UNIVERSAL SCROLL ENTRANCE & SECTION REVEAL CHOREOGRAPHY
// ==========================================================================
function initScrollRevealAnimations() {
  const containerStaggerPairs = [
    { container: '.services-cards-grid', item: '.solution-card' },
    { container: '.process-cards-row', item: '.process-step-column' },
    { container: '.industries-grid', item: '.industry-card' },
    { container: '.client-logos-grid', item: '.client-logo-box' },
    { container: '.testi-cards-row', item: '.testi-card-box' },
    { container: '.faq-accordion-stack', item: '.faq-card-item' },
    { container: '.footer-grid-5col', item: '.footer-col' },
    { container: '.about-bento-grid', item: '.about-bento-card' }
  ];

  containerStaggerPairs.forEach(({ container, item }) => {
    const parent = document.querySelector(container);
    if (!parent) return;
    const items = parent.querySelectorAll(item);
    items.forEach((el, idx) => {
      el.classList.add('reveal-stagger-item');
      el.style.setProperty('--stagger-index', idx);
    });
  });

  const sectionElements = [
    // Section Header Boxes
    '.services-header-box',
    '.process-header-box',
    '.industries-header-centered',
    '.clients-reference-header',
    '.testi-header-box',
    '.faq-header-box',
    '.about-header-centered',
    // Main Section Bodies / Containers
    '.services-cards-grid',
    '.process-cards-row',
    '.industries-grid',
    '.client-logos-showcase-shell',
    '.testi-slider-showcase',
    '.faq-content-col',
    '.global-cta-section .industries-action-banner',
    '.footer-grid-5col'
  ];

  const targets = document.querySelectorAll(sectionElements.join(', '));
  if (!targets.length) return;

  targets.forEach((el) => {
    el.classList.add('scroll-reveal-init');
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach((el) => observer.observe(el));
}

// ==========================================
// CLIENT MARQUEE: Duplicate logos for seamless infinite loop
// ==========================================
function initClientMarquee() {
  const tracks = document.querySelectorAll('.client-marquee-track');
  tracks.forEach((track) => {
    // Clone all existing children and append for seamless loop
    const items = Array.from(track.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  });
}

// ==========================================
// PROCESS SECTION: Multi-directional scroll entrance
// ==========================================
function initProcessAnimations() {
  const header = document.querySelector('.process-header-box');
  const cards = document.querySelectorAll('.process-step-item');
  if (!cards.length) return;

  // Assign alternating directions: left, bottom, top, right, left, bottom
  const directions = ['left', 'bottom', 'top', 'right', 'left', 'bottom'];
  cards.forEach((card, i) => {
    card.setAttribute('data-anim-dir', directions[i % directions.length]);
  });

  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything immediately
    if (header) header.classList.add('proc-anim-visible');
    cards.forEach(c => c.classList.add('proc-anim-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate header first
        if (header) header.classList.add('proc-anim-visible');
        // Animate all cards (stagger handled by CSS nth-child delays)
        cards.forEach(c => c.classList.add('proc-anim-visible'));
        observer.disconnect();
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  // Observe the card row container
  const row = document.querySelector('.process-cards-row');
  if (row) observer.observe(row);
}

// ==========================================
// SERVICES SECTION: Multi-directional scroll entrance
// ==========================================
function initServicesAnimations() {
  const header = document.querySelector('.services-header-box');
  const cards = document.querySelectorAll('.solution-card');
  if (!cards.length) return;

  // Row 1 (cards 1-3): left, top, right
  // Row 2 (cards 4-6): right, bottom, left
  const directions = ['left', 'top', 'right', 'right', 'bottom', 'left'];
  cards.forEach((card, i) => {
    card.setAttribute('data-srv-dir', directions[i % directions.length]);
  });

  if (!('IntersectionObserver' in window)) {
    if (header) header.classList.add('srv-anim-visible');
    cards.forEach(c => c.classList.add('srv-anim-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (header) header.classList.add('srv-anim-visible');
        cards.forEach(c => c.classList.add('srv-anim-visible'));
        observer.disconnect();
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const grid = document.querySelector('.services-cards-grid');
  if (grid) observer.observe(grid);
}
