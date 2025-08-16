const onIntersect = (entries) => {
  entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('show'); });
};
const io = new IntersectionObserver(onIntersect, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
