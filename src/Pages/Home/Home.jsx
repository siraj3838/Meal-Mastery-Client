import AboutUs from "../../components/Shared/AboutUs";
import Banner from "../../components/Shared/Banner";
import DailyOffer from "../../components/Shared/DailyOffer";
import FoodMenu from "../../components/Shared/FoodMenu";
import OurTeam from "../../components/Shared/OurTeam";
import SuccessStories from "../../components/Shared/SuccessStories";
import PurchaseCoin from "../PurchaseCoin/PurchaseCoin";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <DailyOffer />
            <FoodMenu />
            <SuccessStories />
            <OurTeam />
            <PurchaseCoin />
        </div>
    );
};

export default Home;