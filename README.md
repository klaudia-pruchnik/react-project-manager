# react-project-manager

This is a project built during the React course on Udemy. The application allows users to manage projects and tasks in a simple and intuitive way. It uses React's state management to dynamically update the UI as tasks and projects are added or removed.

## Features:
- **Add new projects**: Users can create new projects with a title, description, and due date.
- **Manage tasks**: Users can add, delete, and view tasks for each project.
- **Project selection**: Users can select projects from the sidebar and see their tasks or create a new one.
- **Form validation**: The app validates form data before saving, showing an error modal if any input fields are left blank.

## Technologies:
- React (Hooks: `useState`, `useRef`)
- JSX
- Tailwind CSS (for styling)

## How it works:
- The `App` component manages the overall state of the projects and tasks.
- The state includes `selectedProjectId`, a list of projects, and a list of tasks.
- Each task is associated with a project, and tasks can be added or removed from specific projects.
- The app displays different components based on whether a project is selected, such as a sidebar to list projects or a detailed view of the tasks within a selected project.

## How to use:
1. Clone the repository:  
   `git clone https://github.com/klaudia-pruchnik/react-project-manager.git`
   
2. Install dependencies:  
   `npm install`
   
3. Run the app:  
   `npm start`

## License:
This project is for educational purposes and created as part of the React course on Udemy.

