import "../ContactForm/ContactForm.css";
const ContactForm = () => {
  return (
    <>
      <section className="ContactForm py-5">
        <div className="container">
          <div className="row  bg-second rounded-4 gy-3">
            <div className="col-md-4">
              <div className="inner rounded-3 overflow-hidden">
                <div style={{ width: "100%", height: "600px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894758.994066307!2d31.49180303464487!3d28.83432478325664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459809c6078ad8f%3A0x55cbaaf346a60b54!2z2YXYrdin2YHYuNipINio2YbZiiDYs9mI2YrZgQ!5e0!3m2!1sar!2seg!4v1760284724488!5m2!1sar!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner p-5">
                <ul>
                  <li className="mb-3">
                    <div className="li-item d-flex align-items-center">
                      <div className="icon bg-main p-3 rounded-circle">
                        <i className="fa-solid fa-location-dot text-white"></i>
                      </div>
                      <div className="caption ms-2">
                        <h4>Adress</h4>
                        <p className="text-secondary">Egypt , BeniSuief</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="li-item d-flex align-items-center">
                      <div className="icon bg-main p-3 rounded-circle">
                        <i className="fa-solid fa-phone text-white"></i>
                      </div>
                      <div className="caption ms-2">
                        <h4>Phone</h4>
                        <p className="text-secondary">+021277840267</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="li-item d-flex align-items-center">
                      <div className="icon bg-main p-3 rounded-circle">
                        <i className="fa-brands fa-facebook text-white"></i>
                      </div>
                      <div className="caption ms-2">
                        <h4>Facebook</h4>
                        <p className="text-secondary">@YoussefAdel</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="li-item d-flex align-items-center">
                      <div className="icon bg-main p-3 rounded-circle">
                        <i className="fa-solid fa-envelope text-white"></i>
                      </div>
                      <div className="caption ms-2">
                        <h4>Support</h4>
                        <p className="text-secondary">youssefad888@gmail.com</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
                <div className="inner p-5">
                    <h2 className="text-white fw-bold">Contact <span className="text-main h2 fw-bold">Us</span></h2>
                    <form>
                        <div className="d-flex flex-column mb-4">
                        <label  className="text-white" htmlFor="name">Your Name (*)</label>
                        <input name="name" required className="bg-second text-white rounded-5 border-0 p-2" type="text" id="name" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                        <label className="text-white" htmlFor="email">Your Email (*)</label>
                        <input name="email" required className="bg-second text-white rounded-5 border-0 p-2" type="email" id="email" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="text-white" htmlFor="phone">Phone</label>
                        <input name="phone" className="bg-second text-white rounded-5 border-0 p-2" type="tel" id="phone" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="text-white" htmlFor="massege">Your Message</label>
                        <textarea className="bg-second text-white rounded-5 border-0 p-5" name="massege" id="massege"></textarea>
                        </div>
                        <button className="border-0 bg-main  px-3 py-2 rounded-5" type="submit">Supmit</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
