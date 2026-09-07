import Project from "../components/ui/project";
import { webProjects } from "../data/projects";


function Projects() {

return (

<section id="projects" className="py-20">


    <h2 className="text-5xl md:text-6xl text-center mb-12">
    Projects
    </h2>


    <div className="flex flex-col gap-16 mx-4 md:mx-10">

            {webProjects.map((project, index) => (

            <Project
                key={index}
                {...project}
                reverse={index % 2 !== 0}
            />

            ))}

    </div>

</section>

);

}


export default Projects;