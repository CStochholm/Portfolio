function Navbar() {

  return (

    <nav id="navbar" className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-xl">

      <div className="flex justify-end px-4 md:px-10 py-4">

        <ul className="flex gap-4 md:gap-8 text-sm md:text-base">

          <li>
            <a href="#home" className="hover:text-gray-500 transition">
              Home
            </a>
          </li>


          <li>
            <a href="#about" className="hover:text-gray-500 transition">
              About
            </a>
          </li>


          <li>
            <a href="#projects" className="hover:text-gray-500 transition">
              Projects
            </a>
          </li>


          <li>
            <a href="#contact" className="hover:text-gray-500 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>

  );

}

export default Navbar;