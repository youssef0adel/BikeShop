import Tilt from "react-parallax-tilt";
import "../Questions/Questions.css"
import img1 from "../../assets/service-faq-2.jpg"
const Questions=()=>{
    return(
        <>
        <section className="Questions py-5">
            <div className="container">
                <div className="row">
                    <div className="Questions-title py-5 text-center">
                        <h1 className="text-white">Pre Services <span className="text-main h1">Common Questions</span></h1>
                        <p className="lh-lg text-secondary h5">At Velocity Cycles, we take pride in delivering top notch <br />

services to keep your bike in peak condition</p>
                    </div>
                    <div className="col-md-6">
                        <div className="Questions-img ">
                            <Tilt
                scale={1}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                
              >
                <img
                  className="w-100 rounded-4 overflow-hidden"
                  src={img1}
                  alt="Bicycle"
                />
              </Tilt>
                        </div>
                    </div>
                    <div className="col-md-6 bg-second rounded-4 d-flex flex-column  justify-content-center  p-3">
                        <div className="common-Questions p-4">
                            <div className="s-1   p-3 border border-1 rounded-3">
                                <div tabindex="0" className="Questions-upper d-flex justify-content-between position-relative overflow-hidden align-items-center">
                                    <h6>What types of bikes do you sell?</h6>
                                <span><i className="fa-solid fa-down-left-and-up-right-to-center "></i></span>
                                </div>
                                <div className="Questions-inner py-5 mt-2">
                                    <p>We offer a wide range of bikes including road bikes, mountain bikes, hybrid bikes, electric bikes, and kids' bikes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="common-Questions p-4">
                            <div className="s-1   p-3 border border-1 rounded-3">
                                <div tabindex="0" className="Questions-upper d-flex justify-content-between position-relative overflow-hidden align-items-center">
                                    <h6>Do you provide bike repair services?</h6>
                                <span><i className="fa-solid fa-down-left-and-up-right-to-center "></i></span>
                                </div>
                                <div className="Questions-inner py-5 mt-2">
                                    <p>We offer a wide range of bikes including road bikes, mountain bikes, hybrid bikes, electric bikes, and kids' bikes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="common-Questions p-4">
                            <div className="s-1   p-3 border border-1 rounded-3">
                                <div tabindex="0" className="Questions-upper d-flex justify-content-between position-relative overflow-hidden align-items-center">
                                    <h6>How long does a standard tune-up take?</h6>
                                <span><i className="fa-solid fa-down-left-and-up-right-to-center "></i></span>
                                </div>
                                <div className="Questions-inner py-5 mt-2">
                                    <p>We offer a wide range of bikes including road bikes, mountain bikes, hybrid bikes, electric bikes, and kids' bikes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="common-Questions p-4">
                            <div className="s-1   p-3 border border-1 rounded-3">
                                <div tabindex="0" className="Questions-upper d-flex justify-content-between position-relative overflow-hidden align-items-center">
                                    <h6>What brands of bikes do you carry?</h6>
                                <span><i className="fa-solid fa-down-left-and-up-right-to-center "></i></span>
                                </div>
                                <div className="Questions-inner py-5 mt-2">
                                    <p>We offer a wide range of bikes including road bikes, mountain bikes, hybrid bikes, electric bikes, and kids' bikes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="common-Questions p-4">
                            <div className="s-1   p-3 border border-1 rounded-3">
                                <div tabindex="0" className="Questions-upper d-flex justify-content-between position-relative overflow-hidden align-items-center">
                                    <h6>Can I book a service appointment online?</h6>
                                <span><i className="fa-solid fa-down-left-and-up-right-to-center "></i></span>
                                </div>
                                <div className="Questions-inner py-5 mt-2">
                                    <p>We offer a wide range of bikes including road bikes, mountain bikes, hybrid bikes, electric bikes, and kids' bikes.</p>
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

export default Questions;
