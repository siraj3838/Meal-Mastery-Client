import toast from 'react-hot-toast';
import banner from '../../assets/dev-content-img.png'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import '../../index.css'
import { AuthContext } from '../../Provider/AuthProvider';
import useAxios from '../../Hook/useAxios';

const AddRecipes = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const myAxios = useAxios();
    const date = new Date();

    const onSubmit = async (data) => {
        const recipesInfo = {
            creatorEmail: user?.email,
            recipeImage: data?.image,
            recipeDetails: data?.recipeDetails,
            youtubeLink: data?.videoCode,
            country: data?.country,
            category: data?.category,
            watchCount: 0,
            purchased_by: [],
            createTime: date 
        }
        // console.log(recipesInfo);
        const res = await myAxios.post('/recipes', recipesInfo)
        if(res.data.insertedId){
            toast.success("Thank you share your recipes")
        }
        else{
            toast.error("Server Error Please Try again")
        }
    };


    return (
        <div className='px-4 sm:px-6 md:px-8 py-16 xl:px-[200px]'>
            <div className="flex items-center flex-col lg:flex-row">
                <div className='flex-1'>
                    <img className='w-full h-full' src={banner} alt="" />
                </div>
                <div className='flex-1 bg-[#FF5E15] pr-20 pt-10 pb-10 pl-10 w-full overflow-hidden'>
                    <h3 className='text-3xl font-extrabold text-white pb-5'>Add New Recipes</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid lg:grid-cols-2 gap-9 py-11'>
                        <div className="form-row">
                            {/* input */}
                            <div className="input-data">
                                <input className='focus:outline-none px-2 placeholder:text-xs' {...register("recipeDetails", { required: true })} type="text" placeholder='Type Your Recipe Details' />
                                <div className="underline"></div>
                                <label htmlFor="" className='flex items-center gap-14'> Recipe details <span className='text-black text-xl'>*</span></label>
                                {errors.recipeDetails && <span className="text-red-600">Recipe details Is Required</span>}
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
                                <label htmlFor="" className='pb-5 text-sm text-white flex items-center gap-3'>Select Your Country <span className='text-black text-xl'>*</span></label>
                                <select className='focus:outline-none px-2 placeholder:text-xs w-full py-1.5' defaultValue={'default'} {...register('country', { required: true })}
                                >
                                    <option disabled value={'default'}>Select a category</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                                    <option value="Congo, Republic of the">Congo, Republic of the</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Eswatini">Eswatini</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea, North">Korea, North</option>
                                    <option value="Korea, South">Korea, South</option>
                                    <option value="Kosovo">Kosovo</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="North Macedonia">North Macedonia</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestine">Palestine</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Sudan">South Sudan</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-Leste">Timor-Leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City">Vatican City</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>

                                </select>
                                <div className="underline"></div>
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
                                <input
                                    type="text" {...register('image')} className="focus:outline-none px-2 placeholder:text-xs" placeholder="Recipes Photo Please" />
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