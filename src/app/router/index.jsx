import { createBrowserRouter } from 'react-router-dom';

import Home from '../../pages/Home/index.jsx';
import DefaultLayout from '../layouts/DefaultLayout/index.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                path: '',
                element: <Home />,
            },
        ],
    },
]);

export default router;
