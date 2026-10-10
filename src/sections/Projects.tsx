import Project from "../components/ui/project";

import intersportImage from "../assets/Intersport3.jpg";
import cardTrackerImage from "../assets/Intersport1.jpg";
import mvcImage from "../assets/Intersport1.jpg";

// Accordion screenshots
import intersportScreenshot1 from "../assets/Intersport1.jpg";
import intersportScreenshot2 from "../assets/Intersport2.jpg";





function Projects() {
  return (
    <section id="projects">

      <h2 className="text-5xl md:text-6xl text-center mb-12">
        Projects
      </h2>


      <div className="flex flex-col gap-16 mx-4 md:mx-10">


        {/* INTERSPORT */}
        <Project
          image={intersportImage}
          title="Intersport Campaign Games"
          description="Interactive web-based campaign games developed for Intersport."
          demo="https://example.com"
        >

          <p className="text-base md:text-lg leading-relaxed">
            I developed interactive campaign experiences for Intersport,
            combining web development and game mechanics to create engaging
            experiences for their customers.
          </p>


          <div className="flex flex-wrap gap-3">

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              JavaScript
            </span>

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Phaser
            </span>

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              HTML
            </span>

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              CSS
            </span>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <img
              src={intersportScreenshot1}
              alt="Intersport campaign screenshot"
              className="w-full rounded-lg"
            />

            <img
              src={intersportScreenshot2}
              alt="Intersport campaign screenshot"
              className="w-full rounded-lg"
            />

          </div>

        </Project>



        {/* CARD COLLECTION TRACKER */}
        <Project
          image={cardTrackerImage}
          title="Card Collection Tracker"
          description="A web application for managing and tracking card collections."
          github="https://github.com/yourusername/project"
          demo="https://example.com"
          reverse
        >

          <h4 className="text-xl font-semibold">
            Project overview
          </h4>

          <p className="text-base md:text-lg leading-relaxed">
            The Card Collection Tracker is built around managing,
            organizing and displaying a user's collection through a
            modern React interface.
          </p>


          <h4 className="text-xl font-semibold">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-3">

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              React
            </span>

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              TypeScript
            </span>

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              PostgreSQL
            </span>

          </div>


          {/* <img
            src={cardScreenshot1}
            alt="Card Collection Tracker interface"
            className="w-full max-w-3xl mx-auto rounded-lg"
          /> */}

        </Project>



        {/* MVC PROJECT */}
        <Project
          image={mvcImage}
          title="Instagram MVC Clone"
          description="A full-stack social media application built using MVC architecture."
          github="https://github.com/yourusername/project"
          demo="https://example.com"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Backend
              </h4>

              <p className="leading-relaxed">
                The application uses MVC architecture to separate the
                application's data, presentation and request handling.
              </p>
            </div>


            <div>
              <h4 className="text-xl font-semibold mb-3">
                Features
              </h4>

              <ul className="list-disc list-inside space-y-2">
                <li>User registration and login</li>
                <li>Password hashing</li>
                <li>User profiles</li>
                <li>Image posts</li>
                <li>Database-backed content</li>
              </ul>
            </div>

          </div>


          <div className="flex flex-wrap gap-3">

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              PHP
            </span>

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              MVC
            </span>

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Bootstrap
            </span>

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              SQL
            </span>

          </div>


          {/* <img
            src={mvcScreenshot1}
            alt="Instagram MVC application"
            className="w-full max-w-3xl mx-auto rounded-lg"
          /> */}

        </Project>


      </div>

    </section>
  );
}

export default Projects;