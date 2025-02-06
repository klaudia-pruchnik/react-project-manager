import Button from "./Button";

function ProjectSidebar({
  onAdd,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <div className="bg-stone-950 w-72 px-8 py-14 rounded-r-lg">
      <h2 className="text-stone-50 mb-8 uppercase font-bold text-xl">
        Your Projects
      </h2>
      <Button onClick={onAdd}>+ Add Project</Button>
      {projects.map((project) => (
        <button
          key={project.id}
          className={`w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800  ${
            project.id === selectedProjectId
              ? "bg-stone-800 text-stone-200"
              : "text-stone-400"
          }`}
          onClick={() => onSelectProject(project.id)}
        >
          {project.title}
        </button>
      ))}
    </div>
  );
}

export default ProjectSidebar;
