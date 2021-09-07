import React from "react";

function About() {
  return (
    <div className="container text-center" id="about">
        <h3  className="p-4 text-center fw-bold">
            How do We Use BlockChain to secure your Property ??
        </h3>
      <div className="row">
        <div className="col-sm-4">
          <lord-icon
            src="https://cdn.lordicon.com/anihkfxp.json"
            trigger="loop"
            colors="primary:#121331,secondary:#39c0ed"
            style={{ height: "150px", width: "150px" }}
          ></lord-icon>
          <h6>Frontend Developer</h6>
          <p>I build frontend UIs with React(NextJs), Vue.Js(NuxtJs) and WordPress.</p>
        </div>
        <div className="col-sm-4">
          <lord-icon
            src="https://cdn.lordicon.com/qhgmphtg.json"
            trigger="loop"
            colors="primary:#39c0ed,secondary:#000000"
            style={{ height: "150px", width: "150px" }}
          ></lord-icon>
           <h6>UI/UX Designer</h6>
          <p>I design beautiful and interactive designs using Figma.</p>
        
        </div>
        <div className="col-sm-4">
          <lord-icon
            src="https://cdn.lordicon.com/wrprwmwt.json"
            trigger="loop"
            colors="primary:#121331,secondary:#39c0ed"
            style={{ height: "150px", width: "150px" }}
          ></lord-icon>
           <h6>Backend Developer</h6>
          <p>I build scalable APIs using Node.js and Python(Django and Flask).I have experience in AWS too.</p>
        
        </div>
      </div>
      
    </div>
  );
}

export default About;
