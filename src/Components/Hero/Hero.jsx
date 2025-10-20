import Tilt from "react-parallax-tilt";
import HomeImage from "../../assets/bike-1.png";
import HomeBack from "../../assets/hero-bg-nature.png";
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <section className="home overflow-hidden d-flex flex-column justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="row justify-content-center align-items-center text-center text-lg-start">
          
          <div className="col-lg-4">
            <div className="home-caption text-white">
              <h1>
                XTRA Bicycle is not just{" "}
                <span className="h1 text-main">a Regular Bicycle</span>
              </h1>
              <p className="text-secondary">
                A bicycle, also called a pedal cycle, bike or cycle, is a
                human-powered or motor-powered assisted.
              </p>
              <span className="h1 d-block">$ 1749</span>
              <button className="bg-main rounded-5 px-5 py-3 border-0 ">
                See full details
              </button>
            </div>
          </div>

          
          <div className="col-lg-8">
            <div className="home-image position-relative">
              <Tilt
                scale={1.05}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  zIndex: 2,
                }}
              >
                <img
                  className="w-100 position-relative z-2"
                  src={HomeImage}
                  alt="Bicycle"
                />
              </Tilt>

              <img
                className="homeBack position-absolute"
                src={HomeBack}
                alt="Background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
