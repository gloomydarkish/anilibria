import { Outlet } from 'react-router-dom';

import DefaultLayoutHeader from '../../../widgets/DefaultLayout/ui/Header';

import stl from './index.module.scss';

const DefaultLayout = () => {
    return (
        <div className={stl.root}>
            <DefaultLayoutHeader />
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
