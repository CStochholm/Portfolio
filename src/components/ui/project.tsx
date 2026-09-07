import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  github: string;
  demo: string;
  extraImages?: string[];
  reverse?: boolean;
}

function Project({
  image,
  title,
  description,
  details,
  technologies,
  extraImages,
  demo,
  github,
  reverse = false,
}: ProjectProps) {
  return (

    <Accordion type="single" collapsible className="w-full">

      <AccordionItem className="border-none" value="details">

        {/* Project */}
        <div className="p-6 bg-white flex flex-col">

          {/* Top row */}
          <div className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}>

            {/* Image */}
            <a href={demo} target="_blank" rel="noopener noreferrer" className="basis-1/2 flex justify-center overflow-hidden rounded-lg shadow-2xl">
              <img src={image} alt={title} className="w-full max-w-xl max-h-96 object-contain rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"/>
            </a>

            {/* Right side */}
            <div className={`basis-1/2 flex flex-col gap-4 ${reverse ? "md:items-end md:text-right" : ""}`}>

              <h3 className="text-3xl font-semibold">
                {title}
              </h3>

              <p className="text-muted-foreground">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-4">

                <a href={github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-black text-white hover:opacity-80 transition">
                  Github
                </a>

                <a href={demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded border hover:bg-gray-100 transition">
                  Demo
                </a>

                <AccordionTrigger className="px-4 py-2 rounded border hover:bg-gray-100 transition hover:no-underline">
                  Learn more
                </AccordionTrigger>

              </div>

            </div>

          </div>

          {/* Full-width accordion */}
          <AccordionContent>

            <div className="mt-6 pt-6 flex flex-col gap-6">

              <p>
                {details}
              </p>

              <div className="flex flex-wrap gap-3">

                {technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white border text-sm shadow-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {extraImages && extraImages.length > 0 && (

                <div className="flex flex-wrap gap-4">

                  {extraImages.map((img, index) => (

                    <img
                      key={index}
                      src={img}
                      alt={`${title} screenshot ${index + 1}`}
                      className="w-64 rounded-lg shadow-md"
                    />

                  ))}

                </div>

              )}

            </div>

          </AccordionContent>

        </div>

      </AccordionItem>

    </Accordion>
  );
}

export default Project;