import { svgCode } from "../assets/EmptySVG";
import "./Empty.css";

export const Empty = () => {
  return (
    <>
    <div className="text-center">
    <p className=" text-4xl p-5 font-bold my-color">Create New Project</p>
    </div>
      <div className="empty" dangerouslySetInnerHTML={{ __html: svgCode }} />
      <div className="btn-div">
        <button className="add-project text-2xl">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Add new Project
        </button>
      </div>
    </>
  );
};
