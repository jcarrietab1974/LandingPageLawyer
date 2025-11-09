import {
  FaBalanceScale,
  FaUsers,
  FaGlobeAmericas,
  FaEraser,
  FaGavel,
  FaFileSignature,
  FaHome,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaBalanceScale size={40} />,
      title: "Derecho Civil",
      desc: "Asesoría integral en conflictos contractuales y civiles.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Derecho de Familia",
      desc: "Apoyo legal en procesos familiares y custodias.",
    },
    {
      icon: <FaGlobeAmericas size={40} />,
      title: "Derecho Migratorio",
      desc: "Trámites de residencia, visas y nacionalización.",
    },
    {
      icon: <FaEraser size={40} />,
      title: "Eliminación de Antecedentes",
      desc: "Gestión para limpiar registros judiciales.",
    },
    {
      icon: <FaGavel size={40} />,
      title: "Policía Local",
      desc: "Representación ante infracciones y causas menores.",
    },
    {
      icon: <FaHome size={40} />,
      title: "Saneamiento de Bienes Raíces",
      desc: "Regularización y asesoría en propiedad inmobiliaria.",
    },
    {
      icon: <FaFileSignature size={40} />,
      title: "Redacción de Contratos y Trámite Notarial",
      desc: "Elaboración de documentos y acompañamiento legal.",
    },
  ];

  return (
    <section className="py-20 bg-[#1B2D36] text-center">
      <h2 className="text-3xl font-bold text-[#F5F5F5] mb-12">
        Áreas de Práctica
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="bg-[#F5F5F5] text-[#1B2D36] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4 text-[#B89C67]">
              {srv.icon}
            </div>
            <h3 className="font-semibold text-xl mb-2">{srv.title}</h3>
            <p className="text-gray-700 text-sm">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
