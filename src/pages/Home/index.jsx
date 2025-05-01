import React from 'react';

import { HomeBanner, HomeReleases } from '@/widgets/Home/index.js';

const Home = () => {
    return (
        <div className='container'>
            <div className='page'>
                <HomeBanner />
                <HomeReleases />
            </div>
        </div>
    );
};

export default Home;
