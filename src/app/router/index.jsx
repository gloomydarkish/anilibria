import { createBrowserRouter } from 'react-router-dom';

import Home from '../../pages/Home/index.jsx';
import DefaultLayout from '../layouts/DefaultLayout/index.jsx';

import { AuthPagesRoutes } from '@/app/router/pages/index.js';
import RoutePath from '@/shared/constans/RoutePath/index.js';

const router = createBrowserRouter([
    {
        path: RoutePath.HOME,
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                path: '',
                element: <Home />,
            },
        ],
    },
    ...AuthPagesRoutes,
]);

export default router;
