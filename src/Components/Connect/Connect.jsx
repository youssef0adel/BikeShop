import "../Connect/Connect.css";
const Connect = () => {
  return (
    <>
      <section className="Connect py-5">
        <div className="Connect-inner">
          <div className="contain container bg-second  rounded-5">
            <div className="Connect-caption ">
                <h1 className="text-white">
                Ride. Learn. <span className="text-main h1">Connect.</span>
                </h1>
                <p className="text-secondary fw-light lh-lg">
                At Velocity Cycles, we take pride in delivering <br /> top notch
                services to keep your bike in peak condition
                </p>
                <ul className="justify-content-between flex-wrap p-0 w-75 py-3">
                                    <li className=" mb-3 w-50">
                                        <div className="list d-flex justify-content-between ">
                                            <span className="h4 "><span className="border border-3 rounded-circle text-main px-1"><i className="fa-solid fa-check "> </i></span> Free test rides</span>
                                        </div>
                                    </li>
                                    <li className=" mb-3">
                                        <div className="list d-flex justify-content-between ">
                                            <span className="h4 "><span className="border border-3 rounded-circle text-main px-1"><i className="fa-solid fa-check "> </i></span> Custom builds</span>
                                        </div>
                                    </li>
                                    <li className=" mb-3">
                                        <div className="list d-flex justify-content-between ">
                                            <span className="h4 "><span className="border border-3 rounded-circle text-main px-1"><i className="fa-solid fa-check "> </i></span> Expert repairs</span>
                                        </div>
                                    </li>
                                    <li className=" mb-3">
                                        <div className="list d-flex justify-content-between ">
                                            <span className="h4 "><span className="border border-3 rounded-circle text-main px-1"><i className="fa-solid fa-check "> </i></span> Custom builds</span>
                                        </div>
                                    </li>
                                    <li className=" mb-3">
                                        <div className="list d-flex justify-content-between ">
                                            <span className="h4 "><span className="border border-3 rounded-circle text-main px-1"><i className="fa-solid fa-check "> </i></span> Gear upgrades</span>
                                        </div>
                                    </li>
                                    <li className=" mb-3">
                                        <div className="list d-flex justify-content-between ">
                                            <span className="h4 "><span className="border border-3 rounded-circle text-main px-1"><i className="fa-solid fa-check "> </i></span> Free test rides</span>
                                        </div>
                                    </li>

                </ul>
                <button className="mt-3">Order your Services <i className="fa-solid fa-right-long"></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;