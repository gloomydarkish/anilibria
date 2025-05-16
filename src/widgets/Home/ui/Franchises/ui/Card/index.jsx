import React from 'react';

import stl from './index.module.scss';

import { BASE_ASSETS_PATH } from '@/shared/constans/ApiPath/index.js';

const FranchisesCard = ({ item }) => {
    const imagePath = `${BASE_ASSETS_PATH}${item?.image?.preview}`;

    const formatDuration = (seconds) => {
        if (!seconds) return 'Нет данных';
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);

        return `${hrs} часа ${mins} минут`;
    };

    return (
        <div className={stl.card}>
            <img
                style={{
                    background: `url(${imagePath}) center / cover no-repeat`,
                }}
                className={stl.card__image}
            />
            <div className={stl.card__content}>
                <div>
                    <h2>{item?.name}</h2>
                    <h3>{item?.name_english}</h3>
                </div>
                <div className={stl.card__content__info}>
                    <p>
                        {item?.first_year === item?.last_year
                            ? item?.first_year
                            : `${item?.first_year} - ${item?.last_year}`}
                    </p>
                    <p>
                        {item?.total_releases} сезона • {item?.total_episodes} эпизода
                    </p>
                    <p className={stl.card__content__info__description}>
                        {formatDuration(item?.total_duration_in_seconds)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FranchisesCard;
