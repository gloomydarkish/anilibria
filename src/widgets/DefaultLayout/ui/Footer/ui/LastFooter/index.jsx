import React from 'react';

import stl from './index.module.scss';
import SocialNetworks from '@/widgets/DefaultLayout/ui/Footer/ui/LastFooter/ui/SocialNetworks/index.jsx';

const LastFooter = () => {
    return (
        <div className={stl.footer}>
            <div className='container'>
                <div className={stl.footer__wrapper}>
                    <div className={stl.footer__wrapper__text}>
                        <p>
                            Весь материал на сайте представлен исключительно для домашнего
                            ознакомительного просмотра
                        </p>
                        <p>
                            В случаях нарушения авторских прав — обращайтесь на почту:{' '}
                            <span>copyrights@anilibria.top</span>
                        </p>
                        <p>
                            Для связи с нами по вопросам рекламы и сотрудничества:{' '}
                            <span>contact@anilibria.top</span>
                        </p>
                        <div className={stl.footer__wrapper__text__p}>
                            <p>© 2012 — 2025 • AniLibria</p>
                        </div>
                    </div>
                    <SocialNetworks />
                </div>
                <h5 className={stl.footer__h5}>KG • Kyrgyzstan</h5>
            </div>
        </div>
    );
};

export default LastFooter;
