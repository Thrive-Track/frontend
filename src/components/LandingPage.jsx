import React from "react";
import Header from "./header/Header";
import HomePage from "./homepage/HomePage";
import Footer from "./footer/Footer";
import LeftSideBar from "../dashboard/sidebar/LeftSideBar";
// import MainDashBoard from "../dashboard/MainDashBoard";
import FaqHeader from "./accordion/FaqHeader";
import Faqs from "./accordion/Faqs";
import DownloadSection from "./DownloadSection";
import Support from "../dashboard/support/Support";

function Landingpage() {
  return (
    <>
      <Header />
      <HomePage />
      <FaqHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginLeft: "30px",
        }}
      >
        <div>
          <Faqs
            question="What is ThriveTrack?"
            answer="ThriveTrack is a Todo app that helps you realise your dail goals while blending efficiency with productivity as you work towards fulfiling your daily organizational tasks"
          />
          <Faqs
            question="How do I get Started?"
            answer="You can get started by simply signing up with your google account or facebook account."
          />
          <Faqs
            question="What else can it do apart from task management?"
            answer="ThriveTrack has an inspirational hub that blogs about how to be at the highest level of productivity"
          />
        </div>
        <div>
          <Faqs
            question="Who can use ThriveTrack?"
            answer="ThriveTrack is a tool that is useful for people and teams striving to achieve significant success"
          />
          <Faqs
            question="How much does it cost?"
            answer="It is absolutely free. Just sign up and login to enjoy maximum task management benefits and so much more"
          />
          <Faqs
            question="How can organizations use ThriveTrack?"
            answer="Organizations can use ThriveTrack by bieng in partnership with us. Please visit the partnership page to learn more"
          />
        </div>
      </div>
      <DownloadSection />
      <Footer />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          width: "1280px",
          height: "832",
        }}
      >
        <LeftSideBar />
        {/* <MainDashBoard /> */}
        <Support />
      </div>
    </>
  );
}

export default Landingpage;
