import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initParallax() {
  if (typeof window === "undefined") return;

  // data-parallax 属性を持つすべての要素に適用
  const parallaxElements = document.querySelectorAll("[data-parallax]");

  parallaxElements.forEach((el) => {
    const element = el as HTMLElement;
    const speed = parseFloat(element.dataset.parallax || "0.5");
    const direction = element.dataset.parallaxDirection || "y";

    // speed < 1 → 背景がゆっくり動く（奥行き感）
    // speed > 1 → 前景が速く動く（手前感）
    const distance = (1 - speed) * 300;

    if (direction === "y") {
      gsap.fromTo(
        element,
        { y: -distance },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: element.parentElement || element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    } else if (direction === "x") {
      gsap.fromTo(
        element,
        { x: -distance },
        {
          x: distance,
          ease: "none",
          scrollTrigger: {
            trigger: element.parentElement || element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  });

  // 商品画像の視差パララックス
  const productImages = document.querySelectorAll("[data-product-parallax]");
  productImages.forEach((img) => {
    gsap.fromTo(
      img,
      { y: 50, scale: 1.05 },
      {
        y: -50,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  });

  // Hero 背景商品写真の微細なズーム
  const heroBg = document.querySelector(".hero-bg-image");
  if (heroBg) {
    gsap.fromTo(
      heroBg,
      { scale: 1 },
      {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: heroBg,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }
}
