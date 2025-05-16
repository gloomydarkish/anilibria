import React from 'react';
import { NavLink } from 'react-router-dom';

import stl from './index.module.scss';

import { MainLogo, MainLogoWhite } from '@/app/assets/icons/index.js';
import RoutePath from '@/shared/constans/RoutePath/index.js';
import { LoginForm } from '@/widgets/Auth/Login/ui/LoginForm/index.jsx';

const Login = () => {
    return (
        <div className='container'>
            <div className={`${stl.wrapper} page`}>
                <div className={stl.text_content}>
                    <NavLink to={RoutePath.HOME}>
                        {/*<img*/}
                        {/*    width='70'*/}
                        {/*    height='70'*/}
                        {/*    src={MainLogoWhite}*/}
                        {/*    alt='main logo'*/}
                        {/*/>*/}
                        {/*---------------------------------------------------------------------------*/}
                        <img
                            width='70'
                            height='70'
                            src='https://anilibria.top/static/favicon.svg?v=74c785bd6cf5'
                            alt='main logo'
                            style={{
                                filter: 'brightness(0) invert(1)',
                            }}
                        />
                    </NavLink>
                    <h2 className={stl.title}>Авторизация</h2>
                    <p className={stl.subtitle}>
                        Введите имя пользователя и пароль, чтобы войти в свою учетную запись
                    </p>
                    <p className={stl.subtitle}>
                        Также, можно авторизоваться через социальные сети
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
