import { useEffect, useState } from 'react';

import FranchisesCard from './ui/Card';

import stl from './index.module.scss';

import HomeApi from '@/enitities/home/model/api/index.js';
import RoutePath from '@/shared/constans/RoutePath/index.js';
import SectionTitle from '@/shared/ui/SectionTitle/index.jsx';

export const Franchises = () => {
    const { fetchFranchises } = HomeApi();
    const [franchises, setFranchises] = useState([]);

    const getFranchises = async () => {
        const data = await fetchFranchises();

        // console.log(data);

        setFranchises(data);
    };

    useEffect(() => {
        getFranchises();
    }, []);

    return (
        <div className={stl.franchises}>
            <SectionTitle
                to={RoutePath.CATALOG}
                title='Франшизы'
                subtitle='Самые интересные и захватывающие франшизы в любимой озвучке'
            />
            <div className={stl.franchises__wrapper}>
                {franchises.length > 0 &&
                    franchises.map((item, idx) => <FranchisesCard key={idx} item={item} />)}
            </div>
        </div>
    );
};
