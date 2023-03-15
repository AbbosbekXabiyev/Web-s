import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

function StudentSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 space-x-32 ">
            <IMG rasm={"/Student.png"}></IMG>
            <FlexTwo
              name={"Martin Watson"}
              Flag={"/flag.png"}
              Text={
                "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies."
              }
            ></FlexTwo>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 space-x-32 ">
            <IMG rasm={"/Student.png"}></IMG>
            <FlexTwo
              name={"Martin Watson"}
              Flag={"/flag.png"}
              Text={
                "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies."
              }
            ></FlexTwo>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 space-x-32 ">
            <IMG rasm={"/Student.png"}></IMG>
            <FlexTwo
              name={"Martin Watson"}
              Flag={"/flag.png"}
              Text={
                "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies."
              }
            ></FlexTwo>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 space-x-32 ">
            <IMG rasm={"/Student.png"}></IMG>
            <FlexTwo
              name={"Martin Watson"}
              Flag={"/flag.png"}
              Text={
                "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies."
              }
            ></FlexTwo>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 space-x-32 ">
            <IMG rasm={"/Student.png"}></IMG>
            <FlexTwo
              name={"Martin Watson"}
              Flag={"/flag.png"}
              Text={
                "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies."
              }
            ></FlexTwo>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default StudentSwiper;

function IMG(props) {
  return (
    <div>
      <img src={props.rasm}></img>
    </div>
  );
}

function FlexTwo(props) {
  return (
    <div className="mt-[107px] ">
      <span className="text-[32px] font-bold text-myBlack">{props.name}</span>
      <img className="w-[202px] h-[34px]mt-5" src={props.Flag}></img>
      <p className="text-[26px] font-[26px] mt-[50px] text-myBlack">
        {props.Text}
      </p>
    </div>
  );
}
