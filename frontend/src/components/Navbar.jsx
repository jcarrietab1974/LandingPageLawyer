import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para aplicar sombra
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para desplazamiento suave
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/50 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Menú centrado */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex space-x-10 text-white font-medium text-xl">
            <li>
              <button
                onClick={() => handleScrollTo("hero")}
                className="hover:text-[#B89C67] transition"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("about")}
                className="hover:text-[#B89C67] transition"
              >
                Nosotros
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("services")}
                className="hover:text-[#B89C67] transition"
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("contact")}
                className="hover:text-[#B89C67] transition"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Botón móvil */}
        <div className="md:hidden flex justify-end flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-sm text-center py-4 space-y-4 text-white font-medium">
          <button
            onClick={() => handleScrollTo("hero")}
            className="block w-full hover:text-[#B89C67] transition"
          >
            Inicio
          </button>
          <button
            onClick={() => handleScrollTo("about")}
            className="block w-full hover:text-[#B89C67] transition"
          >
            Nosotros
          </button>
          <button
            onClick={() => handleScrollTo("services")}
            className="block w-full hover:text-[#B89C67] transition"
          >
            Servicios
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="block w-full hover:text-[#B89C67] transition"
          >
            Contacto
          </button>
        </div>
      )}
    </nav>
  );
}
