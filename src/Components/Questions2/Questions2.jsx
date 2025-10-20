import "../Questions2/Questions2.css"
import img1 from "../../assets/faq.png"
const Questions2 = () => {
  return (
    <>
      <section className="Questions2 pb-5 mb-5">
        <div className="container position-relative">
          <div className="Questions2-title">
            <h1 className="text-white">
              Common <span className="h1 text-main">Questions</span>
            </h1>
            <p className="text-secondary lh-lg h5">
              Please read questions bellow and if you can not find <br />
              your answer please send us your question, we will <br />
              answer you as soon as possible.
            </p>
          </div>
          <h2 className="text-white h1 pt-5 pb-2">F.A.Qs</h2>
          <div className="row">
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
          <div className="Questions2-img">
            <img className="w-100" src={img1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions2;