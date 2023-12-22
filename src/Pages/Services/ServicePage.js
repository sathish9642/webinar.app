import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

import "../../Components/Web.css";
import Image3 from "../../Images/download1.png";
import Image4 from "../../Images/download2.png";
import Image5 from "../../Images/download3.png";
import Image6 from "../../Images/download4.png";

import Idam from "./Idam";
import ManagedIT from "./ManagedIT";
import Staffaugmentation from "./Staffaugmentation";
import Applicationdevelopment from "./Applicationdevelopment";
import Training from "./Training";

function ServicePage() {
  const [activeTab, setActiveTab] = useState(1);
  const handleOnClickforTab = (tabId) => {
    setActiveTab(tabId);
  };
  

const [text, setText] = useState("");
const [fullText, setFullText] = useState((" We're here to help you !")
);
const [index, setIndex] = useState(0);
useEffect(() => {
  if (index < fullText.length) {
    if (index == fullText.length - 1) {
      setIndex(0);
      setText("");
    }
    setTimeout(() => {
      setText(text + fullText[index]);
      setIndex(index + 1);
    }, 200);
  }
}, [index]);



  return (
    <Fragment>
      <Navbar />

      <div>
        <div className="ani">
          <div className="van">
            <div className="vaan">
              <div className="van1">
                <p> Our Services</p>
                <span>
                  Our comprehensive suite of IAM services, including Managed IT,
                  Identity and Access Management,Cybersecurity Training, and
                  Staff Augmentation, empowers organizations to fortify their
                  security posture and excel in the digital age.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="tabwrapper">
          <button
            className="button"
            onClick={() => {
              handleOnClickforTab(1);
            }}
          >
            IDAM
          </button>
          <button
            className="button"
            onClick={() => {
              handleOnClickforTab(2);
            }}
          >
            ManagedIT
          </button>
          <button
            className="button"
            onClick={() => {
              handleOnClickforTab(3);
            }}
          >
            {" "}
            Application Developments
          </button>
          <button
            className="button"
            onClick={() => {
              handleOnClickforTab(4);
            }}
          >
            {" "}
            Staff Augmentation
          </button>
          <button
            className="button"
            onClick={() => {
              handleOnClickforTab(5);
            }}
          >
            Training
          </button>
        </div>

        {activeTab == 1 && <Idam />}
        {activeTab == 2 && <ManagedIT />}
        {activeTab == 3 && <Applicationdevelopment />}
        {activeTab == 4 && <Staffaugmentation />}
        {activeTab == 5 && <Training />}
      </div>
      {/*<NavLink to ='/IDAM'>idam</NavLink>*/}

      <div class="container6">
        <img src={Image6}></img>

        <p className="por">
          <h3>Our Portfolio</h3>At Askmeidentity, we offer a comprehensive suite
          of technology solutions designed to empower your organization in
          today's dynamic digital landscape. From cutting-edge Digital Workspace
          Solutions that enhance collaboration and productivity to Cloud and
          Internet Security Solutions that safeguard your data from evolving
          cyber threats, we've got you covered. Our System Integration expertise
          ensures that your operations run seamlessly, and our Consulting
          services provide strategic guidance to navigate the complex world of
          technology and security. Trust Askmeidentity as your partner in
          achieving efficiency, security, and success in the digital age.
        </p>
      </div>
      <div className="foot">
        <h2 className="talk">Talk to an Identity Expert</h2>
        <div className="talk1">{text}</div>
      </div>
    </Fragment>
  );
}

export default ServicePage;
