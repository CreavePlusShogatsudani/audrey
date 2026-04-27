import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initFadeIn() {
  if (typeof window === "undefined") return;

  // data-fade-in: スクロールで下からフェードイン
  const fadeInElements = document.querySelectorAll("[data-fade-in]");
  fadeInElements.forEach((el) => {
    const element = el as HTMLElement;
    const delay = parseFloat(element.dataset.fadeInDelay || "0");
    const distance = parseFloat(element.dataset.fadeInDistance || "40");

    gsap.fromTo(
      element,
      { y: distance, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // data-fade-stagger: 子要素を順次フェードイン
  const staggerContainers = document.querySelectorAll("[data-fade-stagger]");
  staggerContainers.forEach((container) => {
    const children = container.children;
    gsap.fromTo(
      children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // data-reveal: 横線が伸びてから文字が現れる演出
  const revealElements = document.querySelectorAll("[data-reveal]");
  revealElements.forEach((el) => {
    const element = el as HTMLElement;
    const line = element.querySelector(".reveal-line");
    const text = element.querySelector(".reveal-text");

    if (line && text) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.6, ease: "power2.out" }
      ).fromTo(
        text,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
    }
  });

  // data-image-reveal: 画像がマスクされながら現れる
  const imageReveals = document.querySelectorAll("[data-image-reveal]");
  imageReveals.forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0 0 0)" },
      {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}
