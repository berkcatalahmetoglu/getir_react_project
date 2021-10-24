import Header from "components/Header";
import Campaigns from "components/Campaigns";
import Cards from "components/Cards";
import Favorites from "components/Favorites";
import Categories from "components/Categories";
import Footer from "components/Footer";
import SliderSection from "components/SliderSection";
import MobileApp from "components/MobileApp";

function App() {
  return (
    <>
      <Header />
      <SliderSection/>
      <Campaigns />
      <Cards />
      <Favorites />
      <Categories />
      <Footer />
      <MobileApp />

    </>
  );
}

export default App;
