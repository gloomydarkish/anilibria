import React from 'react';

import stl from './index.module.scss';

import { BASE_ASSETS_PATH } from '@/shared/constans/ApiPath/index.js';

const GenresCard = ({ item }) => {
    const imagePath = `${BASE_ASSETS_PATH}${item?.image?.preview}`;

    const getReleaseWord = (count) => {
        const mod10 = count % 10;
        const mod100 = count % 100;

        if (mod10 === 1 && mod100 !== 11) {
            return 'релиз';
        } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
            return 'релиза';
        } else {
            return 'релизов';
        }
    };

    return (
        <div
            className={stl.card}
            style={{
                background: `url(${imagePath}) center / cover no-repeat`,
            }}
        >
            <h4>{item?.name}</h4>
            <p>
                {item?.total_releases} {getReleaseWord(item?.total_releases)}
            </p>
        </div>
    );
};

export default GenresCard;
