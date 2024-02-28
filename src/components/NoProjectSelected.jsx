//import noProjectImage from "../assets/no-projects.png";
import noProjectImage from "../assets/logo1.svg";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-40 h-40 object-contain mx-auto"
      />
      <h2 className="text-sl font-bold text-red-500 my-4">
        {" "}
        No Goals Selected
      </h2>
      <p className="text-red-400 mb-4">
        {" "}
        Select a Goal or get started with a new one
      </p>
      <p className="mt-8">
        {/* copilot Example for demo test uncomment line below */}
        {/* <Button> Create new Project onClick={onStartAddProject}</Button> */}
        <Button onClick={onStartAddProject}> Create new Goal </Button>
      </p>
    </div>
  );
}
