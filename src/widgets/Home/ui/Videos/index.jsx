import React, { useEffect, useState } from 'react';

import stl from './index.module.scss';

import HomeApi from '@/enitities/home/model/api/index.js';
import RoutePath from '@/shared/constans/RoutePath/index.js';
import SectionTitle from '@/shared/ui/SectionTitle/index.jsx';
import { VideosCard } from '@/widgets/Home/ui/Videos/ui/Card/index.jsx';

export const Videos = () => {
    const { fetchVideos } = HomeApi();
    const [videos, setVideos] = useState([]);

    const getVideos = async () => {
        const data = await fetchVideos();

        // console.log(data);

        setVideos(data);
    };

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className={stl.videos}>
            <SectionTitle
                to={RoutePath.CATALOG}
                title='Последние видео'
                subtitle='Самые интересные видео ролики от любимой команды'
            />
            <div className={stl.videos__wrapper}>
                {videos.length > 0 &&
                    videos.map((item, idx) => <VideosCard key={idx} item={item} />)}
            </div>
        </div>
    );
};
