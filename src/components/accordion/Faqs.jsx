import React, { useState, useRef } from "react";
import "./Faqs.css";

export default function Faqs(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);
  const [setRotate, setRotateState] = useState("faq_icon");

  function handleToggle() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(setActive === "active" ? "faq_icon" : "faq_icon rotate");
  }
  return (
    <>
      <div className="f_a_quees">
        <div className="accordion_card">
          <div className="first_row row">
            <button
              className={`keyboard_button ${setActive}`}
              onClick={handleToggle}
            >
              <h4 className="faq_question">{props.question}</h4>
              <img src="keyboard_arrow_down.png" className={`${setRotate}}`} />
            </button>
            <div
              ref={content}
              style={{ maxHeight: `${setHeight}` }}
              className="faq-content"
            >
              <div className="faq_answer">{props.answer}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
