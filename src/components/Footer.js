function Footer() {
  return (
    <div className="grid grid-cols-5 bg-[#F8FAFE] mt-[160px] h-[352px] pt-[52px] rounded-[40px]">
      <One></One>
      <Two></Two>
    </div>
  );
}

export default Footer;

function One() {
  return (
    <div className=" ml-[69px]">
      <img src="/logo_header.png"></img>
      <p className="text-[12px] font-light text-myGray mt-[32px]">
        20 Osgood Rd, Milford, NH 03055, USA +1283871239190213021
      </p>
    </div>
  );
}

function Two() {
  return (
    <div className="ml-[105px]">
      <span className="text-[16px] font-[600] text-myBlack">Company</span>
      <p className="mt-[16px] text-[14px] font-light text-myGray">Careers</p>
      <p className="mt-[16px] text-[14px] font-light text-myGray">Teachers</p>
      <p className="mt-[16px] text-[14px] font-light text-myGray">Support</p>
      <p className="mt-[16px] text-[14px] font-light text-myGray">Support </p>
    </div>
  );
}
