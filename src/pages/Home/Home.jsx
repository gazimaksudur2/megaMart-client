import BestSelling from "./BestSelling";
import CurrentOffers from "./CurrentOffers";
import FlashSale from "./FlashSale/FlashSale";
import HomeSlider from "./HomeSlider";


const Home = () => {
    return (
        <div>
            <HomeSlider/>
            <FlashSale/>
            <BestSelling/>
            <CurrentOffers/>
        </div>
    );
};

export default Home;