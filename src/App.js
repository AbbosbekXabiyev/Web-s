import CenterChildren from "./components/CenterChildren";
import Common from "./components/Common";
import CommonGrid from "./components/CommonGrid";
import Footer from "./components/Footer";
import GridOne from "./components/GridOne";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Lesson from "./components/Lesson";
import LessonBtn from "./components/LessonBtn";
import MyAccordion from "./components/MyAccordion";
import Question from "./components/Question";
import Student from "./components/Student";
import StudentSwiper from "./components/StudentSwiper";
import TeachersSection from "./components/TeachersSection";
import ValueSection from "./components/ValueSection";

function App() {
  return (
    <CenterChildren>
      <div className=" font-axiforma bg-[#F7E0DA]  pt-[40px] px-[68px]  mt-[32px] rounded-[40px]">
        <Header />
        <Hero />
      </div>
      <div>
        <ValueSection />
        <GridOne />
      </div>
      <TeachersSection />
      <div>
        <Student></Student>
        <StudentSwiper></StudentSwiper>
      </div>
      <div>
        <Question></Question>
        <div className="grid grid-cols-2 my-32 gap-10">
          <MyAccordion
            title={"How can I know my level of knowledge?"}
            body={
              "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
            }
          ></MyAccordion>
          <MyAccordion
            title={"How can I know my level of knowledge?"}
            body={
              "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
            }
          ></MyAccordion>
          <MyAccordion
            title={"How can I know my level of knowledge?"}
            body={
              "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
            }
          ></MyAccordion>
        </div>
      </div>
      <div>
        <Lesson></Lesson>
        <LessonBtn></LessonBtn>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </CenterChildren>
  );
}

export default App;
