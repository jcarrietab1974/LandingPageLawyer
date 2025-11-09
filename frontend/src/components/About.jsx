import { useState } from "react";
import Gerardo from "../assets/Gerardo.jpg";
import Isabel from "../assets/Isabel.jpg";
import Maria from "../assets/Maria.jpg";
import Pedro from "../assets/Pedro.jpg";

export default function About() {
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const lawyers = [
    {
      name: "Isabel",
      role: "Asociada",
      email: "isabel@csg.cl",
      phone: "+56 2 26045139",
      img: Isabel,
      bio: "Isabel cuenta con experiencia en derecho civil y de familia. Se destaca por su compromiso con la resolución alternativa de conflictos y su trato humano con los clientes.",
    },
    {
      name: "María",
      role: "Asociada",
      email: "maria@csg.cl",
      phone: "+56 2 26945186",
      img: Maria,
      bio: "María ha trabajado en áreas de derecho laboral y migratorio, brindando asesorías personalizadas y efectivas a particulares y empresas.",
    },
    {
      name: "Gerardo",
      role: "Socio",
      email: "gerardo@csg.cl",
      phone: "+56 2 23788965",
      img: Gerardo,
      bio: "Gerardo es socio fundador del estudio, especializado en derecho corporativo y comercial. Dirige el equipo con una visión moderna y estratégica del derecho empresarial.",
    },
    {
      name: "Pedro",
      role: "Asociado Senior",
      email: "pedro@csg.cl",
      phone: "+56 2 24344301",
      img: Pedro,
      bio: "Pedro posee amplia experiencia en derecho penal y administrativo. Representa a clientes en casos complejos con una sólida defensa técnica.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "#1B2D36" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Título y descripción */}
        <h2 className="text-3xl font-bold mb-6 text-white">Sobre Nosotros</h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-12">
          En CSG Estudio Jurídico ofrecemos asesoría legal integral con enfoque
          profesional y humano. Nuestro compromiso es defender tus
          derechos y ofrecer soluciones efectivas en las principales ramas del
          derecho.
        </p>

        {/* Sección del equipo */}
        <h3 className="text-2xl font-semibold mb-10 text-white">
          Nuestro Equipo
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <img
                src={lawyer.img}
                alt={lawyer.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 uppercase">
                  {lawyer.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{lawyer.role}</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>
                    <i className="fa fa-envelope mr-2 text-[#D4AF37]"></i>{" "}
                    {lawyer.email}
                  </p>
                  <p>
                    <i className="fa fa-phone mr-2 text-[#D4AF37]"></i>{" "}
                    {lawyer.phone}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedLawyer(lawyer)}
                  className="mt-2 bg-[#D4AF37] text-white px-4 py-2 rounded-lg hover:bg-[#9c7b13] transition"
                >
                  Perfil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal del perfil */}
      {selectedLawyer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-8 relative mx-4 text-left">
            {/* Botón de cierre */}
            <button
              onClick={() => setSelectedLawyer(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>

            <div className="flex flex-col items-center">
              <img
                src={selectedLawyer.img}
                alt={selectedLawyer.name}
                className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {selectedLawyer.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {selectedLawyer.role}
              </p>
              <p className="text-gray-700 text-center mt-4">
                {selectedLawyer.bio}
              </p>
              <div className="text-sm text-gray-600 mt-6 text-center">
                <p>
                  <i className="fa fa-envelope mr-2 text-[#D4AF37]"></i>
                  {selectedLawyer.email}
                </p>
                <p>
                  <i className="fa fa-phone mr-2 text-[#D4AF37]"></i>
                  {selectedLawyer.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
