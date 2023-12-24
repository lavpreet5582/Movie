import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzc3NTAxMDNlYWE2ZmJmMGNiY2Y4ZjE2ZjRiNjdjZCIsInN1YiI6IjYxZDU1ZjIzYzE1Zjg5MDA0MGMzYTkzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s5-wfq_Rtam2-ku5jtXAXlCp5I-wcBH8-F_EELFcjlw";
const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const fetchFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params });
        return data;
    } catch (error) {
        console.error(error);
    }
}