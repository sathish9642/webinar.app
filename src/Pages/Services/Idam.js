import React from "react";

import Image1 from "../../Images/image2.png";
import Image3 from "../../Images/idam1.png";
import Image4 from "../../Images/idam2.png";
import Image5 from "../../Images/download3.png";

const Idam = () => {
  return (
    <div>
      <div className="container6">
        <p className="idam">
          <h2>IDAM Solutions</h2>
          Stay ahead of the curve and secure your organization's digital future
          with our state-of-the-art IDAM solution. Elevate your security
          posture, streamline user access, and ensure compliance effortlessly.
          Contact us today to learn how we can empower your organization to
          thrive in a rapidly evolving digital landscape. Your security is our
          priority, and together, we can keep you one step ahead of the
          competition..
        </p>
        <img className="hei" src={Image1} height={250} width={500}></img>
      </div>

      <h2 className="why">Why Askmeidentity for IDAM</h2>

      <div className="Chai">
        <div className="sam2">
          <div className="nag4">
            <img src={Image3}></img>
          </div>
          <div className="nag5">
            <p className="cyb">Certified Consultants</p>
            <p className="rec">
              Our team of certified consultants with years of industry
              experience.
            </p>
          </div>
        </div>

        <div className="sam2">
          <div className="nag4">
            <img src={Image4}></img>
          </div>
          <div className="nag5">
            <p className="cyb">Customer Satisfaction</p>
            <p className="rec">
              Customer satisfaction is our top priority, driving our every
              action.
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
            <p className="cyb">On Time Delivery</p>
            <p className="rec">
              On-Time SLA based delivery of solutions makes us the top choice
              among our clients.
            </p>
          </div>
        </div>
      </div>

      <h1 className="ele">
        Overcoming Identity and Access Management Challenges
      </h1>

      <div className="container5">
        <div className="aa1">
          <div className="pp1">
            <h3 className="pro">Security Threats</h3>
            <p className="our">
              IDAM enhances security by controlling user access, reducing
              unauthorized access risks.
            </p>
          </div>

          <div className="pp2">
            <h3 className="pro">Password Management</h3>
            <p className="our">
              IDAM simplifies passwords via SSO and MFA, reducing password
              management overhead.
            </p>
          </div>
          <div className="pp3">
            <h3 className="pro">Access Control</h3>
            <p className="our">
              IDAM enforces access policies based on roles, bolstering control.
            </p>
          </div>
        </div>
        <div className="aa2">
          <div className="pp4">
            <h3 className="pro">User Experience</h3>
            <p className="our">
              IDAM balances security with user-friendly access.
            </p>
          </div>
          <div className="pp5">
            <h3 className="pro">Shadow IT</h3>
            <p className="our">
              IDAM manages and mitigates unauthorized application use.
            </p>
          </div>
          <div className="pp6">
            <h3 className="pro">Third-Party Access</h3>
            <p className="our">
              IDAM extends control to external partners, enhancing security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idam;
