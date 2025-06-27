document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('open');
  });
});

function animateCounter(element) {
  const target = +element.getAttribute('data-target');
  const suffix = element.getAttribute('data-suffix') || '';
  let count = 0;
  const step = target / 200;

  const update = () => {
    count += step;
    if (count < target) {
      element.textContent = Math.round(count) + suffix;
      requestAnimationFrame(update);
    } else {
      element.textContent = target + suffix;
    }
  };
  update();
}

const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => observer.observe(counter));

const revealBlocks = document.querySelectorAll('.scroll-reveal');

const server = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      server.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

revealBlocks.forEach(block => {
  server.observe(block);
});

const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  const secondBlock = document.querySelector('.familiar-screen');
  const triggerHeight = secondBlock?.offsetTop || 400;

  if (window.scrollY > triggerHeight) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  scrollLock: true,
  responsive: [
    {

      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

setInterval(() => {
  const glider = document.querySelector('.glider').glider;
  glider.scrollItem((glider.slide + 1) % glider.slides.length);
}, 4000);

