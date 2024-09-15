import { ScrollRestoration } from "react-router-dom";
import BestSelling from "./BestSelling";
import CurrentOffers from "./CurrentOffers";
import FeaturedProducts from "./FeaturedProduct/FeaturedProducts";
import FlashSale from "./FlashSale/FlashSale";
import HomeSlider from "./HomeSlider";


const Home = () => {
    return (
        <div>
            <ScrollRestoration/>
            <HomeSlider/>
            <FlashSale/>
            <FeaturedProducts/>
            {/* <BestSelling/>
            <CurrentOffers/> */}
        </div>
    );
};

export default Home;