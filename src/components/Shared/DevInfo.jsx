import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const DevInfo = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8 py-8 lg:py-16 xl:px-[200px] bg-slate-200 border-b-2 border-gray-300">
            <div className="text-center sm:text-left text-2xl lg:text-4xl font-extrabold mb-8">
                <h2 className="text-[#FF5E15]">Dev Info</h2>
                <h1 className="text-3xl lg:text-5xl mt-5">Crafting a Seamless Culinary Experience</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-10'>
                {/* information */}
                <div className='col-span-1 border border-[#FF5E15] p-6 h-[274px]'>
                    <h3 className='text-2xl font-semibold mb-5'>Information</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <p><IoLocationSharp /></p>
                            <a className='' target='_blank' href="https://maps.app.goo.gl/gQL58bFywTR4EF2N6">Rampura, Dhaka 1219</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <p><FaPhoneAlt /></p>
                            <p>+8801741352039</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p><MdEmail /></p>
                            <a href="mailto:sirajul.islam583853@gmail.com?body=My custom mail body" className="">sirajul.islam583853@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <p><FaGithub /></p>
                            <a href="https://github.com/siraj3838" className="">sirajul.islam583853@gmail.com</a>
                        </div>
                    </div>
                </div>
                {/* Educational */}
                <div className='col-span-1 border border-[#FF5E15] p-6 h-[274px]'>
                    <h3 className='text-2xl font-semibold mb-5'>Educational</h3>
                    <div className="space-y-3">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm lg:text-base">
                                <p className="lg:font-semibold">SSC -</p>
                                <p>Bidyakut Amar Bohumukhi High School</p>
                            </div>
                            <div className="flex items-center gap-9">
                                <p><IoLocationSharp /></p>
                                <a className='' target='_blank' href="">Nabinagar, Bidyakut</a>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm lg:text-base">
                                <p className="lg:font-semibold">HSC -</p>
                                <p>Sur Somrat Alauddi Kha Degree College</p>
                            </div>
                            <div className="flex items-center gap-9">
                                <p><IoLocationSharp /></p>
                                <a className='' target='_blank' href="">Nabinagar, Shibpur</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Experience */}
                <div className='col-span-1 border border-[#FF5E15] p-6 h-[274px]'>
                    <h3 className='text-2xl font-semibold mb-5'>Experience</h3>
                    <div className="space-y-3">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <p className="font-semibold">3 Month -</p>
                                <p>bdCalling IT</p>
                            </div>
                            <div className="flex items-center gap-9">
                                <p><span className="font-semibold">Position -</span> Frontend Developer</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <p className="font-semibold">Running 2nd Month -</p>
                                <p>Digistack IT</p>
                            </div>
                            <div className="flex items-center gap-9">
                                <p><span className="font-semibold">Position -</span> Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Technology */}
                <div className='col-span-1 border border-[#FF5E15] p-6 h-[274px]'>
                    <h3 className='text-2xl font-semibold mb-5'>Technology</h3>
                    <div className="space-y-3">
                        <div className="grid text-sm lg:text-base grid-cols-3 gap-3">
                            <p className="lg:font-semibold">Frontend -</p>
                            <p className="text-sm">React Js</p>
                            <p className="text-sm">JavaScript</p>
                            <p className="text-sm">Tailwind CSS</p>
                            <p className="text-sm">Material UI</p>
                            <p className="text-sm">React Bootstrap</p>
                        </div>
                        <div className="grid text-sm lg:text-base grid-cols-3 gap-3">
                            <p className="lg:font-semibold">Backend -</p>
                            <p className="text-sm">Node Js</p>
                            <p className="text-sm">Express Js</p>
                            <p className="text-sm">Mongodb</p>
                            <p className="text-sm">JWT</p>
                            <p className="text-sm">TypeScript</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevInfo;