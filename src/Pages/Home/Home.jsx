import Banner from "../../components/Shared/Banner";
import DailyOffer from "../../components/Shared/DailyOffer";
import FoodMenu from "../../components/Shared/FoodMenu";
import OurTeam from "../../components/Shared/OurTeam";

const Home = () => {
    return (
        <div>
            <Banner />
            <DailyOffer />
            <FoodMenu />
            <OurTeam />
        </div>
    );
};

export default Home;