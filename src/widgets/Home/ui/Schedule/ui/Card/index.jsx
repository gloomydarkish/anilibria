import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mdiPlayCircleOutline, mdiPlaylistPlus } from '@mdi/js';
import Icon from '@mdi/react';

import stl from './index.module.scss';

import { BASE_ASSETS_PATH } from '@/shared/constans/ApiPath';

const ScheduleCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    const imagePath = `${BASE_ASSETS_PATH}${item?.release?.poster?.src}`;

    const formatDuration = (seconds) => {
        if (!seconds || typeof seconds !== 'number') return '—';
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const duration = item?.published_release_episode?.duration
        ? formatDuration(item.published_release_episode.duration)
        : '—';

    return (
        <div
            className={stl.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={stl.card__wrapper}
                style={{
                    backgroundImage: isHovered ? `url(${imagePath})` : 'none',
                }}
            >
                {isHovered && <div className={stl.overlay}></div>}

                <div className={stl.card__content}>
                    <h4>{item?.release?.name?.main}</h4>
                    <p>Эпизод {item?.published_release_episode?.ordinal}</p>
                    <p>
                        {item?.release?.year} • {item?.release?.season?.description} •{' '}
                        {item?.release?.type?.description} • {item?.release?.age_rating?.label}
                    </p>
                    <p>
                        {item?.release?.genres?.map((genre, idx) => (
                            <span key={idx}>
                                {idx > 0 ? ' • ' : ''}
                                {genre.name}
                            </span>
                        ))}
                    </p>

                    <div className={stl.card__footer}>
                        <div className={stl.card__footer__btn}>
                            <NavLink to='#' className={stl.card__footer__btn__actions}>
                                <Icon path={mdiPlayCircleOutline} size={0.75} />
                                Смотреть
                            </NavLink>
                            <button>
                                <Icon path={mdiPlaylistPlus} size={1} color='#fff' />
                            </button>
                        </div>
                        {isHovered && <div className={stl.card__footer__duration}>{duration}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleCard;
