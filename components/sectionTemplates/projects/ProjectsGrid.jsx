import ProjectCard from "./projectCard/ProjectCard";

const ProjectsGrid = () => {
  return (
    <section className="bg-gray-600 pt-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center mb-4">
        My Projects
      </h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
