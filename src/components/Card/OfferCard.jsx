import { Link } from "react-router-dom";

const OfferCard = ({item}) => {
    return (
        <div className="flex justify-center items-center gap-3 mr-4">
            <div className="flex-auto">
                <img className="w-[570px] h-[270px]" src={item?.icon1} alt="" />
            </div>
            <div className="">
                <Link to={`/recipeDetails/${item?.title}`}>
                    <h4>{item?.title}</h4>
                </Link>
                <p className="py-3">{item?.description}</p>
                <div className="flex items-center gap-3">
                    <img src={item?.icon2} alt="" />
                    <img src={item?.icon3} alt="" />
                    <img src={item?.icon4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OfferCard;