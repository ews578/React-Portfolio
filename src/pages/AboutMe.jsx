import React from "react";

function Aboutme() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1
          id="about"
          className="section-title primary-border"
          style={{ color: "#244c5e" }}
        >
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img
              src="assets/profilePicture.png"
              style={{ width: "100%" }}
              alt="profile"
            />
          </div>
          <p>
            I am a dedicated junior web developer with a robust foundation in
            full stack web development, acquired through intensive training at
            KU Bootcamp. My passion for programming stems from a natural
            aptitude for problem-solving and a deep interest in troubleshooting
            technical challenges. Through hands-on projects and comprehensive
            coursework, I have sharpened my skills in both frontend and backend
            JavaScript development.<br></br>
            <br></br>I am enthusiastic about utilizing my programming abilities
            to craft efficient and intuitive web applications. I am eager to
            join a team where I can contribute my creativity and technical
            expertise while continuing to broaden my knowledge. I am
            particularly attracted to roles that offer opportunities to explore
            new technologies and methodologies, fostering continuous growth in
            my development career.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
