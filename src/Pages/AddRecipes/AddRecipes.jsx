import toast from 'react-hot-toast';
import banner from '../../assets/dev-content-img.png'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import useAxios from '../../Hook/useAxios';
import '../../index.css'
import { AuthContext } from '../../Provider/AuthProvider';

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddRecipes = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const myAxios = useAxios();

    const onSubmit = async (data) => {
        const recipeInfo = {
            recipe: data?.recipe,
            category: data?.category,
            videoCode: data?.videoCode,
            country: data?.country,
            creatorEmail: user?.email,
            image: data?.image,
            watchCount: 0,
            purchased_by: [],
        };
        console.log(recipeInfo);
        const res = await myAxios.post('/recipes', recipeInfo)
        if (res.data.insertedId) {
            toast.success("Recipes Uploaded Successfully!")
        }
        else{
            toast.error("Network Error")
        }

    };


    return (
        <div className='px-4 sm:px-6 md:px-8 py-16 xl:px-[200px]'>
            <div className="flex items-center flex-col lg:flex-row">
                <div className='flex-1'>
                    <img className='w-full h-full' src={banner} alt="" />
                </div>
                <div className='flex-1 bg-[#FF5E15] p-10'>
                    <h3 className='text-3xl font-extrabold text-white pb-5'>Add New Recipes</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid lg:grid-cols-2 gap-9 py-11'>
                        <div className="form-row">
                            {/* input */}
                            <div className="input-data">
                                <input className='focus:outline-none px-2 placeholder:text-xs' {...register("recipe", { required: true })} type="text" placeholder='Type Your Recipe Details' />
                                <div className="underline"></div>
                                <label htmlFor="" className='flex items-center gap-14'> Recipe details <span className='text-black text-xl'>*</span></label>
                                {errors.recipe && <span className="text-red-600">Recipe details Is Required</span>}
                            </div>
                            <div className="input-data">
                                <input className='focus:outline-none px-2 placeholder:text-xs' placeholder='Type Your Youtube Video Code' {...register("videoCode", { required: true })} type="text" />
                                <div className="underline"></div>
                                <label htmlFor="" className='flex items-center gap-4'>Youtube Video Code <span className='text-black text-xl'>*</span></label>
                                {errors.videoCode && <span className="text-red-600">Youtube Video Code</span>}
                            </div>

                        </div>
                        <div className="form-row">
                            {/* input 2 */}
                            <div className="input-data">
                                <input className='focus:outline-none px-2 placeholder:text-xs' placeholder='Type Your Country Name' {...register("country", { required: true })} type="text" />
                                <div className="underline"></div>
                                <label htmlFor="" className='flex items-center gap-6'>Country <span className='text-black text-xl'>*</span></label>
                                {errors.country && <span className="text-red-600">Country Is Required</span>}
                            </div>
                            <div className="input-data">
                                <label htmlFor="" className='pb-5 text-sm text-white flex items-center gap-3'>Category <span className='text-black text-xl'>*</span></label>
                                <select className='focus:outline-none px-2 placeholder:text-xs w-full py-1.5' defaultValue={'default'} {...register('category', { required: true })}
                                >
                                    <option disabled value={'default'}>Select a category</option>
                                    <option value="Appetizers">Appetizers</option>
                                    <option value="Snacks">Snacks</option>
                                    <option value="Vegetarian">Vegetarian</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Vegan">Vegan</option>
                                </select>
                                <div className="underline"></div>
                                {errors.category && <span className="text-red-600">Category Is Required</span>}
                            </div>
                        </div>
                        <div className="form-row">
                            {/* input 2 */}
                            <div className="input-data">
                                <input className='focus:outline-none px-2 placeholder:text-xs' placeholder='Type Recipe Image URL' {...register("image", { required: true })} type="text" />
                                <div className="underline"></div>
                                <label htmlFor="" className='flex items-center gap-7'>Recipe Image URL <span className='text-black text-xl'>*</span></label>
                                {errors.image && <span className="text-red-600">Recipe Image is required</span>}
                            </div>
                        </div>
                        <div className="pt-5 px-[18px]">
                            <button
                                className="block w-full select-none rounded-lg bg-[#231F40] py-2 text-center align-middle font-sans text-lg font-semibold text-white shadow-md transition-all hover:shadow-sm hover:shadow-[#7531FA] hover:text-[#FF5E15] hover:duration-500"
                                type="submit"
                            >
                                Upload
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRecipes;