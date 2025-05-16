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

    const fetchReleasesSchedule = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.scheduleReleases}`);

            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const fetchVideos = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.videos}?limit=4`);

            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const fetchFranchises = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.franchises}?limit=3`);

            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const fetchGenres = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.genres}?limit=6`);

            return data;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        fetchLatestReleases,
        fetchReleasesSchedule,
        fetchVideos,
        fetchFranchises,
        fetchGenres,
    };
};

export default HomeApi;
