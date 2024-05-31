import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import OfferCard from "../Card/OfferCard";

const DailyOffer = () => {
    const [offer, setOffer] = useState([]);
    
    useEffect(() => {
        fetch('offer.json')
            .then(res => res.json())
            .then(data => setOffer(data))
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className="px-4 sm:px-6 md:px-8 py-8 lg:py-16 xl:px-[200px] bg-slate-200 border-b-2 border-gray-300">
            <div className="text-center sm:text-left text-2xl lg:text-4xl font-extrabold mb-8">
                <h2 className="text-[#FF5E15]">Daily Offer</h2>
                <h1 className="text-3xl lg:text-5xl mt-5">Up To 75% Off For This Day</h1>
            </div>
            <Slider {...settings} className="">
                {
                    offer?.map((item, idx) => <OfferCard key={idx} item={item} />)
                }
            </Slider>
        </div>
    );
};

export default DailyOffer;
