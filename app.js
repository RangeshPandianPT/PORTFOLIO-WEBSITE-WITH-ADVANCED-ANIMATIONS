
gsap.registerPlugin(ScrollTrigger);

gsap.from("header", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out"
});

gsap.from("footer", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

gsap.utils.toArray(".reveal-section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: section,
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});

// Preloader remove after load
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});
