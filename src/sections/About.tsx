import html from "../assets/html.svg";
import react from "../assets/react.svg";
import SkillBadge from "../components/ui/skillbadge";

function About() {

    const skills = [
  {
    image: html,
    name: "HTML"
  },
  {
    image: react,
    name: "React"
  },
  {
    image: react,
    name: "TypeScript"
  },
  {
    image: html,
    name: "CSS"
  },
  {
    image: react,
    name: "Node.js"
  },
  {
    image: html,
    name: "Git"
  },
  {
    image: react,
    name: "Unity"
  },
  {
    image: html,
    name: "C#"
  },
  {
    image: react,
    name: "SQL"
  }
];

return (

      <section id="about" className="py-20">

        <h2 className="text-5xl md:text-6xl text-center mb-8">
        About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center mx-4 md:mx-10 gap-8">

            <div className="basis-1/2 p-4 md:p-9">
                <p className="max-w-xl text-base md:text-lg">
                Lorem ipsum dolor sit amet...
                </p>
            </div>

            <div 
                id="skills"
                className="
                    basis-1/2
                    grid
                    grid-cols-3
                    gap-4
                    justify-items-center
                "
            >

                {
                skills.map((skill) => (
                    <SkillBadge
                    key={skill.name}
                    image={skill.image}
                    name={skill.name}
                    />
                ))
                }

            </div>

        </div>

    </section>

);

}

export default About;