import { Link } from "react-router-dom";
import Rating from "react-rating";

const FoodCard = ({ item }) => {
    
    return (
        <div className="bg-white shadow rounded">
            <div className="w-full relative">
                <Link to={`/foodDetails/${item?.title}`}>
                    <img className="w-full rounded-tl rounded-tr" src={item?.img} alt="" />
                </Link>
                <div className="bg-[#FF5E15] py-3 w-2/5 text-center absolute -bottom-6 right-0">
                    <h5 className="text-white font-extrabold text-xl">{item?.category}</h5>
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-2xl text-center font-semibold pt-4 pb-1">{item?.title}</h3>
                <p className="text-[#FF5E15] text-center py-3">
                    <Rating
                        emptySymbol={<svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                        </svg>}
                        fullSymbol={<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>}
                        initialRating={item?.rating}
                        readonly
                    />
                </p>
                <h3 className="text-center text-2xl font-extrabold text-[#FF5E15] pb-3">${item?.price}</h3>
                <div className="flex justify-between items-center">
                    <div>
                        <button className="bg-[#FF5E15] text-white py-3 px-7 rounded hover:bg-[#ff3815] hover:scale-110 duration-600 transition-all font-bold">Add To Cart</button>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Link to={'/'}>
                            <img src={item?.icon1} alt="" />
                        </Link>
                        <Link to={'/'}>
                            <img src={item?.icon2} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;