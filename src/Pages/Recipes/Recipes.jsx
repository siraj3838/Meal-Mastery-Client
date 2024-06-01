import { Link } from "react-router-dom";
import useRecipes from "../../Hook/useRecipes";
import banner from '../../assets/recipes-banner.jpg';
import { FaChevronRight } from "react-icons/fa6";
import logo from '../../assets/logo.png';
import { FaRegHeart } from "react-icons/fa";
import { RiFolderSharedLine } from "react-icons/ri";
import '../../index.css';
import useRecipesAdmin from "../../Hook/useRecipesAdmin";

const Recipes = () => {
    const [recipes] = useRecipes();
    const [recipesAdmin] = useRecipesAdmin();
    return (
        <div>
            <div className="fixed top-16 z-30 left-[67%] w-full">
                <div className="w-1/5 py-1">
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
            <div className="px-10 md:px-[100px] lg:px-[380px] lg:py-16 py-8">
                <div className="flex flex-wrap justify-center items-center gap-5">
                    <button className="border py-3 px-12 text-lg font-medium hover:bg-[#000] hover:text-white hover:duration-700">Appetizers</button>
                    <button className="border py-3 px-12 text-lg font-medium hover:bg-[#000] hover:text-white hover:duration-700">Snacks</button>
                    <button className="border py-3 px-12 text-lg font-medium hover:bg-[#000] hover:text-white hover:duration-700">Vegetarian</button>
                    <button className="border py-3 px-12 text-lg font-medium hover:bg-[#000] hover:text-white hover:duration-700">Dessert</button>
                    <button className="border py-3 px-12 text-lg font-medium hover:bg-[#000] hover:text-white hover:duration-700">Vegan</button>
                </div>
                <div className="grid grid-cols-4 gap-5 mt-16 w-full">
                    <div className="flex flex-col justify-center gap-8 col-span-3">
                        {
                            recipes?.map(item => <div className="border p-5" key={item?._id}>
                                <h4 className="flex items-center gap-1 text-4xl font-extrabold">
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
                                            <p className="icon hover:text-red-600"><FaRegHeart /></p>
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
                                    <iframe className="h-[400px]" width="100%" src={item?.youtubeLink} title="Our Recipes Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                <p className="mt-3">{item?.recipeDetails.split('.').slice(3,)}</p>
                            </div>)
                        }
                    </div>
                    <div className="col-span-1 w-full">
                        <h3 className="text-3xl font-extrabold">Popular Recipes</h3>
                        <div className="flex flex-col justify-center gap-8 py-8">
                            {
                                recipesAdmin?.map((item, idx) => <div className="tooltip-container-two cursor-pointer" key={idx}>
                                    <div className="flex gap-3">
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