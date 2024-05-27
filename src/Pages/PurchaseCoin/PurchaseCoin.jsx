import { FaCheck } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";
import bkash from '../../assets/bkash.png'
import nogot from '../../assets/nogot.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const PurchaseCoin = () => {

    const { user } = useContext(AuthContext);

    const handleOrderNow = async (e) => {
        e.preventDefault();

        const formData = e.target;
        const email = formData.email.value;
        const name = formData.name.value;
        const phone = formData.phone.value;
        const message = formData.message.value;
        const amount = formData.amount.value;
        const lastNumber = formData.lastNumber.value;
        const transactionId = formData.transactionId.value;
        const date = new Date();


        const payment = {
            orderEmail: email,
            orderName: name,
            message: message,
            number: phone,
            amount: amount,
            lastNumber,
            transactionId,
            date
        }

    }

    return (
        <div className="px-4 sm:px-6 md:px-8 py-16 xl:px-[200px]">
            <div className="bg-[#FF5E15]">
                <div>
                    <h3 className="text-3xl font-extrabold text-white text-center pt-10 lg:pt-16">Purchase Coin</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 lg:p-16 p-8">
                    <div className="bg-white p-5 lg:p-10 space-y-3">
                        <h4 className="text-2xl font-semibold">Startup</h4>
                        <p>Best for Startup business owners who needs Recipes for business.</p>
                        <h2 className="text-6xl font-extrabold text-center">$1</h2>
                        <div className="py-4">
                            <button onClick={() => {
                                document.getElementById('my_modal_5').showModal();
                            }} className="bg-[#FF5E15] text-white py-3 px-7 rounded hover:bg-[#ff3815] hover:scale-110 duration-600 transition-all w-full">Select This Package</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle px-5 md:px-0">
                                <div className="modal-box 2xl:px-10 bg-[#2d87fd] md:py-7">
                                    <div className='flex justify-between items-center mb-5'>
                                        <h4 className='text-xl font-semibold text-base-300'>Order Summary</h4>
                                        <div className="modal-action mt-0">
                                            <form method="dialog">
                                                <button className="text-white text-xl"><TfiClose /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className='text-white flex justify-between items-center mt-3 text-lg font-semibold'>
                                        <h3>Total</h3>
                                        <h3>$1</h3>
                                    </div>
                                    <div className='flex items-center justify-center gap-3'>
                                        <img className='w-20 md:w-28' src={bkash} alt="" />
                                        <img className='w-20 md:w-28' src={nogot} alt="" />
                                    </div>
                                    <div className='mb-3 text-white text-center'>
                                        <h5 className='text-sm'>Send Money Bksah/Nogot</h5>
                                        <h4 className='font-semibold'>+8801741352039</h4>
                                    </div>
                                    <form onSubmit={handleOrderNow} className='flex flex-col w-full items-center gap-2'>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Last 4 Number:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='lastNumber' placeholder='Your Last Four Digit...' required />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Transaction Id:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='transactionId' placeholder='Type How much send' required />
                                        </div>
                                        <div className='hidden'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Full Name:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='name' defaultValue={user?.displayName} readOnly />
                                        </div>
                                        <div className='hidden'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Email Address:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="email" name='email' defaultValue={user?.email} readOnly />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Contact Number:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='phone' placeholder='Phone Number Please' />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> How Much Send?</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='amount' placeholder='Type How much send' />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Type Any Message:</label>
                                            <textarea className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' name="message" id="" cols="30" placeholder='Notes about your order, such as special notes for delivery.'></textarea>
                                        </div>
                                        <button className="block w-full select-none rounded-lg bg-[#5820ff] py-[10px] text-center align-middle font-sans text-lg font-semibold text-white shadow-md hover:scale-110 duration-600 transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-1"
                                            type="submit">
                                            Purchase Now
                                        </button>
                                    </form>

                                </div>
                            </dialog>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">100 coins</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">Free platform access for all</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">Free lifetime updates facility</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">Free one year support</span>
                        </div>
                    </div>
                    <div className="bg-white p-5 lg:p-10 space-y-3">
                        <h4 className="text-2xl font-semibold">Business</h4>
                        <p>Best for Startup business owners who needs Recipes for business.</p>
                        <h2 className="text-6xl font-extrabold text-center">$5</h2>
                        <div className="py-4">
                            <button onClick={() => {
                                document.getElementById('my_modal_6').showModal();
                            }} className="bg-[#FF5E15] text-white py-3 px-7 rounded hover:bg-[#ff3815] hover:scale-110 duration-600 transition-all w-full">Select This Package</button>
                            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle px-5 md:px-0">
                                <div className="modal-box 2xl:px-10 bg-[#2d87fd] md:py-7">
                                    <div className='flex justify-between items-center mb-5'>
                                        <h4 className='text-xl font-semibold text-base-300'>Order Summary</h4>
                                        <div className="modal-action mt-0">
                                            <form method="dialog">
                                                <button className="text-white text-xl"><TfiClose /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className='text-white flex justify-between items-center mt-3 text-lg font-semibold'>
                                        <h3>Total</h3>
                                        <h3>$5</h3>
                                    </div>
                                    <div className='flex items-center justify-center gap-3'>
                                        <img className='w-20 md:w-28' src={bkash} alt="" />
                                        <img className='w-20 md:w-28' src={nogot} alt="" />
                                    </div>
                                    <div className='mb-3 text-white text-center'>
                                        <h5 className='text-sm'>Send Money Bksah/Nogot</h5>
                                        <h4 className='font-semibold'>+8801741352039</h4>
                                    </div>
                                    <form onSubmit={handleOrderNow} className='flex flex-col w-full items-center gap-2'>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Last 4 Number:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='lastNumber' placeholder='Your Last Four Digit...' required />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Transaction Id:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='transactionId' placeholder='Type How much send' required />
                                        </div>
                                        <div className='hidden'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Full Name:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='name' defaultValue={user?.displayName} readOnly />
                                        </div>
                                        <div className='hidden'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Email Address:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="email" name='email' defaultValue={user?.email} readOnly />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Contact Number:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='phone' placeholder='Phone Number Please' />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> How Much Send?</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='amount' placeholder='Type How much send' />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Type Any Message:</label>
                                            <textarea className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' name="message" id="" cols="30" placeholder='Notes about your order, such as special notes for delivery.'></textarea>
                                        </div>
                                        <button className="block w-full select-none rounded-lg bg-[#5820ff] py-[10px] text-center align-middle font-sans text-lg font-semibold text-white shadow-md hover:scale-110 duration-600 transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-1"
                                            type="submit">
                                            Purchase Now
                                        </button>
                                    </form>

                                </div>
                            </dialog>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">500 coins</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">Free platform access for all</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">Free lifetime updates facility</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">Free one year support</span>
                        </div>
                    </div>
                    <div className="bg-white p-5 lg:p-10 space-y-3">
                        <h4 className="text-2xl font-semibold">Startup</h4>
                        <p>Best for Startup business owners who needs Recipes for business.</p>
                        <h2 className="text-6xl font-extrabold text-center">$10</h2>
                        <div className="py-4">
                            <button onClick={() => {
                                document.getElementById('my_modal_7').showModal();
                            }} className="bg-[#FF5E15] text-white py-3 px-7 rounded hover:bg-[#ff3815] hover:scale-110 duration-600 transition-all w-full">Select This Package</button>
                            <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle px-5 md:px-0">
                                <div className="modal-box 2xl:px-10 bg-[#2d87fd] md:py-7">
                                    <div className='flex justify-between items-center mb-5'>
                                        <h4 className='text-xl font-semibold text-base-300'>Order Summary</h4>
                                        <div className="modal-action mt-0">
                                            <form method="dialog">
                                                <button className="text-white text-xl"><TfiClose /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className='text-white flex justify-between items-center mt-3 text-lg font-semibold'>
                                        <h3>Total</h3>
                                        <h3>$10</h3>
                                    </div>
                                    <div className='flex items-center justify-center gap-3'>
                                        <img className='w-20 md:w-28' src={bkash} alt="" />
                                        <img className='w-20 md:w-28' src={nogot} alt="" />
                                    </div>
                                    <div className='mb-3 text-white text-center'>
                                        <h5 className='text-sm'>Send Money Bksah/Nogot</h5>
                                        <h4 className='font-semibold'>+8801741352039</h4>
                                    </div>
                                    <form onSubmit={handleOrderNow} className='flex flex-col w-full items-center gap-2'>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Last 4 Number:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='lastNumber' placeholder='Your Last Four Digit...' required />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Transaction Id:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='transactionId' placeholder='Type How much send' required />
                                        </div>
                                        <div className='hidden'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Full Name:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='name' defaultValue={user?.displayName} readOnly />
                                        </div>
                                        <div className='hidden'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Email Address:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="email" name='email' defaultValue={user?.email} readOnly />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Contact Number:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='phone' placeholder='Phone Number Please' />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> How Much Send?</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='amount' placeholder='Type How much send' />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Type Any Message:</label>
                                            <textarea className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' name="message" id="" cols="30" placeholder='Notes about your order, such as special notes for delivery.'></textarea>
                                        </div>
                                        <button className="block w-full select-none rounded-lg bg-[#5820ff] py-[10px] text-center align-middle font-sans text-lg font-semibold text-white shadow-md hover:scale-110 duration-600 transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-1"
                                            type="submit">
                                            Purchase Now
                                        </button>
                                    </form>

                                </div>
                            </dialog>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">1000 coins</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">Free platform access for all</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">Free lifetime updates facility</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-blue-700"><FaCheck /></p>
                            <span className="text-lg font-semibold">Free one year support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseCoin;