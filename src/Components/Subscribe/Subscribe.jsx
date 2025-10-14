import "../Subscribe/Subscribe.css"
const Subscribe=()=>{
    return(
        <>
        <section className="Subscribe py-5">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="caption text-center w-100 d-flex flex-column justify-content-center align-items-center">
                    <h1 className=" text-white">Get your own <span className="text-main h1">Special Bike</span></h1>
                    <p className="text-secondary h4">Subscribe to our newsletter to get new Bike Offers</p>
                    <div className="inputs d-flex bg-dark rounded-5 p-2   justify-content-center align-items-center">
                        <input className=" bg-dark border-0 rounded-5 p-2 me-2 text-white " placeholder="Enter Your Email.." type="email" />
                        <button type="submit" className="border-0 rounded-5 px-4 py-2 bg-main">JOIN NOW</button>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Subscribe;