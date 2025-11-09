import { useState } from "react";
import { FaEnvelope, FaUser, FaRegCommentDots } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("enviando");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("exito");
        setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error en fetch:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="bg-[#1B2D36] text-[#F5F5F5] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#B89C67]">
          Contáctanos hoy
        </h2>
        <p className="mb-10 text-lg text-gray-300">
          ¿Tienes alguna consulta o necesitas asesoría legal? Envíanos un
          mensaje y te responderemos a la brevedad.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#243842] rounded-2xl p-8 shadow-lg text-left space-y-5"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <label className="block mb-2 font-semibold flex items-center gap-2">
                <FaUser className="text-[#B89C67]" /> Nombre completo
              </label>
              <input
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full bg-[#1B2D36] text-[#F5F5F5] border border-[#B89C67]/40 rounded-lg p-3 focus:outline-none focus:border-[#B89C67] transition"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold flex items-center gap-2">
                <FaEnvelope className="text-[#B89C67]" /> Correo electrónico
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1B2D36] text-[#F5F5F5] border border-[#B89C67]/40 rounded-lg p-3 focus:outline-none focus:border-[#B89C67] transition"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-semibold flex items-center gap-2">
              <FaRegCommentDots className="text-[#B89C67]" /> Asunto
            </label>
            <input
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              className="w-full bg-[#1B2D36] text-[#F5F5F5] border border-[#B89C67]/40 rounded-lg p-3 focus:outline-none focus:border-[#B89C67] transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full bg-[#1B2D36] text-[#F5F5F5] border border-[#B89C67]/40 rounded-lg p-3 h-32 focus:outline-none focus:border-[#B89C67] transition"
            />
          </div>

          <button
            type="submit"
            disabled={status === "enviando"}
            className="w-full bg-[#B89C67] text-[#1B2D36] font-semibold px-6 py-3 rounded-lg hover:bg-[#a08354] transition"
          >
            {status === "enviando" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "exito" && (
            <p className="text-green-400 mt-3 text-center">
              ✅ Mensaje enviado correctamente.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-3 text-center">
              ❌ Error al enviar el mensaje.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
