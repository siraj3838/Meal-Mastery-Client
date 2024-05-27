import CountUp from 'react-countup';

const SuccessStories = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8 py-16 xl:px-[200px] bg-slate-200">
            <div className="text-center sm:text-left text-4xl font-extrabold mb-8">
                <h2 className="text-[#FF5E15]">Success Stories</h2>
                <h1 className="text-5xl mt-5">Our Community's Achievements</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 lg:border-t lg:border-b border-[#FF5E15]'>
                <div className='text-center flex-1 border-[#FF5E15] border-r p-7'>
                    <h2 className='text-3xl font-extrabold'><CountUp start={0} end={5000} delay={1}>
                        {({ countUpRef }) => (
                            <span ref={countUpRef} />
                        )}
                    </CountUp>+</h2>
                    <h5 className='py-4 text-xl font-semibold'>Recipes Shared</h5>
                    <p className='h-32'>Our community has contributed over 5,000 unique recipes, ranging from traditional family favorites to innovative culinary creations. Every recipe is a testament to the passion and creativity of our members.</p>
                </div>
                <div className='text-center flex-1 border-[#FF5E15] border-r p-7'>
                    <h2  className='text-3xl font-extrabold'><CountUp start={0} end={1000} delay={1}>
                        {({ countUpRef }) => (
                            <span ref={countUpRef} />
                        )}
                    </CountUp>+</h2>
                    <h5 className='py-4 text-xl font-semibold'>Our members</h5>
                    <p className='h-32 px-7'>Our members have hosted more than 1,000 successful dinner parties, bringing friends and families together to enjoy great food and even better company. From intimate gatherings to festive celebrations.
                    </p>
                </div>
                <div className='text-center flex-1 p-7 border-[#FF5E15] border-r lg:border-r-none'>
                    <h2 className='text-3xl font-extrabold'><CountUp start={0} end={500} delay={1}>
                        {({ countUpRef }) => (
                            <span ref={countUpRef} />
                        )}
                    </CountUp>+</h2>
                    <h5 className='py-4 text-xl font-semibold'>Culinary Courses Completed</h5>
                    <p className='h-32'>With over 500 culinary courses completed, our community members have honed their skills and expanded their culinary horizons. Our courses cover everything from basic cooking techniques to advanced gourmet skills.</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;