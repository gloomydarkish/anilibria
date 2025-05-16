import React from 'react';

import stl from './index.module.scss';

import FirstFooter from '@/widgets/DefaultLayout/ui/Footer/ui/FirstFooter/index.jsx';
import LastFooter from '@/widgets/DefaultLayout/ui/Footer/ui/LastFooter/index.jsx';

const DefaultLayoutFooter = () => {
    return (
        <footer
            className={stl.footer}
            style={{
                background: '#212121',
            }}
        >
            <div className={stl.footer__wrapper}>
                <FirstFooter />
                <div className='container'>
                    <div className={stl.footer__wrapper__line}></div>
                </div>
                <LastFooter />
            </div>
        </footer>
    );
};

export default DefaultLayoutFooter;
