import { useEffect } from "react";
import fondo from "../assets/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg";
import logo from "../assets/Logo CSG.png";

export default function Hero() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <section
      className="relative flex items-center justify-center text-white text-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 px-6 max-w-3xl flex flex-col items-center">
        <img
          src={logo}
          alt="Logo CSG Estudio Jurídico"
          className="w-48 md:w-64 mb-6 drop-shadow-[0_0_20px_rgba(184,156,103,0.6)]"
        />

        <h1
          className="text-5xl md:text-7xl font-serif font-bold mb-2 text-[#D4AF37] drop-shadow-lg"
          style={{ letterSpacing: "2px" }}
        >
          CSG
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-gray-200 tracking-[4px] uppercase">
          Estudio Jurídico
        </p>

        <p className="text-lg md:text-2xl mb-4 drop-shadow-md text-[#F5F5F5]">
          Asesoría legal profesional en Santiago de Chile
        </p>

        <a
          href="#contacto"
          className="bg-[#B89C67] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#a08354] transition duration-300 shadow-lg"
        >
          Contáctanos hoy
        </a>
      </div>
    </section>
  );
}
