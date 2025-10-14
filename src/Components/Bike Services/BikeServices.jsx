import img1 from "../../assets/mountain.png";
import img2 from "../../assets/helmet.png";
import img3 from "../../assets/crankset.png";
import "../Bike Services/BikeServices.css";
const BikeServices = () => {
  return (
    <>
      <section className="Bike-Services">
        <div className="container">
          <div className="Bike-Services-title text-center pt-5">
            <h1 className="text-white fw-bold">
              Our Popular <span className="h1 text-main ">Bike Services</span>
            </h1>
            <p className="text-secondary lh-lg">
              At Velocity Cycles, we take pride in delivering top notch
              <br />
              services to keep your bike in peak condition
            </p>
          </div>
          <div className="row py-5 mt-5 gy-5">
            <div className="col-md-4 mt-md-0 mb-5">
                <div className="Bike-Services-item position-relative p-3 bg-second rounded-5">
                    <div className="Bike-Services-img position-absolute ">
                        <img className="w-100" src={img1} alt="" />
                    </div>
                    <div className="Bike-Services-caption text-center pt-4">
                        <h3 className="text-white fw-bold">Tune-Up Packages</h3>
                        <p className="text-secondary lh-lg fw-light">Want a bike that fits your style and <br /> performance goals? We offer <br /> custom builds using high-quality <br /> components</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 middle mt-md-0 mb-5">
                <div className="Bike-Services-item position-relative p-3  rounded-5">
                    <div className="Bike-Services-img position-absolute ">
                        <img className="w-100" src={img2} alt="" />
                    </div>
                    <div className="Bike-Services-caption text-center pt-4">
                        <h3 className="text-white fw-bold">Checks & Setup</h3>
                        <p className="text-secondary lh-lg fw-light">Want a bike that fits your style and <br /> performance goals? We offer <br /> custom builds using high-quality <br /> components</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mt-md-0 mt-5">
                <div className="Bike-Services-item position-relative p-3 bg-second rounded-5">
                    <div className="Bike-Services-img position-absolute ">
                        <img className="w-100" src={img3} alt="" />
                    </div>
                    <div className="Bike-Services-caption text-center pt-4">
                        <h3 className="text-white fw-bold">Chain Cleaning</h3>
                        <p className="text-secondary lh-lg fw-light">Want a bike that fits your style and <br /> performance goals? We offer <br /> custom builds using high-quality <br /> components</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="button text-center py-5">
            <button>Order your Services <i className="fa-solid fa-right-long"></i></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BikeServices;
