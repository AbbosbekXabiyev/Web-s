import HTwo from "./HTwo";

function Lesson() {
  return (
    <div className="flex flex-col justify-center items-center mt-60">
      <HTwo innerText={"Get a free trial lesson today"} />
      <p className="font-light text-[18px] text-myGray mt-4">
        Start fulfilling your language dreams with our school
      </p>
    </div>
  );
}

export default Lesson;
