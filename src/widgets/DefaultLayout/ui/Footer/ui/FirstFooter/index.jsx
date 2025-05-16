import React from 'react';

import Navigation from './ui/Navigation';
import User from './ui/User';

import stl from './index.module.scss';

const FirstFooter = () => {
    return (
        <footer className={stl.footer}>
            <div className='container'>
                <div className={stl.footer__wrapper}>
                    <div className={stl.footer__wrapper__img}>
                        <img
                            width='75px'
                            height='75px'
                            src='https://anilibria.top/static/favicon.svg?v=74c785bd6cf5'
                            alt='main logo'
                            style={{
                                color: '#fe3635',
                            }}
                        />
                        <div className={stl.footer__wrapper__img__text}>
                            <h2>AniLibria</h2>
                            <p>Так звучит аниме!</p>
                            <p>Перевод и озвучивание на русский язык аниме-сериалов и не только</p>
                            <p>Спасибо, что выбираете нас!</p>
                        </div>
                    </div>
                    <Navigation />
                    <User />
                </div>
            </div>
        </footer>
    );
};

export default FirstFooter;
