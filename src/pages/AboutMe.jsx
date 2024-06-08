import React from "react";

function Aboutme() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src="assets/profilePicture.png" style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          info here
          </p>
          <p>more info here</p>
          <p>even more info here</p>
          <p>holy moly even more info here</p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;