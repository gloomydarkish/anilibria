import { mdiAccount, mdiCog, mdiFilmstripBoxMultiple, mdiMagnify, mdiYoutube } from '@mdi/js';
import Icon from '@mdi/react';

import RoutePath from '@/shared/constans/RoutePath/index.js';
export const NAV_ITEMS = [
    {
        title: 'Релизы',
        to: RoutePath.CATALOG,
    },
    {
        title: 'Расписание',
        to: '#',
    },
    {
        title: 'Приложение',
        to: '#',
    },
    {
        title: 'Поддержать проект',
        to: '#',
    },
];

export const OPTIONS__ITEMS = [
    {
        icon: <Icon size='18px' path={mdiFilmstripBoxMultiple} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiMagnify} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiCog} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiAccount} />,
        to: RoutePath.AUTH.LOGIN(),
    },
];

export const NAVIGATIONS__ITEMS = [
    {
        title: 'Главная',
        to: RoutePath.HOME,
    },
    {
        title: 'Релизы',
        to: RoutePath.CATALOG,
    },
    {
        title: 'Расписание',
        to: '#',
    },
    {
        title: 'Приложение',
        to: '#',
    },
    {
        title: 'Поддержать проект',
        to: '#',
    },
    {
        title: 'Франшизы',
        to: '#',
    },
    {
        title: 'Жанры',
        to: '#',
    },
    {
        title: 'Торренты',
        to: '#',
    },
];

export const USERS__ITEMS = [
    {
        title: 'Авторизация',
        to: '#',
    },
    {
        title: 'Регистрация',
        to: RoutePath.AUTH,
    },
    {
        title: 'Настройки',
        to: '#',
    },
    {
        title: 'Восстановить пароль',
        to: '#',
    },
    {
        title: 'Правила',
        to: '#',
    },
    {
        title: 'Техническая поддержка',
        to: '#',
    },
    {
        title: 'Документация API v1',
        to: '#',
    },
    {
        title: 'Мониторинг сервисов',
        to: '#',
    },
];

export const LAST__FOOTERS_ITEMS = [
    {
        icon: <Icon size='18px' path={mdiYoutube} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiYoutube} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiYoutube} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiYoutube} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiYoutube} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiYoutube} />,
        to: '#',
    },
];
