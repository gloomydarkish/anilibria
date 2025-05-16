import { Outlet } from 'react-router-dom';

import DefaultLayoutHeader from '../../../widgets/DefaultLayout/ui/Header';

import stl from './index.module.scss';

import DefaultLayoutFooter from '@/widgets/DefaultLayout/ui/Footer/index.jsx';

const DefaultLayout = () => {
    return (
        <div className={stl.root}>
            <DefaultLayoutHeader />
            <Outlet />
            <DefaultLayoutFooter />
        </div>
    );
};

export default DefaultLayout;
