import { useState, useEffect, useRef } from "react"; // Added useEffect, useRef
import OverlayMenu from "./overlayMenu";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuopen, setmenuopen] = useState(false);
  const [visible, setvisible] = useState(true);
  const [forceVisible, setforceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerID = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setforceVisible(true);
          setvisible(true);
        } else {
          setforceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (forceVisible) {
        setvisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setvisible(false);
        if (timerID.current) clearTimeout(timerID.current);
      } else {
        setvisible(true);

        if (timerID.current) clearTimeout(timerID.current);
        timerID.current = setTimeout(() => {
          setvisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerID.current) clearTimeout(timerID.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-5 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Madhav Vashisht
          </div>
        </div>

        <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={() => setmenuopen(true)}
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>

        <div className="hidden lg:block">
          <a
            href="#Contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuopen} onClose={() => setmenuopen(false)} />
    </>
  );
}
