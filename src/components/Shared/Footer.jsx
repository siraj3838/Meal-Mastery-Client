import { Link } from 'react-router-dom';
import banner from '../../assets/footer-banner.png'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="bg-base-200 overflow-hidden">
            <div
                className="hero xl:h-[370px] md:h-[600px]"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="hero-overlay bg-opacity-75"></div>
                <footer className="p-10 xl:px-[200px] text-white grid md:grid-cols-2 xl:grid-cols-5 gap-6 items-center">
                    <nav className='col-span-2'>
                        <div>
                            <div className="flex justify-center items-center h-[120px] gap-3">
                                <img className="w-16" src={logo} alt="" />
                                <h4 className="text-white text-3xl font-semibold">Meal Mastery</h4>
                            </div>
                            <p className='text-center px-20'> Welcome to our vibrant community of food lovers! Here, we celebrate the joy of eating and the art of cooking</p>
                        </div>
                    </nav>
                    <nav className='col-span-2 xl:ml-32'>
                        <div>
                            <h3 className='text-2xl font-extrabold xl:mt-20'>Short Link</h3>
                            <div className='flex flex-col justify-center gap-4 mt-7 text-lg font-semibold'>
                                <Link to={'/'}>
                                    <h3 className='hover:text-[#FF5E15]'>Home</h3>
                                </Link>
                                <Link to={'/recipes'}>
                                    <h3 className='hover:text-[#FF5E15]'>Recipes</h3>
                                </Link>
                                <Link to={'/login'}>
                                    <h3 className='hover:text-[#FF5E15]'>Google Login</h3>
                                </Link>
                            </div>
                        </div>

                    </nav>
                    <form className='xl:col-span-1 col-span-2'>
                        <div>
                            <h3 className='text-2xl font-extrabold mb-5'>Contact Us</h3>
                            <fieldset className="form-control">
                                <div className="join">
                                    <input type="text" placeholder="username@site.com" className="input input-bordered join-item placeholder:text-black text-black" />
                                    <button className="bg-[#FF5E15] text-white py-3 px-7 rounded hover:bg-[#ff3815] join-item">Send</button>
                                </div>
                            </fieldset>
                        </div>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default Footer;