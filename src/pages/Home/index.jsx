import React from 'react';

import {
    HomeBanner,
    HomeFranchises,
    HomeGenres,
    HomeReleases,
    HomeSchedule,
    HomeSupport,
    HomeVideos,
} from '@/widgets/Home/index.js';

const Home = () => {
    return (
        <div className='container'>
            <div className='page'>
                <HomeBanner />
                <HomeReleases />
                <HomeSupport />
                <HomeSchedule />
                <HomeVideos />
                <HomeFranchises />
                <HomeGenres />
            </div>
        </div>
    );
};

export default Home;
