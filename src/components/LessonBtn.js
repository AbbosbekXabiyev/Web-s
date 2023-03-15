function LessonBtn() {
  return (
    <div className=" flex gap-5 mt-[54px]  items-center justify-center">
      <input
        className="py-[15px] rounded-[73px] px-[35px] w-[410px] h-[64px] text-[#BOBOCO] bg-[#F8FAFE]"
        typeof="text"
        placeholder="Enter your email"
      ></input>
      <button className="w-[110px] h-[64px] rounded-[73px] bg-blue-700 py-[17px] px-[35x] font-bold text-[18px] text-white">
        send
      </button>
    </div>
  );
}

export default LessonBtn;
