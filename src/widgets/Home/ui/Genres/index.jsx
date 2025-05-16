import { useEffect, useState } from 'react';

import stl from './index.module.scss';

import HomeApi from '@/enitities/home/model/api/index.js';
import RoutePath from '@/shared/constans/RoutePath/index.js';
import SectionTitle from '@/shared/ui/SectionTitle/index.jsx';
import GenresCard from '@/widgets/Home/ui/Genres/ui/Card/index.jsx';

export const Genres = () => {
    const { fetchGenres } = HomeApi();
    const [genres, setGenres] = useState([]);

    const getGenres = async () => {
        const data = await fetchGenres();

        console.log(data);

        setGenres(data);
    };

    useEffect(() => {
        getGenres();
    }, []);

    return (
        <div className={stl.genres}>
            <SectionTitle
                to={RoutePath.CATALOG}
                title='Жанры'
                subtitle='Список жанров на любой вкус и цвет'
            />
            <div className={stl.genres__wrapper}>
                {genres.length > 0 &&
                    genres.map((item, idx) => <GenresCard key={idx} item={item} />)}
            </div>
        </div>
    );
};
