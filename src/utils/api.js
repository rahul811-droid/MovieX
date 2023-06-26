import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDZhYmJlYTYyMjQ4MjM4MTRkNjRiZTNhOWYzYTFmNCIsInN1YiI6IjY0OTcxMmZlYmJkMGIwMDEyNTJhOWEzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1I3IRlk9VCK-NXToWHFS0-W6S8VnjoMo516h-KyCUhg";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};