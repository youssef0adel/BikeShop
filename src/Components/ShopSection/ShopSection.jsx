import "../Bestsellers/Bestsellers.css"
import bike1 from "../../assets/bike-pr10-768x502.png"
import bike2 from "../../assets/bike-pr11-768x502.png"
import bike3 from "../../assets/bike-pr7-768x502.png"
import bike4 from "../../assets/bike-pr8-768x502.png"
import bike5 from "../../assets/bike-pr6-768x502.png"
import bike6 from "../../assets/bike-pr3-768x502 (1).png"
import bike7 from "../../assets/bike-p3-768x502.png"
import bike8 from "../../assets/bike-pr9-768x502.png"
const ShopSection = () => {
  return (
    <>
      <section className="ShopSection d-flex justify-content-center py-5 mb-3">
        <div className="container mt-4">
            <div className="ShopSection-title">
                <h1 className="text-white py-5">Shop</h1>
            </div>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active p-3"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 d-flex justify-content-center position-relative">
                        <div className="Bestsellers-item text-white p-3 position-relative w-75">
                            <img className="w-100 position-relative" src={bike7} alt="" />
                            <h3>High Timber 24in</h3>
                            <p className="text-secondary">Specialized</p>
                            <div className="d-flex justify-content-around">
                                <div className="price">
                                    <span>$980</span> <span className="h3">$768</span>
                                </div>
                                <button className="border-0 rounded-5 p-2  bg-main btn-hover"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                <div className="actions d-flex justify-content-around bg-dark bg-opacity-75 position-absolute rounded-5 ">
                                    <a  className="p-2 rounded-circle" ><i className="fa-solid fa-heart"></i></a>
                                    <a  className="p-2 rounded-circle" ><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <a  className="p-2 rounded-circle"><i className="fa-solid fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center  position-relative">
                        <div className="Bestsellers-item text-white p-3 position-relative w-75">
                            <img className="w-100 position-relative" src={bike8} alt="" />
                            <h3>Parkwood Electric Bike</h3>
                            <p className="text-secondary">Orbea</p>
                            <div className="d-flex justify-content-around">
                                <div className="price">
                                    <span className="h3">$1268</span>
                                </div>
                                <button  className="border-0 rounded-5 p-2  bg-main btn-hover"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                <div className="actions d-flex justify-content-around bg-dark bg-opacity-75 position-absolute rounded-5 ">
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-heart"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle"><i className="fa-solid fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center position-relative">
                        <div className="Bestsellers-item text-white p-3 position-relative w-75">
                            <img className="w-100 position-relative" src={bike4} alt="" />
                            <h3>Parkwood Electric Bike</h3>
                            <p className="text-secondary">Cannondale</p>
                            <div className="d-flex justify-content-around">
                                <div className="price">
                                    <span className="h3">$988</span>
                                </div>
                                <button className="border-0 rounded-5 p-2  bg-main btn-hover"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                <div className="actions d-flex justify-content-around bg-dark bg-opacity-75 position-absolute rounded-5 ">
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-heart"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle"><i className="fa-solid fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center position-relative">
                        <div className="Bestsellers-item text-white p-3 position-relative w-75">
                            <img className="w-100 position-relative" src={bike5} alt="" />
                            <h3>Special Roar Bike CE</h3>
                            <p className="text-secondary">Cannondale</p>
                            <div className="d-flex justify-content-around">
                                <div className="price">
                                    <span className="h3">$675</span>
                                </div>
                                <button className="border-0 rounded-5 p-2  bg-main btn-hover"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                <div className="actions d-flex justify-content-around bg-dark bg-opacity-75 position-absolute rounded-5 ">
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-heart"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle"><i className="fa-solid fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center position-relative">
                        <div className="Bestsellers-item text-white p-3 position-relative w-75">
                            <img className="w-100 position-relative" src={bike6} alt="" />
                            <h3>Hybrid Electric Bike</h3>
                            <p className="text-secondary">Cannondale</p>
                            <div className="d-flex justify-content-around">
                                <div className="price">
                                    <span className="h3">$999</span>
                                </div>
                                <button className="border-0 rounded-5 p-2  bg-main btn-hover"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                <div className="actions d-flex justify-content-around bg-dark bg-opacity-75 position-absolute rounded-5 ">
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-heart"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle"><i className="fa-solid fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center position-relative">
                        <div className="Bestsellers-item text-white p-3 position-relative w-75">
                            <img className="w-100 position-relative" src={bike3} alt="" />
                            <h3>Hybrid Electric Bike</h3>
                            <p className="text-secondary">Cannondale</p>
                            <div className="d-flex justify-content-around">
                                <div className="price">
                                    <span className="h3">$999</span>
                                </div>
                                <button className="border-0 rounded-5 p-2  bg-main btn-hover"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                <div className="actions d-flex justify-content-around bg-dark bg-opacity-75 position-absolute rounded-5 ">
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-heart"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle"><i className="fa-solid fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
        <div
          className="tab-pane fade p-3"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 d-flex justify-content-center position-relative">
                        <div className="Bestsellers-item text-white p-3 position-relative w-75">
                            <img className="w-100 position-relative" src={bike1} alt="" />
                            <h3>Discover 2 Step-Thru</h3>
                            <p className="text-secondary">Specialized</p>
                            <div className="d-flex justify-content-around">
                                <div className="price">
                                    <span>$980</span> <span className="h3">$768</span>
                                </div>
                                <button className="border-0 rounded-5 p-2  bg-main btn-hover"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                <div className="actions d-flex justify-content-around bg-dark bg-opacity-75 position-absolute rounded-5 ">
                                    <a  className="p-2 rounded-circle" ><i className="fa-solid fa-heart"></i></a>
                                    <a  className="p-2 rounded-circle" ><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <a  className="p-2 rounded-circle"><i className="fa-solid fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center  position-relative">
                        <div className="Bestsellers-item text-white p-3 position-relative w-75">
                            <img className="w-100 position-relative" src={bike2} alt="" />
                            <h3>Folding Electric Bike</h3>
                            <p className="text-secondary">Orbea</p>
                            <div className="d-flex justify-content-around">
                                <div className="price">
                                    <span className="h3">$1268</span>
                                </div>
                                <button  className="border-0 rounded-5 p-2  bg-main btn-hover"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                <div className="actions d-flex justify-content-around bg-dark bg-opacity-75 position-absolute rounded-5 ">
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-heart"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle"><i className="fa-solid fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center position-relative">
                        <div className="Bestsellers-item text-white p-3 position-relative w-75">
                            <img className="w-100 position-relative" src={bike4} alt="" />
                            <h3>Parkwood Electric Bike</h3>
                            <p className="text-secondary">Cannondale</p>
                            <div className="d-flex justify-content-around">
                                <div className="price">
                                    <span className="h3">$988</span>
                                </div>
                                <button className="border-0 rounded-5 p-2  bg-main btn-hover"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                <div className="actions d-flex justify-content-around bg-dark bg-opacity-75 position-absolute rounded-5 ">
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-heart"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle"><i className="fa-solid fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center position-relative">
                        <div className="Bestsellers-item text-white p-3 position-relative w-75">
                            <img className="w-100 position-relative" src={bike5} alt="" />
                            <h3>Special Roar Bike CE</h3>
                            <p className="text-secondary">Cannondale</p>
                            <div className="d-flex justify-content-around">
                                <div className="price">
                                    <span className="h3">$675</span>
                                </div>
                                <button className="border-0 rounded-5 p-2  bg-main btn-hover"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                <div className="actions d-flex justify-content-around bg-dark bg-opacity-75 position-absolute rounded-5 ">
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-heart"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle" ><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <a to={"/"} className="p-2 rounded-circle"><i className="fa-solid fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
          </div>
        </div>
        
      </div>

      <ul className="nav nav-tabs justify-content-center border-0 py-5" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active text-main"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            1
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link text-main"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            2
          </button>
        </li>
        
      </ul>
    </div>
      </section>
    </>
  );
};

export default ShopSection;
