function Card({ title, description, tags, imageUrl, path }) {  // Added props
  return (
    <div className="h-full rounded-xl overflow-hidden bg-white flex flex-col hover:opacity-80">
      <a href={path} className="flex flex-col h-full">
        <img
          src={imageUrl || "https://placehold.co/600x400"}
          alt={title}
          className="w-full h-48 object-cover"
        />
        
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2">{title || "Project Name"}</div>
          <p className="text-gray-700 text-base">
            {description || "Add your project description here"}
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          {(tags).map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-transparent border border-stone-600 rounded-full px-3 py-1 
                               text-xs font-semibold text-gray-700 mr-1 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
}

export default Card;