import { useState } from "react";

function Common() {
  const [ozgaruvchi, setOzgaruvchi] = useState(true);
  const ozgartir = () => {
    setOzgaruvchi(!ozgaruvchi);
    return (
      <div className="bg-blue-600">
        <div>
          <span className="text-[20px] font-[500] text-myBlack">
            How can I know my level of knowledge?
          </span>
          {ozgaruvchi && (
            <p>
              By the end of the trial lesson, you will be able to determine for
              yourself whether this kind of online lesson is right for you or
              not. In our experience, most students appreciate the benefits of
              online education and decide to study online.
            </p>
          )}
        </div>
        <button className="bg-blue-700" onClick={ozgartir}>
          {ozgaruvchi == "true" ? "+" : "-"}
        </button>
      </div>
    );
  };
}
export default Common;
