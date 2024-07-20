import React from "react";

function Aboutme() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border" style={{ color: "#244c5e" }}>
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
            Hey there! I'm Eric Snider, a 36-year-old in the midst of an
            exciting career transition from heating and cooling to the dynamic
            world of web development. My journey into coding was sparked by a
            passion for technology and a drive to create innovative digital
            solutions. Beyond coding, my greatest joys revolve around spending
            quality time with my family. Whether we're exploring new places
            together or simply enjoying a quiet evening at home, their love and
            support are the foundation of everything I do. When I'm not coding
            or with my family, you can often find me at the gym, where I enjoy
            weightlifting as a way to stay fit and focused. Another passion of
            mine is snowboarding—there's nothing quite like carving through
            fresh powder and taking in the stunning mountain views. As a proud
            member of the Chiefs Kingdom, I'm passionate about football and love
            cheering on my team during the season. Being part of such a
            dedicated community adds an extra layer of excitement to my
            weekends. Transitioning careers has been an invigorating challenge,
            blending my problem-solving skills with creativity in new ways. I'm
            eager to bring my enthusiasm for learning and growth to the field of
            web development, creating user-friendly experiences that make a
            difference. Let's connect and share stories about tech, sports, or
            anything that sparks our curiosity!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;