import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mdiPlayCircleOutline, mdiPlaylistPlus } from '@mdi/js';
import Icon from '@mdi/react';

import stl from './index.module.scss';

import { BASE_ASSETS_PATH } from '@/shared/constans/ApiPath/index.js';

const ReleasesCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    const imagePath = `${BASE_ASSETS_PATH}${item?.poster?.src}`;

    const handleMouseChange = (value) => {
        setIsHovered(value);
    };

    return (
        <div
            className={stl.card}
            onMouseEnter={() => handleMouseChange(true)}
            onMouseLeave={() => handleMouseChange(false)}
        >
            {isHovered ? (
                <div
                    className={stl.card__wrapper}
                    style={{
                        background: `url(${imagePath}) center / cover no-repeat`,
                    }}
                >
                    <div className={stl.card__content}>
                        <div className={stl.card__head}>
                            <h5>{item?.episodes_total} эпизод</h5>
                        </div>
                        <div className={stl.card__body}>
                            <h4>{item?.name?.main}</h4>
                        </div>
                        <div className={stl.card__footer}>
                            <div className={stl.card__footer__info}>
                                <h3>
                                    {item?.year} • {item?.season?.description} •{' '}
                                    {item?.type?.description} • {item?.age_rating?.label}
                                </h3>
                                <p>
                                    {item?.genres?.map((genre, idx) => (
                                        <span key={idx}>
                                            {idx >= 1 ? ` • ${genre?.name}` : genre?.name}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <div className={stl.card__footer__actions}>
                                <NavLink className={stl.card__footer__actions__link} to={'#'}>
                                    <Icon path={mdiPlayCircleOutline} size={0.75} />
                                    Смотреть
                                </NavLink>
                                <button>
                                    <Icon path={mdiPlaylistPlus} size={1} color='#ffffff' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <img src={imagePath} alt={item?.name?.main || 'Постер'} />
            )}
        </div>
    );
};

export default ReleasesCard;
