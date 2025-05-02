import axios from 'axios';

import ApiPath from '@/shared/constans/ApiPath/index.js';

const HomeApi = () => {
    const fetchLatestReleases = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.latestReleases}?limit=4`);

            return data;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        fetchLatestReleases,
    };
};

export default HomeApi;
