import { Link } from "react-router-dom";

const TeamCard = ({ item }) => {
    return (
        <div className="border-2 border-[#FF5E15] mr-6 p-6">
            <div className="w-full flex justify-center items-center">
                <div className="flex justify-center items-center border-4 border-[#FF5E15] w-36 h-36 rounded-full">
                    <img className="w-32 h-32 rounded-full" src={item?.image} alt="" />
                </div>
            </div>
            <h3 className="text-2xl text-center font-semibold pt-4 pb-1">{item?.name}</h3>
            <h3 className="text-lg text-center font-medium pb-3">{item?.position}</h3>
            <p className="text-center h-32">{item?.bio}</p>
            <div className="flex items-center justify-center gap-3">
                <Link to={'/'}>
                    <img src={item?.icon2} alt="" />
                </Link>
                <Link to={'/'}>
                    <img src={item?.icon3} alt="" />
                </Link>
                <Link to={'/'}>
                    <img src={item?.icon4} alt="" />
                </Link>
                <Link to={'/'}>
                    <img src={item?.icon5} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default TeamCard;