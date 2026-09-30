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
function openConsultModal() {
  const modal = document.getElementById('consultModal');
  if (modal) modal.classList.add('active');
}

function closeConsultModal() {
  const modal = document.getElementById('consultModal');
  if (modal) modal.classList.remove('active');
}

// Close on backdrop click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('consultModal');
  if (e.target === modal) {
    closeConsultModal();
  }
});

// 6. Interactive FAQ Accordion Toggle
function toggleFaq(headerEl) {
  const item = headerEl.parentElement;
  const wasActive = item.classList.contains('active');
  
  // Close other items in the same column for smooth UX
  const column = item.closest('.faq-column');
  if (column) {
    const items = column.querySelectorAll('.faq-accordion-item');
    items.forEach(i => {
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

// 7. Testimonials Carousel Slider
function initTestimonialsSlider() {
  const prevBtn = document.getElementById('testiPrevBtn');
  const nextBtn = document.getElementById('testiNextBtn');
  const dots = document.querySelectorAll('.testi-pagination-dots .p-dot');
  let currentIndex = 0;

  function updateSlide(index) {
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
      updateSlide(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex < dots.length - 1) ? currentIndex + 1 : 0;
      updateSlide(currentIndex);
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentIndex = idx;
      updateSlide(currentIndex);
    });
  });
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
});

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

