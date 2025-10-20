import Hero from "../Hero/Hero";
import About from "../About/About";
import Qoute from "../Qoute/Qoute";
import Reviews from "../Reviews/reviews";
import Bestsellers from "../Bestsellers/Bestsellers";
import Subscribe from "../Subscribe/Subscribe";
import Fotter from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Qoute/>
      <Bestsellers/>
      <Reviews/>
      <Subscribe/>
      <Fotter/>
    </>
  );
};

export default Home;