import Image from "next/image";

const ProjectCard = ({ title, description, image, link }) => {
  // If any of the props are missing, don't render the card
  if (!title || !description || !image || !link) {
    return null;
  }

  const img = image || '/assets/heroBg1.jpg';

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      {image && (
        <Image
          src={img}
          alt={title}
          width={400}
          height={200}
          className="w-full h-60 object-cover rounded-lg mb-3"
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
