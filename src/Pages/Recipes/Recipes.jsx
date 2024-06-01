import { Link } from "react-router-dom";
import useRecipes from "../../Hook/useRecipes";
import banner from '../../assets/recipes-banner.jpg';
import emptyRecipe from '../../assets/empty-recipes.jpg';
import { FaChevronRight } from "react-icons/fa6";
import logo from '../../assets/logo.png';
import { FaRegHeart } from "react-icons/fa";
import { RiFolderSharedLine } from "react-icons/ri";
import '../../index.css';
import useRecipesAdmin from "../../Hook/useRecipesAdmin";
import { useEffect, useState } from "react";

const Recipes = () => {
    const [recipes] = useRecipes();
    const [recipesAdmin] = useRecipesAdmin();
    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        if (recipes) {
            setAllRecipes(recipes);
        }
    }, [recipes]);

    const handleAppetizers = () => {
        const appetizersRes = recipes?.filter(res => res.category === 'Appetizers');
        setAllRecipes(appetizersRes);
    };
    const handleSnacks = () => {
        const appetizersRes = recipes?.filter(res => res.category === 'Snacks');
        setAllRecipes(appetizersRes);
    };
    const handleVegetarian = () => {
        const appetizersRes = recipes?.filter(res => res.category === 'Vegetarian');
        setAllRecipes(appetizersRes);
    };
    const handleDessert = () => {
        const appetizersRes = recipes?.filter(res => res.category === 'Dessert');
        setAllRecipes(appetizersRes);
    };
    const handleVegan = () => {
        const appetizersRes = recipes?.filter(res => res.category === 'Vegan');
        setAllRecipes(appetizersRes);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="absolute lg:fixed md:top-[490px] top-[700px] left-[10%] overflow-hidden md:left-[10%] lg:top-16 z-30 lg:left-[67%] w-full">
                <div className="w-4/5 md:w-4/5 lg:w-1/5 lg:py-1">
                    <label className="input input-bordered input-warning flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search Recipe..." />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
            </div>
            <div className="hero h-[300px] lg:h-[400px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h2 className="text-3xl lg:text-6xl">A Healthy and Delicious Meal</h2>
                        <div className="flex justify-center items-center gap-2 mt-3">
                            <Link to={'/'}>
                                <div className="flex items-center gap-1 hover:text-[#FF5E15] hover:duration-500">
                                    <h3>Home</h3>
                                    <p className="text-xs"><FaChevronRight /></p>
                                </div>
                            </Link>
                            <div className="flex items-center gap-1 hover:text-[#FF5E15] hover:duration-500">
                                <h3>Recipes</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 md:px-[74px] lg:px-[380px] lg:py-16 py-8">
                <div className="flex flex-wrap justify-center items-center gap-5">
                    <button onClick={handleAppetizers} className="border py-3 px-12 text-lg font-medium hover:bg-[#000] hover:text-white hover:duration-700">Appetizers</button>
                    <button onClick={handleSnacks} className="border py-3 px-12 text-lg font-medium hover:bg-[#000] hover:text-white hover:duration-700">Snacks</button>
                    <button onClick={handleVegetarian} className="border py-3 px-12 text-lg font-medium hover:bg-[#000] hover:text-white hover:duration-700">Vegetarian</button>
                    <button onClick={handleDessert} className="border py-3 px-12 text-lg font-medium hover:bg-[#000] hover:text-white hover:duration-700">Dessert</button>
                    <button onClick={handleVegan} className="border py-3 px-12 text-lg font-medium hover:bg-[#000] hover:text-white hover:duration-700">Vegan</button>
                </div>
                <div className={`grid grid-cols-1 lg:grid-cols-4 gap-5 w-full mt-24 lg:mt-16`}>
                    <div className={`flex flex-col col-span-1 lg:col-span-3`}>
                        {
                            allRecipes.length ? allRecipes?.map(item => <div className="border p-5 relative mb-8 overflow-hidden" key={item?._id}>
                                <h4 className="flex items-center gap-1 text-2xl md:text-4xl font-extrabold">
                                    <span>{item?.recipeDetails.split(' ')[0]}</span>
                                    <span>{item?.recipeDetails.split(' ')[1]}</span>
                                    <span>{item?.recipeDetails.split(' ')[2] !== 'is' && 'a' && item?.recipeDetails.split(' ')[2]}</span>
                                    <span>{item?.recipeDetails.split(' ')[3] !== 'is' && 'a' ? item?.recipeDetails.split(' ')[3] : ''}</span>
                                </h4>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3 my-4">
                                        <img className="w-16" src={logo} alt="" />
                                        <p className="">Creating on {item?.createTime.split('T')[0]}</p>
                                    </div>
                                    <div className="flex items-center gap-6 text-xl">
                                        <div className="tooltip-container">
                                            <p className="icon hover:text-red-600 flex items-center gap-2"><span className="text-base">0</span> <FaRegHeart /></p>
                                            <div className="tooltip-text">Like Here</div>
                                        </div>
                                        <div className="tooltip-container">
                                            <p className="icon hover:text-green-600"><RiFolderSharedLine /></p>
                                            <div className="tooltip-text">Save Your Profile</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-3">{item?.recipeDetails.split('.').slice(0, 3)}</p>
                                <div>
                                    <img className="w-full" src={item?.recipeImage} alt="" />
                                </div>
                                <div className="mt-3">
                                    <iframe className="md:h-[400px] h-[200px]" width="100%" src={item?.youtubeLink} title="Our Recipes Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                <p className="mt-3">{item?.recipeDetails.split('.').slice(3,)}</p>
                                <div className="bg-[#FF5E15] py-3 w-1/5 text-center absolute top-0 right-0 hidden md:block">
                                    <h5 className="text-white font-extrabold text-xl">{item?.category}</h5>
                                </div>
                            </div>)
                                :
                                <div className="hero h-[300px] lg:h-[400px]" style={{ backgroundImage: `url(${emptyRecipe})` }}>
                                    <div className="hero-overlay bg-opacity-60"></div>
                                    <div className="hero-content text-center text-neutral-content">
                                        <div className="">
                                            <h2 className="text-2xl lg:text-4xl">This Category Have not Recipes</h2>
                                            <p className="mt-5">Please Add Some Recipes</p>
                                            <div className="flex justify-center items-center gap-2 mt-6">
                                                <Link to={'/addRecipes'}>
                                                    <button className="bg-[#FF5E15] text-white py-3 px-7 rounded hover:bg-[#ff3815] hover:scale-110 duration-600 transition-all">Add Recipes</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="col-span-1 lg:col-span-1 w-full">
                        <h3 className="text-3xl font-extrabold">Popular Recipes</h3>
                        <div className="flex flex-col justify-center gap-8 py-8">
                            {
                                recipesAdmin?.map((item, idx) => <div className="tooltip-container-two cursor-pointer" key={idx}>
                                    <div className="flex md:flex-row flex-col gap-3">
                                        <img className="lg:w-52 w-3/5 flex-1" src={item?.recipeImage} alt="" />
                                        <div className="flex-1">
                                            <h4 className="flex items-center gap-1 text-2xl font-extrabold title-text">
                                                <span>{item?.recipeDetails.split(' ')[0]}</span>
                                                <span>{item?.recipeDetails.split(' ')[1]}</span>
                                                <span>{item?.recipeDetails.split(' ')[2] !== 'is' && 'a' && item?.recipeDetails.split(' ')[2]}</span>
                                                <span>{item?.recipeDetails.split(' ')[3] !== 'is' && 'a' ? item?.recipeDetails.split(' ')[3] : ''}</span>
                                            </h4>
                                            <h5 className="text-[#FF5E15] text-lg font-medium my-2">{item?.category}</h5>
                                            <p className="">Creating on {item?.createTime.split('T')[0]}</p>
                                        </div>
                                    </div>
                                    <div className="tooltip-text-two">Visit</div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;