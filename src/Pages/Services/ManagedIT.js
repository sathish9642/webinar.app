import React from "react";

import Image2 from "../../Images/image3.png";
import Image3 from "../../Images/download1.png";
import Image4 from "../../Images/download2.png";
import Image5 from "../../Images/download3.png";
const ManagedIT = () => {
  return (
    <div>
      <div className="container6">
        <p className="idam">
          <h2>Managed IT Services</h2>
          Empower Your IT with Askmeidentity's Managed Services. Keep your IT
          infrastructure and applications stable, cost-effective, and
          future-ready with Askmeidentity. We're your go-to partner for remote
          monitoring, management, and help desk services, both on-premises and
          in the cloud. Elevate your IT with Askmeidentity and stay ahead in the
          digital age.
        </p>

        <img className="hei" src={Image2} height={250} width={500}></img>
      </div>

      <h2 className="why">Why Choose Askmeidentity for IT Managed Services</h2>

      <div className="Chai">
        <div className="sam2">
          <div className="nag4">
            <img src={Image3}></img>
          </div>
          <div className="nag5">
            <p className="cyb">Cybersecurity Expertise</p>
            <p className="rec">
              Protect your data and assets with our top-notch cybersecurity
              solutions.
            </p>
          </div>
        </div>

        <div className="sam2">
          <div className="nag4">
            <img src={Image4}></img>
          </div>
          <div className="nag5">
            <p className="cyb">Best Service Provider.</p>
            <p className="rec">
              Recognized as the best service provider in the industry.
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
            <p className="cyb">Strategic IT Planning</p>
            <p className="rec">
              Align your IT strategy with your business goals for growth and
              efficiency.
            </p>
          </div>
        </div>
      </div>

      <h1 className="ele">Elevate Your Business with Managed IT Services</h1>

      <div className="container5">
        <div className="aa1">
          <div className="pp1">
            <h3 className="pro">Proactive IT Management</h3>
            <p className="our">
              Our Managed IT Services provide proactive monitoring and
              maintenance, ensuring your IT infrastructure runs smoothly and
              minimizing downtime.
            </p>
          </div>

          <div className="pp2">
            <h3 className="pro">Cost-Effective Solutions</h3>
            <p className="our">
              Save on operational costs with our scalable solutions, allowing
              you to pay for only the services you need while avoiding hefty
              upfront investments.
            </p>
          </div>
          <div className="pp3">
            <h3 className="pro">24/7 Support</h3>
            <p className="our">
              Access round-the-clock IT support from our team of experts,
              guaranteeing timely resolution of issues and continuous business
              operation.
            </p>
          </div>
        </div>
        <div className="aa2">
          <div className="pp4">
            <h3 className="pro">Security and Compliance</h3>
            <p className="our">
              Protect your sensitive data with our robust security measures and
              ensure compliance with industry regulations and standards.
            </p>
          </div>
          <div class="pp5">
            <h3 className="pro">Strategic IT Planning</h3>
            <p className="our">
              Benefit from our strategic IT planning, aligning your technology
              with your business goals and staying ahead of industry trends.
            </p>
          </div>
          <div class="pp6">
            <h3 className="pro">Scalability</h3>
            <p className="our">
              Scale your IT resources up or down as your business evolves,
              ensuring flexibility and agility in a rapidly changing
              environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedIT;
