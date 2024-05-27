import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../Hook/useAxios";
import toast from "react-hot-toast";
const Menu = () => {
    const { googleLoginUser, user, logOutUser } = useContext(AuthContext)
    const myAxios = useAxios();
    const handleGoogleLogin = () => {
        googleLoginUser()
            .then(res => {
                console.log(res);
                const userInfo = {
                    displayName: res.user.displayName,
                    email: res.user.email,
                    photoURL: res.user.photoURL,
                    coin: 50
                }
                toast.success('Welcome to Our Mastery!')
                myAxios.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('Logged in successfully');
                        }
                        if (res.data.insertedId == null) {
                            console.log('This Mail Already Exist');
                        }
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleLoggedOut = () => {
        logOutUser()
            .then(() => {
                toast.success('Logout Successfully!')
            })
            .catch(error => {
                console.error(error.message);
            })
    }


    const navList = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 hover:text-[#FF5E15] text-lg font-semibold cursor-pointer border-b-[#FF5E15] text-[#FF5E15] pb-2" : " hover:text-[#FF5E15] text-black font-bold border-b-[#858585] border-b pb-2 text-lg hover:border-[#FF5E15] hover:border-b-2"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/recipes"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 hover:text-[#FF5E15] text-lg font-semibold cursor-pointer border-b-[#FF5E15] text-[#FF5E15] pb-2" : " hover:text-[#FF5E15] text-black font-bold border-b-[#858585] border-b pb-2 text-lg hover:border-[#FF5E15] hover:border-b-2"
            }
        >
            Recipes
        </NavLink>
        {
            user ? <NavLink
                to="/addRecipes"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 hover:text-[#FF5E15] text-lg font-semibold cursor-pointer border-b-[#FF5E15] text-[#FF5E15] pb-2" : " hover:text-[#FF5E15] text-black font-bold border-b-[#858585] border-b pb-2 text-lg hover:border-[#FF5E15] hover:border-b-2"
                }
            >
                Add Recipes
            </NavLink>
                :
                ''
        }
        {
            user?.email ? <div className="">
                <button onClick={handleLoggedOut} className="hover:text-[#FF5E15] text-black font-bold border-b-[#858585] border-b pb-2 text-lg hover:border-[#FF5E15] hover:border-b-2">Log Out</button>
            </div>
                :
                <div onClick={handleGoogleLogin} className="hover:text-[#FF5E15] text-black font-bold border-b-[#858585] border-b pb-2 text-lg hover:border-[#FF5E15] hover:border-b-2">Google Login</div>
        }
    </>
    return (
        <div>
            {/* large */}
            <div className="hidden lg:block">
                <div className="grid grid-cols-6 items-center h-[63px]">
                    <div className={`col-span-2 pl-11 flex ${user ? 'gap-14' : 'gap-20'} items-center`}>
                        {navList}
                    </div>
                    <div className="col-span-2 flex justify-end pr-5">
                        {
                            user ? <div className="avatar online">
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                                : ''
                        }
                    </div>
                    <div className="col-span-2 pr-16">
                        <label className="input input-bordered input-warning flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search Recipe..." />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="lg:hidden block">
                <div className="flex justify-center items-center h-[63px]">
                    <div className={` flex ${user ? 'gap-4' : 'gap-6'} items-center`}>
                        {navList}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;