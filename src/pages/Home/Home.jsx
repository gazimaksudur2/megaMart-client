import BestSelling from "./BestSelling";
import CurrentOffers from "./CurrentOffers";
import HomeSlider from "./HomeSlider";


const Home = () => {
    return (
        <div>
            <HomeSlider/>
            <BestSelling/>
            <CurrentOffers/>
        </div>
    );
};

export default Home;