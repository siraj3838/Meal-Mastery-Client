import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WOW from 'wowjs';
import 'animate.css';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner-1.png';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpg';

const Banner = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div>
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <SwiperSlide className="swiper-slide">
          <div
            className="hero h-[440px] xl:h-[750px] md:h-[400px]"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="hero-overlay bg-opacity-75"></div>
            <div className="flex justify-start items-center text-center text-neutral-content">
              <div className="max-w-lg wow fadeInRight" data-wow-delay="1.5s">
                <h2 className="text-[#FF5E15] text-2xl md:text-3xl font-extrabold">
                  Satisfy Your Cravings
                </h2>
                <h1 className="my-5 text-3xl md:text-5xl font-bold">
                  Delicious Foods With Wonderful Eating
                </h1>
                <p className="mb-5">
                  Welcome to our vibrant community of food lovers! Here, we celebrate the joy of eating and the art of cooking, bringing you an array of delicious recipes that will tantalize your taste buds and inspire your culinary adventures.
                </p>
                <div className="flex items-center gap-4 justify-center wow fadeInUp" data-wow-delay="2s">
                  <Link to="/allRecipes">
                    <button className="bg-[#ff8215] text-white py-3 px-7 rounded hover:bg-[#ff7455] hover:scale-110 duration-600 transition-all">
                      See recipes
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="bg-[#FF5E15] text-white py-3 px-7 rounded hover:bg-[#ff3815] hover:scale-110 duration-600 transition-all" data-wow-delay="2.5s">
                      Add recipes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="hero h-[440px] xl:h-[750px] md:h-[400px]"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="hero-overlay bg-opacity-75"></div>
            <div className="flex justify-start items-center text-center text-neutral-content">
              <div className="max-w-lg wow fadeInRight" data-wow-delay="1.5s">
                <h2 className="text-[#FF5E15] text-2xl md:text-3xl font-extrabold">
                  Delicious Desserts to Enjoy
                </h2>
                <h1 className="my-5 text-3xl md:text-5xl font-bold">
                  Cherished Recipes Passed Down
                </h1>
                <p className="mb-5">
                  Life is busy, but that doesn’t mean you have to sacrifice flavor. Find and share quick and easy recipes that fit into your hectic schedule without compromising on taste.
                </p>
                <div className="flex items-center gap-4 justify-center wow fadeInUp" data-wow-delay="2s">
                  <Link to="/allRecipes">
                    <button className="bg-[#ff8215] text-white py-3 px-7 rounded hover:bg-[#ff7455] hover:scale-110 duration-600 transition-all">
                      See recipes
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="bg-[#FF5E15] text-white py-3 px-7 rounded hover:bg-[#ff3815] hover:scale-110 duration-600 transition-all" data-wow-delay="2.5s">
                      Add recipes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="hero h-[440px] xl:h-[750px] md:h-[400px]"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <div className="hero-overlay bg-opacity-75"></div>
            <div className="flex justify-start items-center text-center text-neutral-content">
              <div className="max-w-lg wow fadeInRight" data-wow-delay="1.5s">
                <h2 className="text-[#FF5E15] text-2xl md:text-3xl font-extrabold">
                  Explore Plant-Based Recipes
                </h2>
                <h1 className="my-5 text-3xl md:text-5xl font-bold">
                  Elevate Your Cooking with Gourmet Recipes
                </h1>
                <p className="mb-5">
                  Step up your culinary game with our collection of gourmet recipes. Perfect for special occasions or when you want to impress, these dishes are sure to elevate your home cooking.
                </p>
                <div className="flex items-center gap-4 justify-center wow fadeInUp" data-wow-delay="2s">
                  <Link to="/allRecipes">
                    <button className="bg-[#ff8215] text-white py-3 px-7 rounded hover:bg-[#ff7455] hover:scale-110 duration-600 transition-all">
                      See recipes
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="bg-[#FF5E15] text-white py-3 px-7 rounded hover:bg-[#ff3815] hover:scale-110 duration-600 transition-all" data-wow-delay="2.5s">
                      Add recipes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
