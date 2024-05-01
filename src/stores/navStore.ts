import { atom } from "nanostores";

export const isMobile = atom(window.innerWidth <= 768);
export const isTop = atom(true);
export const isMobileMenuOpen = atom(false);

const handleResize = () => {
  isMobile.set(window.innerWidth < 768);
};

window.addEventListener("resize", handleResize);
handleResize();

const handleScroll = () => {
  isTop.set(window.scrollY <= 10);
};

window.addEventListener("scroll", handleScroll);
handleScroll();