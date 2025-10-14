import ReviewImage from "../../assets/special-offer.png"
import User1 from "../../assets/t6.jpg"
import User2 from "../../assets/t4.jpg"
import Qouteimg from "../../assets/quote.png"
import "../Reviews/Reviews.css"
const Reviews = () => {
  const Carousel = () => {
    return (
      <div id="carouselExample" className="carousel slide">
                  <h1 className="text-white pb-4">What say <span className="text-main h1">Pro People</span></h1>

        <div className="carousel-inner position-relative">
          <div className="carousel-item active">
            <div className="user d-flex align-items-center">
              <div className="user-image p-2 bg-dark">
                <img className="w-100  rounded-circle" src={User1} alt="" />
              </div>
              <div className="user-name ms-4">
                <h5>3bdo sayed</h5>
                <h6 className="text-main">Bike Designer</h6>
              </div>
            </div>
            <div className="caption">
              <p className="h3 lh-lg">A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.</p>
                
            </div>
          </div>
          <div className="carousel-item ">
            <div className="user d-flex align-items-center">
              <div className="user-image p-2 bg-dark">
                <img className="w-100  rounded-circle" src={User2} alt="" />
              </div>
              <div className="user-name ms-4">
                <h5>Donia Ahmed</h5>
                <h6 className="text-main">Bike Designer</h6>
              </div>
            </div>
            <div className="caption">
              <p className="h3 lh-lg">A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.</p>

            </div>
          </div>
          <img className="quote-img w" src={Qouteimg} alt="" />
          
          
        </div>
        <button
          className="carousel-control-pr"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          
        </button>
        <button
          className="carousel-control-ne"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          
        </button>
      </div>
    );
  };
  return (
    <>
      <section className="Reviews py-5">
        <div className="container-fluid">
          
          <div className="row">
             
            <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
             
                <Carousel/>
            </div>
            <div className="col-md-6">
                <div className="inner">
                    <img className="w-100" src={ReviewImage} alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;