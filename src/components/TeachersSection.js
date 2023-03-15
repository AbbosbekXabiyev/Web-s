import { leftIcon, rightIcon } from "../icons";
import HTwo from "./HTwo";
import SubHeader from "./SubHeader";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";

function TeachersSection() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  return (
    <div className=" mt-[234px]">
      <SubHeader innerText={"Key Persons"} />
      <div className="flex justify-between">
        <HTwo innerText={"Meet our teachers"} />
        <div className="flex space-x-[30px]">
          <LeftOrRightBtn
            isRight={false}
            isDisabled={isPrevDisabled}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
          <LeftOrRightBtn
            isRight={true}
            isDisabled={isNextDisabled}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
        </div>
      </div>
      <Carousel
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        setIsPrevDisabled={setIsPrevDisabled}
        setIsNextDisabled={setIsNextDisabled}
      />
    </div>
  );
}

export default TeachersSection;

function Carousel(props) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={70}
      slidesPerGroup={3}
      loop={false}
      onTransitionEnd={(e) => {
        if (e.isBeginning == true) {
          props.setIsPrevDisabled(true);
        } else {
          props.setIsPrevDisabled(false);
        }
        if (e.isEnd == true) {
          props.setIsNextDisabled(true);
        } else {
          props.setIsNextDisabled(false);
        }
      }}
      loopFillGroupWithBlank={true}
      navigation={{
        prevEl: props.navigationPrevRef.current,
        nextEl: props.navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = props.navigationPrevRef.current;
        swiper.params.navigation.nextEl = props.navigationNextRef.current;
      }}
      modules={[Pagination, Navigation]}
      className=" mt-[60px]"
    >
      <SwiperSlide>
        <TuturCard
          CardImg={"/Howard.png"}
          FullName={"Christian Howard"}
          Flag={"/Italy.png"}
          Conture={"Italian teacher"}
        ></TuturCard>
      </SwiperSlide>
      <SwiperSlide>
        <TuturCard
          CardImg={"/Wilson.png"}
          FullName={"Sandra Wilson"}
          Flag={"/Ispaniya.png"}
          Conture={"Spanish teacher"}
        ></TuturCard>
      </SwiperSlide>
      <SwiperSlide>
        <TuturCard
          CardImg={"Cooper.png"}
          FullName={"Jimmy Cooper"}
          Flag={"/Angilya.png"}
          Conture={"English teacher"}
        ></TuturCard>
      </SwiperSlide>
      <SwiperSlide>
        <TuturCard
          CardImg={"/abbos.jpg"}
          FullName={"Abbos Khabiyev"}
          Flag={"/bayroq.jfif"}
          Conture={"Uzbekistan teacher"}
        ></TuturCard>
      </SwiperSlide>
      <SwiperSlide>
        <TuturCard
          CardImg={"/Wilson.png"}
          FullName={"Sandra Wilson"}
          Flag={"/Ispaniya.png"}
          Conture={"Spanish teacher"}
        ></TuturCard>
      </SwiperSlide>
      <SwiperSlide>
        <TuturCard
          CardImg={"Cooper.png"}
          FullName={"Jimmy Cooper"}
          Flag={"/Angilya.png"}
          Conture={"English teacher"}
        ></TuturCard>
      </SwiperSlide>
    </Swiper>
  );
}

function LeftOrRightBtn(props) {
  return (
    <button
      ref={props.isRight ? props.navigationNextRef : props.navigationPrevRef}
      className={`${
        !props.isDisabled
          ? "bg-myPurple"
          : "bg-transparent border border-[#E8E8F6]"
      } w-[56px] h-[56px] flex justify-center items-center rounded-full`}
    >
      {props.isRight ? rightIcon : leftIcon}
    </button>
  );
}

function TuturCard(props) {
  return (
    <div>
      <img
        className="mb-[40px] aspect-[4/5]  w-full object-cover rounded-[80px]"
        src={props.CardImg}
      />
      <span className="text-[24px] text-myBlac">{props.FullName}</span>
      <div className="flex items-center">
        <img className="w-[34px] h-[34px]" src={props.Flag}></img>
        <span className="text-[18px]">{props.Conture}</span>
      </div>
    </div>
  );
}
