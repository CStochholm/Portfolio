function Navbar() {
  return (
    <nav id="navbar" className="sticky top-0 z-50 justify-items-end">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>

        <li className="nav-item">
          <a href="#about">About</a>
        </li>

        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>

        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;