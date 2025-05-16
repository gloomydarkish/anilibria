import { NavLink } from 'react-router-dom';
import { mdiComment, mdiEye, mdiOpenInNew, mdiPlayCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';

import stl from './index.module.scss';

import { BASE_ASSETS_PATH } from '@/shared/constans/ApiPath/index.js';

export const VideosCard = ({ item }) => {
    const imagePath = `${BASE_ASSETS_PATH}${item?.image?.preview}`;

    return (
        <div className={stl.card}>
            <div
                className={stl.card__wrapper}
                style={{
                    background: `url(${imagePath}) center / cover no-repeat`,
                    overflow: 'hidden',
                }}
            ></div>
            <div className={stl.card__content}>
                <div>
                    <h4>{item?.title}</h4>
                    <p>{item?.origin?.title}</p>
                    <div className={stl.card__content__info}>
                        {item?.comments && (
                            <p>
                                <Icon
                                    path={mdiComment}
                                    size='16px'
                                    className={stl.card__content__info__icon}
                                />
                                {item?.comments}
                            </p>
                        )}

                        {item?.comments && item?.views && (
                            <span className={stl.card__content__info__span}> • </span>
                        )}

                        {item?.views && (
                            <p>
                                <Icon
                                    path={mdiEye}
                                    size='18px'
                                    className={stl.card__content__info__icon}
                                />
                                {item?.views}
                            </p>
                        )}
                    </div>
                </div>
                <div className={stl.card__content__footer}>
                    <NavLink to={item?.url} className={stl.card__content__footer__actions}>
                        <Icon path={mdiPlayCircleOutline} size='19px' />
                        Смотреть
                    </NavLink>
                    <button>
                        <Icon path={mdiOpenInNew} size='19px' color='#ffffff' />
                    </button>
                </div>
            </div>
        </div>
    );
};
