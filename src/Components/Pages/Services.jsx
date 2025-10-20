import BikeServices from "../Bike Services/BikeServices"
import Connect from "../Connect/Connect";
import Qoute from "../Qoute/Qoute";
import Fotter from "../Footer/Footer";
import Questions from "../Questions/Questions";
const Services=()=>{
    return(
        <>
            <BikeServices/>
            <Connect/>
            <Questions/>
            <Qoute/>
            <Fotter/>
        </>
    )
}

export default Services;