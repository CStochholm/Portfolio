import type { ReactNode } from "react";
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
  github?: string;
  demo?: string;
  reverse?: boolean;
  children?: ReactNode;
}

function Project({
  image,
  title,
  description,
  github,
  demo,
  reverse = false,
  children,
}: ProjectProps) {
  return (
    <Accordion className="rounded-xl p-6 transition shadow-md">

      <AccordionItem value="details" className="border-none">

        {/* Main project content */}
        <div className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}>

          {/* Project image */}
          <div className="basis-1/2 flex justify-center">

            {demo ? (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full max-w-xl max-h-96 object-contain rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
              </a>
            ) : (
              <img
                src={image}
                alt={title}
                className="w-full max-w-xl max-h-96 object-contain rounded-lg"
              />
            )}

          </div>


          {/* Project information */}
          <div className={`basis-1/2 flex flex-col gap-4 ${reverse ? "md:items-end md:text-right" : ""}`}>

            <h3 className="text-3xl">
              {title}
            </h3>

            <p>
              {description}
            </p>


            {/* Buttons */}
            <div className={`flex flex-wrap items-center gap-4 ${reverse ? "md:justify-end" : ""}`}>

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  Github
                </a>
              )}

              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border rounded hover:bg-gray-100 transition"
                >
                  Demo
                </a>
              )}

              {children && (
                <AccordionTrigger className="px-4 py-2 border rounded hover:bg-gray-100 transition hover:no-underline">
                  Learn more
                </AccordionTrigger>
              )}

            </div>

          </div>

        </div>


        {/* Custom project content */}
        {children && (
          <AccordionContent>
            <div className="mt-6 pt-6 border-t flex flex-col gap-6">
              {children}
            </div>
          </AccordionContent>
        )}

      </AccordionItem>

    </Accordion>
  );
}

export default Project;