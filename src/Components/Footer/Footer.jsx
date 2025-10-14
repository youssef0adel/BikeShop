import "../Footer/Footer.css";
import footerimg1 from "../../assets/post1-1-150x150.jpg";
import footerimg2 from "../../assets/post2-1-150x150.jpg";
import paymentimg from "../../assets/Payment.png";
const Fotter = () => {
  return (
    <>
      <footer>
        <div className="footer-contact">
          <div className="container bg-second rounded-top-5 p-5">
            <div className="row gy-4">
              <div className="col-md-4 text-center d-flex flex-column align-items-center p-3">
                <h4 className="text-main">Pre-sale Questions</h4>
                <h3 className="text-white">youssefad888@gmail.com</h3>
              </div>
              <div className="col-md-4 text-center d-flex flex-column align-items-center p-3">
                <h4 className="text-main">Call Us</h4>
                <h3 className="text-white">+02 1277840267</h3>
              </div>
              <div className="col-md-4 text-center d-flex flex-column align-items-center p-3">
                <h4 className="text-main">Our Location</h4>
                <h3 className="text-white">BeniSuief - Egypt</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="footer pt-5">
          <div className="container p-5">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-item ">
                  <h3 className="text-main  mb-3 text-center text-md-start">
                    Office
                  </h3>
                  <ul className="list-unstyled">
                    <li className="mb-5  text-md-start text-center">
                      <span className="p-2 rounded-circle bg-white me-2">
                        <i className="fa-solid fa-phone text-main"></i>
                      </span>
                      <span className="text-white h6"> +021277840267</span>
                    </li>
                    <li className="mb-5 text-md-start text-center">
                      <span className="p-2 rounded-circle bg-white me-2">
                        <i className="fa-solid fa-envelope text-main"></i>
                      </span>
                      <span className="text-white h6">
                        {""}
                        Youssefadel@x-
                      </span>
                    </li>
                    <li className="mb-5 text-md-start text-center">
                      <span className="p-2 rounded-circle bg-white me-2">
                        <i className="fa-brands fa-twitter text-main"></i>
                      </span>
                      <span className="text-white h6"> @xtr_bikeshop</span>
                    </li>
                    <li className="mb-5 text-md-start text-center">
                      <span className="p-2 rounded-circle bg-white me-2">
                        <i className="fa-solid fa-building text-main"></i>
                      </span>
                      <span className="text-white h6">+1(800)3339988</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-item ">
                  <h3 className="text-main  mb-3 text-center text-md-start">
                    News
                  </h3>
                  <ul className="list-unstyled blog">
                    <li className="mb-5 text-md-start text-center d-flex">
                      <div>
                        <img
                          className="w-75 rounded-4"
                          src={footerimg1}
                          alt=""
                        />
                      </div>
                      <div className="caption ">
                        <h5>Top 7 Must have Accessories for...</h5>
                        <div className="text-secondary">
                          <span>
                            {" "}
                            <i className="fa-regular fa-clock"></i> 10 June 2024
                          </span>
                          <span>
                            <i className="fa-regular fa-eye"></i> 16
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="mb-5  text-md-start text-center d-flex">
                      <div>
                        <img
                          className="w-75 rounded-4"
                          src={footerimg2}
                          alt=""
                        />
                      </div>
                      <div className="caption ">
                        <h5>How to Choose the Perfect Bike for Your...</h5>
                        <div className="text-secondary">
                          <span>
                            {" "}
                            <i className="fa-regular fa-clock"></i> 10 June 2024
                          </span>
                          <span>
                            <i className="fa-regular fa-eye"></i> 16
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-item ">
                  <h3 className="text-main  mb-3 text-center text-md-start">
                    Shortcuts
                  </h3>
                  <ul className="list-unstyled d-flex flex-wrap links justify-content-center align-items-center">
                    <li className="mb-2 w-50 text-md-start text-center  fw-light">
                      <i className="fa-solid fa-right-from-bracket"> </i> Home
                    </li>
                    <li className="mb-2 w-50 text-md-start text-center  fw-light">
                      <i className="fa-solid fa-right-from-bracket"> </i> Maps
                    </li>
                    <li className="mb-2 w-50 text-md-start text-center  fw-light">
                      <i className="fa-solid fa-right-from-bracket"> </i>{" "}
                      Careers
                    </li>
                    <li className="mb-2 w-50 text-md-start text-center  fw-light">
                      <i className="fa-solid fa-right-from-bracket"> </i> City
                      Store
                    </li>
                    <li className="mb-2 w-50 text-md-start text-center  fw-light">
                      <i className="fa-solid fa-right-from-bracket"> </i>{" "}
                      Employees
                    </li>
                    <li className="mb-2 w-50 text-md-start text-center  fw-light">
                      <i className="fa-solid fa-right-from-bracket"> </i> News
                    </li>
                    <li className="mb-2 w-50 text-md-start text-center  fw-light">
                      <i className="fa-solid fa-right-from-bracket"> </i> Teams
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-item">
                  <h3 className="text-main mb-3 text-center text-md-start">
                    Working Hours
                  </h3>
                  <p className="text-white fw-light lh-lg my-3">
                    Our support available to help you 24 hours a day, seven days
                    a week.
                  </p>
                  <div className="d-flex flex-column justify-content-center">
                    <span className="w-100 text-white mb-3">
                      Monday to Friday <span className="text-main">------</span> 8AM - 4PM
                    </span>
                    <span className="w-100 text-white mb-3">
                      Saturday <span className="text-main">-----------</span> 8AM - 1PM
                    </span>
                    <span className="w-100 text-white mb-3">
                      Sunday <span className="text-main">---------------</span> Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment bg-second ">
            <div className=" container d-block  d-md-flex justify-content-between align-items-center p-3">
              <div className="CopyRights">
                <h6 className="text-secondary mb-0">
                  Copyright © 2025{" "}
                  <span className="text-main">Youssef Adel</span>. All Rights
                  Reserved.
                </h6>
              </div>
              <div className="payment-img">
                <img src={paymentimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
