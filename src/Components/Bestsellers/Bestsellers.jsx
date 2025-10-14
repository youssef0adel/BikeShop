import "../Bestsellers/Bestsellers.css"
import bike1 from "../../assets/bike-pr10-768x502.png"
import bike2 from "../../assets/bike-pr11-768x502.png"
import bike3 from "../../assets/bike-pr7-768x502.png"
import bike4 from "../../assets/bike-pr8-768x502.png"
import bike5 from "../../assets/bike-pr6-768x502.png"
import bike6 from "../../assets/bike-pr3-768x502 (1).png"
import bike7 from "../../assets/package-1.jpg"
import bike8 from "../../assets/package-2.jpg"

const Bestsellers=()=>{
    return(
        <>
        <section className="Bestsellers">
            <div className="text-center pt-5 text-white">
                <h1>Meet our <span className="text-main h1">Bestsellers</span></h1>
            </div>
            <div className="container py-5 text-center">
                <div className="row gy-5 py-5">
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
                <span className="moto-button overflow-hidden pb-5"><a className="h2" href="#"> <i className="moto-1 fa-solid fa-motorcycle"></i> <span className="bg-main rounded-circle p-2"><i className="moto-2 fa-solid fa-motorcycle"></i></span>  View all products</a></span>
                <div className="row gy-3 pt-5 ">
                    <div className="col-md-6">
                        <div className="item bg-dark overflow-hidden rounded-4 position-relative">
                            <img className="w-100" src={bike7} alt="" />
                            <div className="item-caption d-flex justify-content-between  w-75 rounded-4 p-4">
                                <div className="cap-1">
                                    <p className="">+120 bicycles</p>
                                    <h3 className="">Children bicycles</h3>
                                </div>
                                <div className="cap-2 p-3 rounded-3 d-flex align-items-center">
                                    <i className="fa-solid fa-right-long "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="item bg-dark overflow-hidden rounded-4 position-relative">
                            <img className="w-100" src={bike8} alt="" />
                            <div className="item-caption d-flex justify-content-between  w-75 rounded-4 p-4">
                                <div className="cap-1">
                                    <p className="">+120 bicycles</p>
                                    <h3 className="">Children bicycles</h3>
                                </div>
                                <div className="cap-2  p-3 rounded-3 d-flex align-items-center">
                                    <i className="fa-solid fa-right-long "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Bestsellers;