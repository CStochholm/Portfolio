import { useState } from "react";


interface ProjectProps {
  image: string;
  title: string;
  description: string;
  details: string;
  extraImages?: string[];
  demoLink: string;
  githubLink: string;
  reverse?: boolean;  
}


function Project({
 image,
 title,
 description,
 details,
 extraImages,
 demoLink,
 githubLink,
 reverse = false
}: ProjectProps) {


  const [open, setOpen] = useState(false);


  return (

    <div className="flex flex-col gap-6">


      <div
        className={`
        flex flex-col md:flex-row items-center gap-8
        ${reverse ? "md:flex-row-reverse" : ""}
        `}
      >


        {/* Clickable demo image */}
        <a 
          href={demoLink}
          target="_blank"
          className="basis-1/2"
        >

          <img
            src={image}
            alt={title}
            className="
              rounded-lg
              transition-transform
              duration-300
              hover:scale-105
            "
          />

        </a>



        <div className="basis-1/2 flex flex-col gap-4">


          <h3 className="text-3xl">
            {title}
          </h3>


          <p>
            {description}
          </p>


          <div className="flex gap-4">


            <a
              href={githubLink}
              className="px-4 py-2 bg-black text-white rounded"
            >
              Github
            </a>


            <a
              href={demoLink}
              className="px-4 py-2 border rounded"
            >
              Demo
            </a>


            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-2 border rounded"
            >
              {open ? "Close" : "Learn more"}
            </button>


          </div>


        </div>

      </div>



      {/* Accordion */}
      {open && (

        <div className="p-6 rounded-lg bg-gray-100">

          <p>
            {details}
          </p>


          {extraImages && (

            <div className="flex flex-wrap gap-4 mt-6">

              {extraImages.map((img,index)=>(
                <img
                  key={index}
                  src={img}
                  className="w-64 rounded"
                />
              ))}

            </div>

          )}

        </div>

      )}


    </div>

  );
}


export default Project;