

// 1. Definimos los tipos de nuestras props
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
};

// 2. Creamos el componente como una función
// Usamos "destructuring" ({ title, ... }) para acceder a las props de forma más limpia.
// Le decimos a la función que sus props deben cumplir con el tipo "CardProps".
export const Card = ({ title, description, imageUrl, tags }: CardProps) => {
  
  // 3. Devolvemos el JSX que define la estructura visual de la tarjeta.
  // Usamos llaves {} para insertar los valores de las props dinámicamente.
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={`Imagen de ${title}`} />
      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>

      {/* Renderizado condicional: solo mostramos esta sección si la prop 'tags' existe y tiene elementos */}
      {tags && tags.length > 0 && (
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};