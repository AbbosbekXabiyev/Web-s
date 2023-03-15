import { useState } from "react";

function MyAccordion(props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`${
        isVisible ? " bg-blue-600 text-white" : "h-[108px]"
      } rounded-[40px] pl-[56px] py-[36px] pr-[32px] border border-[#B0B0C0]`}
    >
      <div className="flex justify-between">
        <span
          className={`text-[20px] text-myBlack ${
            isVisible ? "text-white" : "text-myBlack"
          }`}
        >
          {props.title}
        </span>
        <button
          onClick={toggleVisible}
          className={`bg-blue-700 rounded-full w-[32px] h-[32px] text-white ${
            isVisible ? "bg-white text-blue-700" : ""
          }`}
        >
          {isVisible ? "-" : "+"}
        </button>
      </div>
      {isVisible && <p>{props.body}</p>}
    </div>
  );
}

export default MyAccordion;
