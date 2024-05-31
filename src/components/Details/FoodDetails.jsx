import { useParams } from "react-router-dom";
import useFood from "../../Hook/useFood";
import { useEffect, useState } from "react";
import banner from '../../assets/details-cover.jpg';
import Rating from "react-rating";


const FoodDetails = () => {
    const { title } = useParams();
    const [foods] = useFood();
    const [food, setFood] = useState({});
    useEffect(() => {
        const findFood = foods?.find(item => item.title == title)
        setFood(findFood)
    }, [foods, title])
    // console.log(food);
    return (
        <div className="">
            <div className="hero h-[300px] lg:h-[400px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h2 className="text-3xl lg:text-6xl">{food?.title}</h2>
                    </div>
                </div>
            </div>
            <div className="px-10 md:px-[100px] lg:px-[420px] lg:py-16 py-8">
                <div className='flex lg:flex-row flex-col items-center gap-5 md:gap-10 border-b-2 pb-8 text-center lg:text-left'>
                    <div className="flex-1 w-full">
                        <img className="w-full" src={food?.img} alt="" />
                    </div>
                    <div className="flex-1 w-full">
                        <h3 className="text-3xl md:text-5xl font-semibold mb-3">{food?.title}</h3>
                        <h3 className="text-2xl md:text-3xl text-[#FF5E15] font-extrabold mb-4">${food?.price}</h3>
                        <p className="text-[#FF5E15]">
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
                                initialRating={food?.rating}
                                readonly
                            />
                        </p>
                        <p className="md:text-lg font-medium my-7">{food?.details}</p>
                        <div>
                            <button className="bg-[#FF5E15] text-white py-3 px-7 rounded hover:bg-[#ff3815] hover:scale-110 duration-600 transition-all font-bold">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="pt-8 text-lg font-medium">
                    <p>{food?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;