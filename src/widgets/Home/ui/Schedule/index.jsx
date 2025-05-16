import React, { useEffect, useState } from 'react';

import stl from './index.module.scss';

import HomeApi from '@/enitities/home/model/api/index.js';
import RoutePath from '@/shared/constans/RoutePath/index.js';
import SectionTitle from '@/shared/ui/SectionTitle/index.jsx';
import ScheduleCard from '@/widgets/Home/ui/Schedule/ui/Card/index.jsx';

export const Schedule = () => {
    const { fetchReleasesSchedule } = HomeApi();
    const [schedule, setSchedule] = useState([]);

    const getReleasesSchedule = async () => {
        const data = await fetchReleasesSchedule();

        // console.log(data);

        setSchedule(data.today);
    };

    useEffect(() => {
        getReleasesSchedule();
    }, []);

    return (
        <div className={stl.schedule}>
            <SectionTitle
                to={RoutePath.CATALOG}
                title='Расписание релизов'
                subtitle='Список релизов, над которыми команда трудится прямо сейчас'
            />
            <div className={stl.schedule__wrapper}>
                {schedule.length > 0 &&
                    schedule.map((item, idx) => <ScheduleCard key={idx} item={item} />)}
            </div>
        </div>
    );
};
