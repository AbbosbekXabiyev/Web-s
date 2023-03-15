import HTwo from "./HTwo";
import SubHeader from "./SubHeader";

function ValueSection() {
  return (
    <section className="flex flex-col items-center mt-[200px]">
      <SubHeader innerText={"WHY CHOOSE US"}></SubHeader>
      <HTwo innerText={"Our values"} />
    </section>
  );
}

export default ValueSection;
