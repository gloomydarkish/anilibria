import AuthLayout from '@/app/layouts/AuthLayout/index.jsx';
import Login from '@/pages/Auth/Login/index.jsx';
import Registration from '@/pages/Auth/Registration/index.jsx';
import RoutePath from '@/shared/constans/RoutePath/index.js';

export default [
  {
    path: RoutePath.AUTH.PREFIX,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: RoutePath.AUTH.LOGIN(),
        element: <Login />,
      },
      {
        index: true,
        path: RoutePath.AUTH.REGISTRATION(),
        element: <Registration />,
      },
    ],
  },
];
