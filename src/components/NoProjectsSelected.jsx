import noProjectsImg from "../assets/no-projects.png";
import Button from "./Button";

function NoProjectsSelected({ onClick }) {
  return (
    <div className="mt-28 text-center w-2/3">
      <img
        src={noProjectsImg}
        alt="notes and a pen"
        className="w-16 object-contain mx-auto mb-4"
      />
      <h2 className="text-stone-500 mb-3 font-bold text-xl ">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-6">
        Select a project or ge started with a new one
      </p>
      <Button onClick={onClick}>Create new project</Button>
    </div>
  );
}
export default NoProjectsSelected;
