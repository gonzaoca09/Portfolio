

// Como usamos TypeScript, podemos definir los "props" que nuestro componente podría recibir.
// Por ahora no necesitamos ninguno, así que lo dejamos como un objeto vacío.
type Props = {};

// Exportamos el componente de React.
export default function Header({}: Props) {
  return (
    <header className="bg-[linear-gradient(90deg,rgba(42,123,155,1)_41%,rgba(95,200,130,1)_73%)] text-white shadow-md rounded-full flex justify-center items-center my-8 mx-15 px-6 py-2">
      <div className="container flex justify-between items-center self-center">
        {/* Lado izquierdo: Logo o Nombre */}
        <a href="/" className="text-2xl font-bold text-shadow-white hover:text-green-400 transition-colors">
          Hernan Gonzalo Ocaranza
        </a>

        {/* Lado derecho: Links de Navegación */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/projectos" className="hover:text-cyan-800 transition-colors">
                Proyectos
              </a>
            </li>
            <li>
              <a href="/sobreMi" className="hover:text-cyan-800 transition-colors">
                Sobre Mí
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-cyan-800 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-cyan-800 transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}