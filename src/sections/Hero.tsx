import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

function Hero() {
  return (
    <section id="home">

      <div className="hero">
        <img 
          src={reactLogo}
          className="framework"
          alt="React logo"
        />

        <img
          src={viteLogo}
          className="vite"
          alt="Vite logo"
        />
      </div>

    </section>
  );
}

export default Hero;