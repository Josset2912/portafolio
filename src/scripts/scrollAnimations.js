// Scroll animations using Intersection Observer
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Agregar animaciones basadas en data-attribute
          const animType = entry.target.dataset.animate || 'fade-up';
          entry.target.classList.add(`animate-${animType}`);

          // Agregar stagger si es un container con items
          const staggerItems = entry.target.querySelectorAll('[data-stagger]');
          staggerItems.forEach((item, index) => {
            item.classList.add(`animate-${animType}`);
            item.classList.add(`animate-stagger-${(index % 4) + 1}`);
          });

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar elementos con data-animate
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    // También observar articles y cards automáticamente
    document.querySelectorAll('article, .card').forEach((el) => {
      if (!el.dataset.animate) {
        el.dataset.animate = 'fade-up';
        observer.observe(el);
      }
    });
  });

  // Animated counter para números
  window.animateNumber = function(element, targetNumber, duration = 1000) {
    let currentNumber = 0;
    const increment = targetNumber / (duration / 16);
    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        element.textContent = targetNumber;
        element.classList.add('animate-number');
        clearInterval(interval);
      } else {
        element.textContent = Math.floor(currentNumber);
      }
    }, 16);
  };

  // Observar números animados
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.dataset.animateNumber) {
            const targetNum = parseInt(entry.target.dataset.animateNumber);
            window.animateNumber(entry.target, targetNum);
            numberObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      document.querySelectorAll('[data-animate-number]').forEach((el) => {
        numberObserver.observe(el);
      });
    });
  }
}
