import { isMobile, isMobileMenuOpen, isTop } from "@/stores/navStore";
import { useStore } from "@nanostores/react";
import { Menu } from "lucide-react";
import { Transition } from "@headlessui/react";
import gihay_logo from "@/assets/gihay_main_logo.png";
import { X } from "lucide-react";

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
          !top && `shadow-lg glass`
        }`}
      >
        <div className="flex justify-between">
          <a href="#">
            <img
              className="ml-2"
              src={gihay_logo.src}
              width="100"
              alt="Zach Riane Machacon logo"
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
        className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-between bg-white ${
          !top && `shadow-lg`
        }`}
      >
        <a href="#">
          <img
            className="ml-2"
            src={gihay_logo.src}
            width="100"
            alt="Zach Riane Machacon logo"
          />
        </a>
        <div className="flex items-center justify-center gap-10 font-semibold text-xl mr-10">
          <a href="#about" className="hover:text-gray-600">
            About
          </a>
          <a href="#experience" className="hover:text-gray-600">
            Events
          </a>
          <a href="#projects" className="hover:text-gray-600">
            Blog
          </a>
          <a href="#contact" className="hover:text-gray-600">
            Contact
          </a>
        </div>
      </nav>
    );
  }
};
