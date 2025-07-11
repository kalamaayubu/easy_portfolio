const ProjectCard = ({ title, description, image, link }) => {
  // If any of the props are missing, don't render the card
  if (!title || !description || !image || !link) {
    return null;
  }
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      {image && (
        <img
          src={`/assets/heroBg1.jpg`}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3 line-clamp-2">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          View Project →
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
