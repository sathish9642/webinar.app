import React from "react";
import Image8 from "../../Images/image4.png";
import Image3 from "../../Images/tri1.png";
import Image4 from "../../Images/tri2.png";
import Image5 from "../../Images/tri3.png";
function Training() {
  return (
    <div>
      <div className="container6">
        <p className="idam">
          <h2>Training</h2>
          Elevate Your Expertise with Askmeidentity Identity and Access
          Management Training. Discover excellence in identity and access
          management with Askmeidentity, a premier training provider. Our
          comprehensive training programs cover industry-leading platforms such
          as Okta, Ping Identity, OneLogin, ForgeRock, SailPoint, and Saviynt,
          as well as essential web technologies and security courses. We are
          your trusted source for both individual and corporate training
          solutions. Join us on a journey of knowledge and skill enhancement,
          and unlock the potential of identity and access management in the
          ever-evolving cybersecurity landscape.
        </p>

        <img className="hei" src={Image8} height={250} width={500}></img>
      </div>

      <h2 className="why">Why Choose Askmeidentity for Training</h2>

      <div className="Chai">
        <div className="sam2">
          <div className="nag4">
            <img src={Image3}></img>
          </div>
          <div className="nag5">
            <p className="cyb">Value for Money.</p>
            <p className="rec">
              Get exceptional training at competitive prices, maximizing your
              investment.
            </p>
          </div>
        </div>

        <div className="sam2">
          <div className="nag4">
            <img src={Image4}></img>
          </div>
          <div className="nag5">
            <p className="cyb">Comprehensive Courses</p>
            <p className="rec">
              Access a wide range of comprehensive training courses.
            </p>
          </div>
        </div>
      </div>
      <div className="Chai2">
        <div className="sam2">
          <div className="nag4">
            <img src={Image5}></img>
          </div>
          <div className="nag5">
            <p className="cyb">Hands-On Practical Training</p>
            <p className="rec">
              Gain practical skills through hands-on training exercises.
            </p>
          </div>
        </div>
      </div>

      <h1 className="ele">
        Empower Your Team through Training and Development
      </h1>

      <div className="container5">
        <div className="aa1">
          <div className="pp1">
            <h3 className="pro">Skill Enhancement</h3>
            <p className="our">
              Our training programs are designed to enhance the skills of your
              workforce, keeping them up-to-date with the latest industry trends
              and technologies.
            </p>
          </div>

          <div className="pp2">
            <h3 className="pro">Customized Learning Paths</h3>
            <p className="our">
              We create tailored learning paths to address your organization's
              specific needs and goals, ensuring maximum impact.
            </p>
          </div>
          <div className="pp3">
            <h3 className="pro">Expert Instructors</h3>
            <p className="our">
              Learn from seasoned industry experts who bring real-world
              experience and insights to the training room.
            </p>
          </div>
        </div>
        <div className="aa2">
          <div className="pp4">
            <h3 className="pro">Flexible Training Options</h3>
            <p className="our">
              Choose from a variety of training formats, including in-person,
              virtual, and self-paced courses, to fit your team's schedule and
              preferences.
            </p>
          </div>
          <div class="pp5">
            <h3 className="pro">Certification Preparation</h3>
            <p className="our">
              Prepare your team for industry-recognized certifications,
              bolstering their credentials and increasing your organization's
              competitiveness.
            </p>
          </div>
          <div class="pp6">
            <h3 className="pro">Measurable Results</h3>
            <p className="our">
              Track progress and measure the impact of our training programs
              through comprehensive assessments and performance metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;
