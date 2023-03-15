function GridOne() {
  return (
    <div className="grid grid-cols-3 gap-[90px] mt-[88px]">
      <File
        Img={"/gridone.png"}
        Nom={"Speaking clubs"}
        Text={
          "In our school you will practice your speaking skills and just get a lot of positive emotions!"
        }
      ></File>
      <File
        Img={"/gridtwo.png"}
        Nom={"Quality control"}
        Text={
          "A huge work has been done with the teachers and their work has been monitored thoroughly. "
        }
      ></File>
      <File
        Img={"/gridthree.png"}
        Nom={"Progress analysis"}
        Text={
          "The CEF of Reference has been used at our school. It allows to control our students’ success in studying."
        }
      ></File>
    </div>
  );
}

export default GridOne;

function File(props) {
  return (
    <div className="flex flex-col items-center">
      <img src={props.Img}></img>
      <span className="font-[500] text-[24px] text-myBlack mt-[46px]">
        {props.Nom}
      </span>
      <p className="font-light text-[18px] text-myGray px-[60px] mt-[16px]">
        {props.Text}
      </p>
    </div>
  );
}
