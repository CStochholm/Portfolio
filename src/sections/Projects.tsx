import Project from "../components/ui/project";
import project1 from "../assets/project1.png";


const projects = [
  {
    image: project1,
    title: "MixMania",
    description: "A cooperative medieval fantasy game.",
    details: `
      Built using Unity and C#.
      Features multiplayer mechanics,
      interactive systems and custom gameplay.
    `,
    extraImages: [
      project1,
      project1
    ],
    demoLink: "https://example.com",
    githubLink: "https://github.com/example"
  },

  {
    image: project1,
    title: "Project Two",
    description: "Description of project two.",
    details: "More information about this project.",
    demoLink: "https://example.com",
    githubLink: "https://github.com/example"
  },

  {
    image: project1,
    title: "Project Three",
    description: "Description of project three.",
    details: "More information about this project.",
    demoLink: "https://example.com",
    githubLink: "https://github.com/example"
  }
];


function Projects() {

return (

<section id="projects" className="py-20">


<h2 className="text-5xl md:text-6xl text-center mb-12">
Projects
</h2>


<div className="flex flex-col gap-16 mx-4 md:mx-10">


{
projects.map((project, index) => (

<Project
  key={project.title}
  {...project}
  reverse={index % 2 !== 0}
/>

))
}


</div>


</section>

);

}


export default Projects;