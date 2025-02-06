import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectsSelected from "./components/NoProjectsSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) =>
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });

  const handleDeleteTask = (id) =>
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });

  const handleAddNewProject = () =>
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });

  const handleSaveProject = (formData) => {
    setProjectState((prevState) => {
      const updatedProjects = [formData, ...prevState.projects];
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      };
    });
  };

  const handleCancelAdd = () =>
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });

  const handleSelectProject = (id) =>
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });

  const handleDeleteProject = () =>
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      );
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...updatedProjects],
      };
    });

  let displayedContent;

  if (projectState.selectedProjectId === undefined) {
    displayedContent = <NoProjectsSelected onClick={handleAddNewProject} />;
  } else if (projectState.selectedProjectId === null) {
    displayedContent = (
      <NewProject onSave={handleSaveProject} onCancel={handleCancelAdd} />
    );
  } else {
    const displayedProject = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
    );
    const selectedProjectTasks = projectState.tasks.filter(
      (task) => task.projectId === projectState.selectedProjectId
    );

    displayedContent = (
      <Project
        title={displayedProject.title}
        dueDate={displayedProject.dueDate}
        description={displayedProject.description}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={selectedProjectTasks}
      />
    );
  }

  return (
    <>
      <div className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onAdd={handleAddNewProject}
          projects={projectState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectState.selectedProjectId}
        />
        {displayedContent}
      </div>
    </>
  );
}

export default App;
