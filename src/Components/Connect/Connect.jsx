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
                <button className="mt-3">Order your Services <i className="fa-solid fa-right-long"></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;