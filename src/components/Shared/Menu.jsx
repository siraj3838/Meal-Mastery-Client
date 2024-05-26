import { NavLink } from "react-router-dom";

const Menu = () => {
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
        <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 hover:text-[#FF5E15] text-lg font-semibold cursor-pointer border-b-[#FF5E15] text-[#FF5E15] pb-2" : " hover:text-[#FF5E15] text-black font-bold border-b-[#858585] border-b pb-2 text-lg hover:border-[#FF5E15] hover:border-b-2"
            }
        >
            Google Login
        </NavLink>
    </>
    return (
        <div className="grid grid-cols-6 items-center h-[63px]">
            <div className="col-span-2 pl-11 flex gap-20 items-center">
                {navList}
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2 pr-16">
                <label className="input input-bordered input-warning flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search Recipe..." />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Menu;