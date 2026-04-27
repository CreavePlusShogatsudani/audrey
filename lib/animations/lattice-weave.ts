import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initLatticeWeave() {
  if (typeof window === "undefined") return;

  const latticeElements = document.querySelectorAll("[data-lattice-weave]");

  latticeElements.forEach((el) => {
    const element = el as HTMLElement;
    const uid = Math.random().toString(36).substr(2, 9);
    const patternId = `lattice-${uid}`;

    // 既存の CSS 背景を隠して SVG に置き換える
    element.style.background = "none";

    const svgNS = "http://www.w3.org/2000/svg";

    // SVG 要素を生成
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "lattice-weave-svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden;";

    // defs + pattern
    const defs = document.createElementNS(svgNS, "defs");
    const pattern = document.createElementNS(svgNS, "pattern");
    pattern.setAttribute("id", patternId);
    pattern.setAttribute("x", "0");
    pattern.setAttribute("y", "0");
    pattern.setAttribute("width", "8");
    pattern.setAttribute("height", "8");
    pattern.setAttribute("patternUnits", "userSpaceOnUse");

    // 対角線1（右下方向）
    const line1 = document.createElementNS(svgNS, "line");
    line1.setAttribute("x1", "0");
    line1.setAttribute("y1", "0");
    line1.setAttribute("x2", "8");
    line1.setAttribute("y2", "8");
    line1.setAttribute("stroke", "rgba(205,15,45,0.18)");
    line1.setAttribute("stroke-width", "0.5");
    line1.setAttribute("class", "lattice-line-diag1");

    // 対角線2（左下方向）
    const line2 = document.createElementNS(svgNS, "line");
    line2.setAttribute("x1", "8");
    line2.setAttribute("y1", "0");
    line2.setAttribute("x2", "0");
    line2.setAttribute("y2", "8");
    line2.setAttribute("stroke", "rgba(205,15,45,0.18)");
    line2.setAttribute("stroke-width", "0.5");
    line2.setAttribute("class", "lattice-line-diag2");

    pattern.appendChild(line1);
    pattern.appendChild(line2);
    defs.appendChild(pattern);

    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", `url(#${patternId})`);

    svg.appendChild(defs);
    svg.appendChild(rect);

    // 親要素に relative が必要
    const parent = element.parentElement;
    if (parent && getComputedStyle(parent).position === "static") {
      parent.style.position = "relative";
    }
    element.appendChild(svg);

    // 対角線1：左上 → 右下へ stroke-dashoffset で「引かれる」
    gsap.set(line1, { strokeDasharray: "12", strokeDashoffset: "12" });
    gsap.set(line2, { strokeDasharray: "12", strokeDashoffset: "12" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.parentElement || element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // 対角線1：先に引かれる
    tl.to(line1, {
      strokeDashoffset: 0,
      duration: 0.9,
      ease: "power2.out",
    })
    // 対角線2：少し遅れて交差（編み込まれる）
    .to(line2, {
      strokeDashoffset: 0,
      duration: 0.9,
      ease: "power2.out",
    }, "-=0.5");

    // 全体の opacity も 0 → 1
    gsap.fromTo(
      svg,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element.parentElement || element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}
