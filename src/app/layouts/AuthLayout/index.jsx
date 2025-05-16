import { Outlet, useLocation } from 'react-router-dom';

import stl from './index.module.scss';

import { authLayoutBg } from '@/widgets/Authlayout/index.js';

const AuthLayout = () => {
    const location = useLocation();

    return (
        <div
            className={stl.auth}
            style={{
                background: `url(${authLayoutBg[location.pathname]}) center / cover no-repeat `,
            }}
        >
            <div className={stl.overlay} />
            <div className={stl.auth__content}>
                <div />
                <div className={stl.auth__page}>
                    <Outlet />
                </div>
            </div>
        </div>
      //----------------------------------------------------------------------------
        // <div className={stl.auth}>
        //     <div
        //         className={stl.auth__img}
        //         style={{
        //             background: `url(${authLayoutBg[location.pathname]}) center / cover no-repeat `,
        //         }}
        //     >
        //         <div className={stl.overlay} />
        //     </div>
        //     <div className={stl.auth__content}>
        //         <div />
        //         <div className={stl.auth__page}>
        //             <Outlet />
        //         </div>
        //     </div>
        // </div>
    );
};

export default AuthLayout;
