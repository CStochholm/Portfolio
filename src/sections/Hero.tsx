function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute w-96 h-96 rounded-full bg-gray-200 blur-3xl opacity-40 top-20 right-20"></div>

      <div className="max-w-6xl w-full flex flex-col items-center relative z-10">


        <div className="flex-1 text-left">

          <p className="text-lg tracking-wide text-gray-500 mb-4 fade-in">
            Hello, I'm
          </p>


          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 fade-in-delay-1">
            Christian
            <br />
            Stochholm
          </h1>


          <h2 className="text-2xl md:text-3xl font-semibold mb-6 fade-in-delay-2">
            Software Developer
          </h2>


          <p className="max-w-xl text-base md:text-lg text-gray-600 leading-relaxed mb-8 fade-in-delay-3">
            Engineering graduate specializing in interactive digital solutions,
            game development and modern web technologies. I enjoy building
            experiences that combine creativity, technology and usability.
          </p>


          <div className="flex gap-4 justify-center md:justify-start fade-in-delay-4">

            <a href="#projects" className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:-translate-y-1 transition duration-300">
              View Projects
            </a>

            <a href="#contact" className="px-6 py-3 rounded-lg border font-medium hover:bg-gray-100 hover:-translate-y-1 transition duration-300">
              Contact Me
            </a>

          </div>

        </div>



       


      </div>

    </section>
  );
}

export default Hero;