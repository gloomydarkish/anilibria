import { useEffect, useState } from 'react';

import ReleasesCard from './ui/Card';

import stl from './index.module.scss';

import HomeApi from '@/enitities/home/model/api/index.js';
import RoutePath from '@/shared/constans/RoutePath/index.js';
import SectionTitle from '@/shared/ui/SectionTitle/index.jsx';

export const Releases = () => {
    const { fetchLatestReleases } = HomeApi();
    const [releases, setReleases] = useState([]);

    const getLatestReleases = async () => {
        const data = await fetchLatestReleases();

        // console.log(data);

        setReleases(data);
    };

    useEffect(() => {
        getLatestReleases();
    }, []);

    return (
        <div className={stl.releases}>
            <SectionTitle
                to={RoutePath.CATALOG}
                title='Новые эпизоды'
                subtitle='Самые новые и свежие эпизоды в любиимой озвучке'
            />
            <div className={stl.releases__wrapper}>
                {releases.length > 0 &&
                    releases.map((item, idx) => <ReleasesCard key={idx} item={item} />)}
            </div>
        </div>
    );
};
