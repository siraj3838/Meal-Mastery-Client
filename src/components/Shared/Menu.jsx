import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../Hook/useAxios";
import toast from "react-hot-toast";
import icon from '../../assets/coin-icon.gif';
import useUsers from "../../Hook/useUsers";


const Menu = () => {
    const { googleLoginUser, user, logOutUser } = useContext(AuthContext)
    const myAxios = useAxios();
    const [users, refetch] = useUsers();
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
                            refetch();
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
            <div className="hidden lg:block bg-white">
                <div className="grid grid-cols-6 items-center h-[63px]">
                    <div className={`col-span-4 xl:col-span-3 pl-11 flex ${user ? 'gap-14' : 'gap-20'} items-center`}>
                        {navList}
                    </div>
                    <div className="col-span-2 xl:col-span-3 flex justify-end items-center pr-5">
                        {
                            user ? <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    <img className="w-9" src={icon} alt="" />
                                    <span className="font-semibold text-xl">+ {users?.coin}</span>
                                </div>
                                <div className="avatar online">
                                    <div className="w-12 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                                : ''
                        }
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