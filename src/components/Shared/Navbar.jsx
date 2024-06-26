import Menu from "./Menu";
import TopBar from "./TopBar";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            {/* large */}
            <div className="hidden lg:block pb-[125px]">
                <div className="grid grid-cols-5 h-[126px] border-b fixed top-0 z-20 w-full">
                    {/* Logo Content */}
                    <div className="col-span-1 bg-[#FF5E15]">
                        <Link to={'/'}>
                            <div className="flex justify-center items-center h-[120px] gap-3">
                                <img className="w-16" src={logo} alt="" />
                                <h4 className="text-white text-3xl font-semibold">Meal Mastery</h4>
                            </div>
                        </Link>
                    </div>
                    {/* TopBar & Menu */}
                    <div className="col-span-4">
                        <TopBar />
                        <Menu />
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="block lg:hidden">
                <div className="border-b">
                    {/* Logo Content */}
                    <div className="col-span-1 bg-[#FF5E15]">
                        <Link to={'/'}>
                            <div className="flex justify-center items-center h-[120px] gap-3">
                                <img className="w-16" src={logo} alt="" />
                                <h4 className="text-white text-3xl font-semibold">Meal Mastery</h4>
                            </div>
                        </Link>
                    </div>
                    {/* TopBar & Menu */}
                    <div className="col-span-4">
                        <Menu />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;