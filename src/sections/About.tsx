import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/javascript.svg";
import ts from "../assets/typescript.svg";
import react from "../assets/react.svg";
import vite from "../assets/vite.svg";
import tailwind from "../assets/tailwind.svg";
import postgresql from "../assets/postgresql.svg";
import nodejs from "../assets/nodejs.svg";
import mongodb from "../assets/mongodb.svg";
import git from "../assets/git.svg";

import SkillBadge from "../components/ui/Skillbadge";


function About() {

  return (

    <section id="about" className="py-20">

      {/* Section Title */}
      <h2 className="text-5xl md:text-6xl text-center mb-12">
        About
      </h2>

      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-6">


        {/* Portrait & Description (Left Side)*/}
        <div className="basis-1/2 flex flex-col justify-center items-center md:items-start">


          <img
            src={react}
            alt="Christian Stochholm"
            className="w-56 h-56 rounded-2xl object-cover shadow-lg mx-auto mb-5"
          />


          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            I am an engineering graduate specializing in game development,
            learning technology and interactive digital solutions.
            I enjoy creating digital experiences that combine creativity,
            technology and usability.
          </p>


          <p className="text-base md:text-lg leading-relaxed text-gray-600 mt-4">
            My experience ranges from React and full-stack web development
            to Unity-based games and interactive applications.
          </p>


        </div>



        {/* Skills (Right Side)*/}
        <div className="basis-1/2 flex items-center justify-center">

          <div className="flex gap-8 items-center">

            <div className="flex flex-col gap-8">
              <SkillBadge image={css} name="CSS" />
              <SkillBadge image={tailwind} name="Tailwind" />
              <SkillBadge image={mongodb} name="MongoDB" />
            </div>


            <div className="flex flex-col gap-8">
              <SkillBadge image={html} name="HTML" />
              <SkillBadge image={react} name="React" />
              <SkillBadge image={vite} name="Vite" />
              <SkillBadge image={git} name="Git" />
            </div>


            <div className="flex flex-col gap-8">
              <SkillBadge image={js} name="Javascript" />
              <SkillBadge image={ts} name="Typescript" />
              <SkillBadge image={nodejs} name="NodeJS" />
            </div>

          </div>
        </div>
        


      </div>


    </section>

  );

}


export default About;