import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-red-100 text-red-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-red-500">
        Your Vitality Goals
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Goal</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-red-400 hover:bg-red-200";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-red-50 text-red-200";
          } else {
            cssClasses += " text-red-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
              {/* <p className="text-red-400">{project.description}</p> */}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
