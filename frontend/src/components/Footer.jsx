export default function Footer() {
  return (
    <footer className="bg-[#1B2D36] text-white py-6 text-center text-sm">
      <p>
        © {new Date().getFullYear()} CSG Estudio Jurídico. Todos los derechos
        reservados.
      </p>
      <p className="mt-2 text-gray-400">
        Elaborado por <span className="font-medium">JCARRIETAB</span> y{" "}
        <span className="font-medium">RPARDOC</span>.
      </p>
    </footer>
  );
}
