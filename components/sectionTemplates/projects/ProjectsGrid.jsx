import ProjectCard from "./projectCard/ProjectCard";

const ProjectsGrid = ({ projects, heading }) => {
  return (
    <section className="bg-gray-100 pt-10 pb-20">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center mb-10 text-gray-800">
        {heading || "My Projects"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
