import { useEffect, useState } from 'react';

import stl from './index.module.scss';

import HomeApi from '@/enitities/home/model/api/index.js';
import SectionTitle from '@/shared/ui/SectionTitle/index.jsx';
import ReleasesCard from '@/widgets/Home/ui/Releases/ui/Card/index.jsx';

export const Releases = () => {
    const { fetchLatestReleases } = HomeApi();
    const [releases, setReleases] = useState([]);

    const getLatestReleases = async () => {
        const data = fetchLatestReleases();

        setReleases(data);
    };

    useEffect(() => {
        getLatestReleases();
    }, []);

    return (
        <div className={stl.releases}>
            <SectionTitle
                title='Новые эпизоды'
                subtitle='Самые новые и свежие эпизоды в любиимой озвучке'
            />
            <div className={stl.releases__wrapper}>
                {releases.length > 0 &&
                    releases.map((item, idx) => <ReleasesCard key={idx} release={item} />)}
            </div>
        </div>
    );
};
