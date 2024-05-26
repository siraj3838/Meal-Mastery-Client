import { useEffect, useState } from "react";
import FoodCard from "../Card/FoodCard";

const FoodMenu = () => {
    const [foods, setFoods] = useState([]);
    
    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

   

    return (
        <div className="px-4 sm:px-6 md:px-8 py-16 xl:px-[200px] bg-slate-200">

            <div className="text-center sm:text-left text-4xl font-extrabold mb-8">
                <h2 className="text-[#FF5E15]">Our Team</h2>
                <h1 className="text-5xl mt-5">Meet Our Expert Chefs</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
                {
                    foods?.map((item, idx) => <FoodCard key={idx} item={item} />)
                }
            </div>
        </div>
    );
};

export default FoodMenu;
