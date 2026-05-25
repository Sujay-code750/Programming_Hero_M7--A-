import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#f8fafc]'>
            <div className='container mx-auto text-center'>
                    <div className='space-y-5 pt-20'>
                       <div className='space-y-3'>  
                         <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
                        <p className='text-[#808080]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
                       </div>

                        <div>
                            <button className='btn bg-[#244d3f] text-white'>+ Add a Friend</button>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5 pb-10 border-b border-gray-300'>
                                <div className='bg-white p-8 shadow-sm rounded-sm space-y-2'>
                                    <h1 className='text-4xl font-semibold'>10</h1>
                                    <p className='text-lg text-[#808080]'>Total Friend</p>
                                </div>
                                <div className='bg-white p-8 shadow-sm rounded-sm space-y-2'>
                                    <h1 className='text-4xl font-semibold'>3</h1>
                                    <p className='text-lg text-[#808080]'>On Track</p>
                                </div>
                                <div className='bg-white p-8 shadow-sm rounded-sm space-y-2'>
                                    <h1 className='text-4xl font-semibold'>6</h1>
                                    <p className='text-lg text-[#808080]'>Need Attention</p>
                                </div>
                                <div className='bg-white p-8 shadow-sm rounded-sm space-y-2'>
                                    <h1 className='text-4xl font-semibold'>12</h1>
                                    <p className='text-lg text-[#808080]'>Interactions This Month</p>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;