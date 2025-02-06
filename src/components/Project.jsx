import Tasks from "./Tasks";

function Project({
  title,
  dueDate,
  description,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const date = new Date(dueDate);
  const dateOptions = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}

export default Project;
