import React from "react";
import "./Support.css";
import componenta from "../../assets/dashboard_images/Componenta.png";
import componentb from "../../assets/dashboard_images/Componentb.png";
import componentc from "../../assets/dashboard_images/Componentc.png";
import encrypted from "../../assets/dashboard_images/encrypted.png";
import quiz from "../../assets/dashboard_images/quiz.png";
import communities from "../../assets/dashboard_images/communities.png";
import wifi from "../../assets/dashboard_images/wifi_protected_setup.png";
import livechat from "../../assets/dashboard_images/chat.png";

const supportList = [
  {
    id: 1,
    image: componenta,
    heading: "Getting Started",
    paragraph: "Start off your productivity journey on the right track",
  },
  {
    id: 2,
    image: componentb,
    heading: "Account Settings",
    paragraph: "Update and edit your account information",
  },
  {
    id: 3,
    image: componentc,
    heading: "Interface",
    paragraph: "Functions of buttons and our features",
  },
  {
    id: 4,
    image: encrypted,
    heading: "Trust and Safety",
    paragraph: "Learn how we keep your data safe",
  },

  {
    id: 5,
    image: quiz,
    heading: "FAQ",
    paragraph: "Got a question? Check here to see if it has been answered",
  },
  {
    id: 6,
    image: communities,
    heading: "Community",
    paragraph: "Connect with other users through our Socials",
  },
  {
    id: 7,
    image: wifi,
    heading: "Setup",
    paragraph: "Learn how it all works",
  },
  {
    id: 8,
    image: livechat,
    heading: "Live Chat",
    paragraph: "Talk to an Agent",
  },
];

function SupportItems() {
  return (
    <>
      {supportList.map((support) => {
        return (
          <div className="support_items_container">
            <div className="support_items_wrapper" key={support.id}>
              <div className="support_items">
                <img src={support.image} />
                <h5>{support.heading}</h5>
                <p>{support.paragraph}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default SupportItems;
