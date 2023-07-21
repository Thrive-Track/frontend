import React from "react";
import "./Maincontent.css";

function Maincontent() {
  return (
    <>
      <div className="container">
        <div className="task text">
          <h1>Empowering Your Productivity Journey</h1>
          <p>
            Ready to take control of your tasks and thrive in your projects?
            <br />
            Wecome to ThriveTrack, the all-in-one task management website
            designed to help you unlock your full <br />
            potential and achieve your goals with ease.
          </p>
          <a href="#">
            <button className="get_started">Get Started</button>
          </a>
          <img src="Complete task.png" alt="picture" className="landing_page" />
        </div>
        <div className="task_container">
          <div className="form_sample">
            <img src="Frame 31.png" className="form_image" />
          </div>
          <div className="task_text text">
            <h2>Elevate Your Productivity</h2>
            <p>
              ThriveTrack is your ultimate productivity companion. <br />
              With it's powerful features and intuitive interface, you <br />
              can supercharge your efficiecny and stay focused on <br /> what
              truly matters. Say goodbye to overwhelm and hello <br />
              to a new level of productivity.
            </p>
          </div>
        </div>
        <div className="streamlined ">
          <div className="t_mgt">
            <img
              src="Customer support 24x7.png"
              className="customer_support_image"
            />
            <div className="text_mgt text">
              <h3>
                Streamlined Task <br />
                Management
              </h3>
              <p>
                Create, edit, and <br />
                categorize tasks <br />
                effortlessly, ensuring you <br />
                stay on top of your
                <br />
                responsibilities and
                <br /> deadlines.
              </p>
            </div>
          </div>

          <div className="cart ">
            <div className="cart_text text">
              <h3>
                Stay Ahead of <br />
                Deadlines
              </h3>
              <p>
                Never miss a beat with <br />
                our robust task
                <br /> management system. Set
                <br /> due dates, receive timely
                <br /> reminders, and track your <br />
                progress.
              </p>
            </div>
            <img src="Cart shopping.png" className="cart_shopping_image" />
          </div>
        </div>
        <div className="accessible text">
          <div className="access text">
            <img src="Wireframe.png" className="img_wireframe" />

            <div className="access_text text">
              <h3>
                Accessible Anytime,
                <br /> Anywhere
              </h3>
              <p>
                Keep up with your busy
                <br /> lifestyle. Acces s your
                <br /> tasks from any device,
                <br /> whether you are at your
                <br /> desk or on the go.
              </p>
            </div>
          </div>
          <div className="customize">
            <div className="custom_text text">
              <h3>
                Customize for Your
                <br /> Workflow
              </h3>
              <p>
                Customize categories,
                <br /> labels, and filters to align
                <br /> with your preferences. With
                <br />
                ThriveTrack’s flexibility, you
                <br /> can mold it to fit your
                <br /> working style and unlock <br />
                your true potential.
              </p>
            </div>
            <img src="Schedule.png" className="custom_img" />
          </div>
        </div>
        <div className="online_wrapper"></div>
        <div className="online">
          <img src="Online.png" className="online_img" />
          <div className="seamless text">
            <h3>
              Seamless
              <br />
              Collaboration
            </h3>
            <p>
              Enjoy seamless,
              <br /> collaboration, work
              <br /> effortlessly with team
              <br /> members, delegate
              <br /> tasks, share progress <br />
              updates, and foster a<br /> culture of success.
            </p>
          </div>
          <div className="visualize_text text">
            <h3>
              Visualize Your
              <br /> Success
            </h3>
            <p>
              Watch your
              <br /> accomplishments come <br />
              to life with dynamic
              <br /> visualizations and
              <br /> progress trackers, giving
              <br /> you a clear view of your
              <br />
              achievements.
            </p>
          </div>
          <img src="image 9.png" className="last_img" />
        </div>
        <div className="binder" />
        <div className="potential">
          <h1>Unleash Your Potential </h1>,
          <p>
            Ready to embark on your productivity journey? Join ThriveTrack
            today! Sign up
            <br />
            and experience the transformative power of efficient task
            management.
            <br />
            Elevate your workflow, amplify your success, and thrive like never
            before.
          </p>
          <a href="#">
            <button className="learn_btn">Learn More</button>
          </a>
        </div>
        <div className="f_a_quees">
          <h2>FAQS</h2>
        </div>
        <div className="questions">
          <div className="first_row row">
            <select>
              <option>What is ThriveTrack?</option>
            </select>
            <select>
              <option>How do I Get started?</option>
            </select>
            <select>
              <option>What is ThriveTrack?</option>
            </select>
          </div>
          <div className="second_row row">
            <select>
              <option>Who can use ThriveTrack?</option>
            </select>
            <select>
              <option>How much does it cost?</option>
            </select>
            <select>
              <option>What is ThriveTrack?</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
export default Maincontent;
