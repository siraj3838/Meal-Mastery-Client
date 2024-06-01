import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const TopBar = () => {
    return (
        <div className="h-[63px] grid grid-cols-6 bg-black text-white pl-10">
            <div className="flex items-center gap-6 col-span-3 xl:col-span-2">
                <div className="flex items-center gap-1 xl:gap-3 text-sm">
                    <FaLocationDot />
                    <a className='' target='_blank' href="https://maps.app.goo.gl/gQL58bFywTR4EF2N6">Rampura, Dhaka 1219</a>
                </div>
                <div className="flex items-center gap-1 xl:gap-3">
                    <FaLocationArrow />
                    <a href="mailto:sirajul.islam583853@gmail.com?body=My custom mail body" className="">sirajul.islam583853@gmail.com</a>
                </div>
            </div>
            <div className="lg:hidden xl:block xl:col-span-1">
            </div>
            <div className="col-span-2 flex items-center justify-end gap-5 text-lg pr-10">
                <p className="hover:scale-110 duration-600 transition-all hover:text-[#FF5E15]"><FaFacebook /></p>
                <p className="text-xl hover:scale-110 duration-600 transition-all hover:text-[#FF5E15]"><AiFillLinkedin /></p>
                <p className="text-xl hover:scale-110 duration-600 transition-all hover:text-[#FF5E15]"><FaGithub /></p>
            </div>
            <div className="col-span-1 bg-[#FF5E15] flex justify-center items-center font-semibold">
                <Link to={'/login'}>
                    <button className="hover:scale-110 duration-600 transition-all">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default TopBar;