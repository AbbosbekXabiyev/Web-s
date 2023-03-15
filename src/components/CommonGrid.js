import Common from "./Common";

function CommonGrid() {
  return (
    <div className="grid grid-cols-2">
      <Yoz name={"How can I know my level of knowledge?"}></Yoz>
      <Yoz name={"How can I know my level of knowledge?"}></Yoz>
      <Yoz name={"How can I know my level of knowledge?"}></Yoz>
      <Yoz name={"How can I know my level of knowledge?"}></Yoz>
      <Yoz name={"How can I know my level of knowledge?"}></Yoz>
      <Common></Common>
    </div>
  );
}

export default CommonGrid;

function Yoz(props) {
  return (
    <div className="flex  border-neutral-500">
      <span className="text-[20px] font-[500] text-myBlack">{props.name}</span>
      <button className="bg-blue-600 rounded-full p-[10px]">+</button>
    </div>
  );
}
