const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/';

function getApiKey() {
    return localStorage.getItem('movie_api_key');
}

async function tmdbFetch(endpoint, params = {}) {
    const apiKey = getApiKey();
    if (!apiKey) {
        console.warn("No TMDB API Key found. Please add it via the secret modal.");
        return null;
    }

    const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
    url.searchParams.append('api_key', apiKey);

    for (const [key, value] of Object.entries(params)) {
        url.searchParams.append(key, value);
    }

    try {
        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error(`TMDB API Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("TMDB Fetch Error:", error);
        return null;
    }
}

// Map TMDB structure to our app structure
function mapMovieData(tmdbMovie) {
    if (!tmdbMovie) return null;
    return {
        id: tmdbMovie.id,
        title: tmdbMovie.title,
        year: tmdbMovie.release_date ? tmdbMovie.release_date.split('-')[0] : 'N/A',
        rating: tmdbMovie.vote_average ? tmdbMovie.vote_average.toFixed(1) : 'N/A',
        poster: tmdbMovie.poster_path ? `${TMDB_IMAGE_BASE}w500${tmdbMovie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster',
        backdrop: tmdbMovie.backdrop_path ? `${TMDB_IMAGE_BASE}original${tmdbMovie.backdrop_path}` : null,
        desc: tmdbMovie.overview || "No description available.",
        runtime: tmdbMovie.runtime ? `${Math.floor(tmdbMovie.runtime / 60)}h ${tmdbMovie.runtime % 60}m` : 'N/A',
    };
}

// ----- Public API Functions -----

async function getTrendingMovies() {
    const data = await tmdbFetch('/trending/movie/week');
    if (!data || !data.results) return null;
    // Return top 4 for trending
    return data.results.slice(0, 4).map(mapMovieData);
}

async function searchTMDB(query) {
    const data = await tmdbFetch('/search/movie', { query: query, include_adult: false });
    if (!data || !data.results) return null;
    // Return top 15 results
    return data.results.slice(0, 15).map(mapMovieData);
}

async function getMovieDetailsAPI(id) {
    const movieData = await tmdbFetch(`/movie/${id}`);
    const creditsData = await tmdbFetch(`/movie/${id}/credits`);

    if (!movieData) return null;

    const mapped = mapMovieData(movieData);

    if (creditsData && creditsData.crew) {
        // Find director
        const director = creditsData.crew.find(c => c.job === 'Director');
        mapped.director = director ? director.name : 'Unknown';

        // Map cast (top 8)
        mapped.cast = creditsData.cast.slice(0, 8).map(c => ({
            name: c.name,
            role: c.character,
            img: c.profile_path ? `${TMDB_IMAGE_BASE}w200${c.profile_path}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=111&color=fff`
        }));
    }

    return mapped;
}
