import { isMobile, isMobileMenuOpen, isTop } from "@/stores/navStore";
import { useStore } from "@nanostores/react";
import { Menu } from "lucide-react";
import { Transition } from "@headlessui/react";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import gihay_logo from "@/assets/gihay_main_logo.png";

export const NavbarComponent = () => {
  const top = useStore(isTop);
  const mobile = useStore(isMobile);
  const mobileMenu = useStore(isMobileMenuOpen);

  const toggleMenu = () => {
    isMobileMenuOpen.set(!mobileMenu);
  };

  if (mobile) {
    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-white ${
          !top && `shadow-lg`
        }`}
      >
        <div className="flex justify-between">
          <a href="#">
            <img
              className="ml-2"
              src={gihay_logo.src}
              width="100"
              alt="Gihay logo"
            />
          </a>
          <button onClick={toggleMenu} className="p-4">
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
        <Transition
          show={mobileMenu}
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 z-[-1] absolute left-0 right-0 top-[-100vh]"
          enterTo="opacity-100 z-[-1] absolute left-0 right-0 top-0"
          leave="transition ease duration-500 transform"
          leaveFrom="opacity-100 z-[-1] absolute left-0 right-0 top-0"
          leaveTo="opacity-0 z-[-1] absolute left-0 right-0 top-[-100vh]"
        >
          <div className="z-[-1] absolute left-0 right-0 top-0 h-screen gap-10 flex flex-col text-2xl font-semibold justify-center items-center bg-white border-t-2 shadow-md">
            <a href="#" className="hover:text-gray-600" onClick={toggleMenu}>
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-600"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-gray-600"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-gray-600"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-gray-600"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </Transition>
      </nav>
    );
  } else {
    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between text-white bg-gihay-bg py-2 ${
          !top && `shadow-lg`
        }`}
      >
        <a href="#">
          <img
            className="ml-2"
            src={gihay_logo.src}
            width="75"
            alt="Gihay logo"
          />
        </a>
        <div className="flex items-center justify-center gap-10 text-black font-medium text-xl">
          <a href="#about" className="hover:text-gihay-highlight">
            About
          </a>
          <a href="#projects" className="hover:text-gihay-highlight">
            Blog
          </a>
          <a href="#contact" className="hover:text-gihay-highlight">
            Contact
          </a>
        </div>
        <Button
          className="bg-gihay-gradient flex gap-2 justify-center items-center mr-5 mb-2 text-white hover:text-gihay-bg rounded-xl"
        >
          <Heart />
          <span className="font-semibold">GET INVOLVED</span>
        </Button>
      </nav>
    );
  }
};
