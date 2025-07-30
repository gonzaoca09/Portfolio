type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
};

export const Card = ({ title, description, imageUrl, tags }: CardProps) => {
  return (
    <div className="w-150 rounded-2xl overflow-hidden shadow-lg bg-lime-700 flex flex-col ">

      <div className="flex bg-gray-200 p-4 gap-5 text-center">
        <img className="size-18 object-cover" src={imageUrl} alt={`Imagen de ${title}`} />
        <div className="flex flex-col justify-center">
          <span className="text-2xl font-bold text-gray-800">
          {title}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between">
          <div className="px-6 py-4">
          <p className="text-cyan-50 text-base">
            {description}
          </p>
        </div>

        {/* Si hay etiquetas, las mostramos en una sección separada */}
        {tags && tags.length > 0 && (
          <div className="px-6 pt-4 pb-2">
            {tags.map((tag) => (
              <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};