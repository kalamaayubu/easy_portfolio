import ProjectCard from "./projectCard/ProjectCard";

const ProjectsGrid = ({ items, heading }) => {
  console.log(`Projects: ${items}`)
  return (
    <section className="bg-gray-200 pt-10 pb-20">
      <h1 className="text-4xl md:text-5xl text-center mb-10 text-gray-800">
        {heading || "My Projects"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {items?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
