import React from 'react';

import { HomeBanner, HomeReleases, HomeSupport } from '@/widgets/Home/index.js';

const Home = () => {
    return (
        <div className='container'>
            <div className='page'>
                <HomeBanner />
                <HomeReleases />
                <HomeSupport />
            </div>
        </div>
    );
};

export default Home;
