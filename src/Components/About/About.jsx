import "../About/About.css";
import AboutImage from "../../assets/bike-3-1.png";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7">
              <div className="aboutImage">
                <img className="w-100" src={AboutImage} alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="aboutCaption text-center">
                <h1 className="text-white">
                  Bike Shop 23 XTRA Bicycle It's Not Just a Bike,{" "}
                  <span className="text-main">It’s a Revolution</span>
                </h1>
                <p className="text-secondary">
                  {" "}
                  a bycycle, also called a pedal cycle, bike or cycle, is a
                  human powered or motor-powered assisted, pedal-driven,
                  single-track vehicle, having two wheels attached to a frame,
                  one behind the other. A bicycle rider is called a cyclist, or
                  bicyclist.
                </p>
                <ul className="aboutCaption d-flex justify-content-between flex-wrap">
                  <li className="p-2">
                    <div className="list d-flex align-items-center">
                      <span className="icon-circle me-2">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span>Free rides</span>
                    </div>
                  </li>

                  <li className="p-2">
                    <div className="list d-flex align-items-center">
                      <span className="icon-circle me-2">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span>Custom builds</span>
                    </div>
                  </li>

                  <li className="p-2">
                    <div className="list d-flex align-items-center">
                      <span className="icon-circle me-2">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span>Expert repairs</span>
                    </div>
                  </li>

                  <li className="p-2">
                    <div className="list d-flex align-items-center">
                      <span className="icon-circle me-2">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span>Electric bulids</span>
                    </div>
                  </li>

                  <li className="p-2">
                    <div className="list d-flex align-items-center">
                      <span className="icon-circle me-2">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span>Gear upgrades</span>
                    </div>
                  </li>

                  <li className="p-2">
                    <div className="list d-flex align-items-center">
                      <span className="icon-circle me-2">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span>Electric bulids</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
