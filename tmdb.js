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

    // Extract Providers
    const providers = [];
    if (tmdbMovie['watch/providers'] && tmdbMovie['watch/providers'].results && tmdbMovie['watch/providers'].results.US) {
        const us = tmdbMovie['watch/providers'].results.US;
        if (us.flatrate) us.flatrate.forEach(p => providers.push(p.provider_id));
        if (us.rent) us.rent.forEach(p => providers.push(p.provider_id));
        if (us.buy) us.buy.forEach(p => providers.push(p.provider_id));
    }
    const uniqueProviders = [...new Set(providers)];

    return {
        id: tmdbMovie.id,
        title: tmdbMovie.title || tmdbMovie.name,
        year: (tmdbMovie.release_date || tmdbMovie.first_air_date) ? (tmdbMovie.release_date || tmdbMovie.first_air_date).split('-')[0] : 'N/A',
        rating: tmdbMovie.vote_average ? tmdbMovie.vote_average.toFixed(1) : 'N/A',
        poster: tmdbMovie.poster_path ? `${TMDB_IMAGE_BASE}w500${tmdbMovie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster',
        backdrop: tmdbMovie.backdrop_path ? `${TMDB_IMAGE_BASE}original${tmdbMovie.backdrop_path}` : null,
        desc: tmdbMovie.overview || "No description available.",
        runtime: tmdbMovie.runtime ? `${Math.floor(tmdbMovie.runtime / 60)}h ${tmdbMovie.runtime % 60}m` : 'N/A',
        popularity: tmdbMovie.popularity || 0,
        release_date: tmdbMovie.release_date || tmdbMovie.first_air_date || '1900-01-01',
        runtime_mins: tmdbMovie.runtime || 0,
        genres: tmdbMovie.genres ? tmdbMovie.genres.map(g => g.name) : [],
        genre_ids: tmdbMovie.genre_ids ? tmdbMovie.genre_ids : (tmdbMovie.genres ? tmdbMovie.genres.map(g => g.id) : []),
        provider_ids: uniqueProviders
    };
}

// Fetch deeper details for a list of items (max 15)
async function fetchExtendedDetails(items) {
    if (!items || items.length === 0) return [];
    return Promise.all(
        items.map(async (m) => {
            const details = await tmdbFetch(`/movie/${m.id}`, { append_to_response: 'watch/providers' });
            if (!details) return m;
            return mapMovieData(details); // Map the extended details fully
        })
    );
}

// ----- Public API Functions -----

async function getTrendingMovies(limit = 15) {
    const data = await tmdbFetch('/trending/movie/week');
    if (!data || !data.results) return null;
    return data.results.slice(0, limit).map(mapMovieData);
}

async function getNowPlayingMovies(limit = 15) {
    const data = await tmdbFetch('/movie/now_playing');
    if (!data || !data.results) return null;
    return data.results.slice(0, limit).map(mapMovieData);
}

async function getTopRatedMovies(limit = 15) {
    const data = await tmdbFetch('/movie/top_rated');
    if (!data || !data.results) return null;
    return data.results.slice(0, limit).map(mapMovieData);
}

async function searchTMDB(query) {
    // Multi search allows finding actors/directors and returning their known_for
    const data = await tmdbFetch('/search/multi', { query: query, include_adult: false });
    if (!data || !data.results) return null;

    let movies = [];
    data.results.forEach(item => {
        if (item.media_type === 'movie') {
            movies.push(item);
        } else if (item.media_type === 'person' && item.known_for) {
            item.known_for.forEach(media => {
                if (media.media_type === 'movie') {
                    movies.push(media);
                }
            });
        }
    });

    // Remove duplicates based on ID
    const uniqueMoviesMap = new Map();
    movies.forEach(m => uniqueMoviesMap.set(m.id, m));
    const uniqueMovies = Array.from(uniqueMoviesMap.values());

    return uniqueMovies.slice(0, 15).map(mapMovieData);
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
