const mockDatabase = [
    {
        id: 1,
        title: "Blade Runner 2049",
        year: "2017",
        director: "Denis Villeneuve",
        rating: "8.8",
        runtime: "2h 44m",
        poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/ilRyazdflIgEqO5VDlsmQaTfqts.jpg",
        desc: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.",
        cast: [
            { name: "Ryan Gosling", role: "Officer K", img: "https://image.tmdb.org/t/p/w200/nraZoTzwJQPHspAVsKfgl3RXKKa.jpg" },
            { name: "Harrison Ford", role: "Rick Deckard", img: "https://image.tmdb.org/t/p/w200/5M7oN3sznp99hWYQ9sX0xheswWX.jpg" },
            { name: "Ana de Armas", role: "Joi", img: "https://image.tmdb.org/t/p/w200/vHkJEzHChm00A1N77cWnj80q9q6.jpg" },
            { name: "Sylvia Hoeks", role: "Luv", img: "https://image.tmdb.org/t/p/w200/1X1QzE0X8bFqJ10fH8y9T144GZz.jpg" },
            { name: "Jared Leto", role: "Niander Wallace", img: "https://image.tmdb.org/t/p/w200/fRjcJzEQHExqXXs02C9z4qG2Ifc.jpg" }
        ]
    },
    {
        id: 2,
        title: "Blade Runner",
        year: "1982",
        director: "Ridley Scott",
        rating: "8.1",
        runtime: "1h 57m",
        poster: "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7E0AecdHNC6yK8jL.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/m11PEIlCLKGnjGChK4D2hR1wT4F.jpg",
        desc: "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
        cast: [
            { name: "Harrison Ford", role: "Rick Deckard", img: "https://image.tmdb.org/t/p/w200/5M7oN3sznp99hWYQ9sX0xheswWX.jpg" },
            { name: "Rutger Hauer", role: "Roy Batty", img: "https://image.tmdb.org/t/p/w200/nxP2o2tK2HjItyo356sIID9eHyo.jpg" },
            { name: "Sean Young", role: "Rachael", img: "https://image.tmdb.org/t/p/w200/tK8G1XWabkQEMa9VfHksrW8M3E0.jpg" }
        ]
    },
    {
        id: 3,
        title: "Dune",
        year: "2021",
        director: "Denis Villeneuve",
        rating: "8.0",
        runtime: "2h 35m",
        poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/jYEW5xZkptmrtrmlya9MLqiKFf.jpg",
        desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
        cast: [
            { name: "Timothée Chalamet", role: "Paul Atreides", img: "https://image.tmdb.org/t/p/w200/bznPTK14EJMhOWOag9RXXx8yGht.jpg" },
            { name: "Rebecca Ferguson", role: "Lady Jessica", img: "https://image.tmdb.org/t/p/w200/61uA1U5lW2nKxH4nweG61h4v42t.jpg" },
            { name: "Oscar Isaac", role: "Duke Leto Atreides", img: "https://image.tmdb.org/t/p/w200/dpxmq4O1oT0oI7r3YI1QyA5L9Cj.jpg" }
        ]
    },
    {
        id: 4,
        title: "Dune: Part Two",
        year: "2024",
        director: "Denis Villeneuve",
        rating: "8.8",
        runtime: "2h 46m",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2TDpiD98.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
        desc: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
        cast: [
            { name: "Timothée Chalamet", role: "Paul Atreides", img: "https://image.tmdb.org/t/p/w200/bznPTK14EJMhOWOag9RXXx8yGht.jpg" },
            { name: "Zendaya", role: "Chani", img: "https://image.tmdb.org/t/p/w200/bWj13k87Xq1EAMdZ4bFhEOrZtyN.jpg" },
            { name: "Rebecca Ferguson", role: "Lady Jessica", img: "https://image.tmdb.org/t/p/w200/61uA1U5lW2nKxH4nweG61h4v42t.jpg" }
        ]
    },
    {
        id: 5,
        title: "Oppenheimer",
        year: "2023",
        director: "Christopher Nolan",
        rating: "8.1",
        runtime: "3h 0m",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/rMZDeRjQkPjFqZ3qg1Z99g3G8Fv.jpg",
        desc: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        cast: [
            { name: "Cillian Murphy", role: "J. Robert Oppenheimer", img: "https://image.tmdb.org/t/p/w200/A0tqEnXqM84XqH1OONKEMW1F97A.jpg" },
            { name: "Emily Blunt", role: "Kitty Oppenheimer", img: "https://image.tmdb.org/t/p/w200/nPJXaRMvu1hifa6Y1sM4x5W17s2.jpg" },
            { name: "Matt Damon", role: "Leslie Groves", img: "https://image.tmdb.org/t/p/w200/7aE3N12zRkKkUlyyL2Wk2U1X4U0.jpg" }
        ]
    },
    {
        id: 6,
        title: "Poor Things",
        year: "2023",
        director: "Yorgos Lanthimos",
        rating: "7.9",
        runtime: "2h 21m",
        poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8PhnOIdXPr1jxW2n2.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/bQS43HSLZzMjZkcBT24Sqsj2NMv.jpg",
        desc: "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents.",
        cast: [
            { name: "Emma Stone", role: "Bella Baxter", img: "https://image.tmdb.org/t/p/w200/xXKu1PjtoA0wV2pZ9vTzW6cOQ0K.jpg" },
            { name: "Mark Ruffalo", role: "Duncan Wedderburn", img: "https://image.tmdb.org/t/p/w200/z3dvKqMNDQWCRNPTX2gG5nQOQ1p.jpg" },
            { name: "Willem Dafoe", role: "Godwin Baxter", img: "https://image.tmdb.org/t/p/w200/tCDBnF8zH2jY9wS5N6r1t8jU31W.jpg" }
        ]
    },
    {
        id: 7,
        title: "Past Lives",
        year: "2023",
        director: "Celine Song",
        rating: "8.0",
        runtime: "1h 45m",
        poster: "https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/14QS2q1L78p1j3Qn1tQp1T4R8P.jpg",
        desc: "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea. Two decades later, they are reunited in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life.",
        cast: [
            { name: "Greta Lee", role: "Nora", img: "https://image.tmdb.org/t/p/w200/k1g3s982P6lQ9519AqyOQ2L2C0K.jpg" },
            { name: "Teo Yoo", role: "Hae Sung", img: "https://image.tmdb.org/t/p/w200/sF8a4D0KRY6S9Dk0T1p5J8FpD1O.jpg" },
            { name: "John Magaro", role: "Arthur", img: "https://image.tmdb.org/t/p/w200/r9Wk3xL0iWQ7VqQG0ZpQYxP0G9v.jpg" }
        ]
    },
    {
        id: 8,
        title: "The Zone of Interest",
        year: "2023",
        director: "Jonathan Glazer",
        rating: "7.8",
        runtime: "1h 45m",
        poster: "https://image.tmdb.org/t/p/w500/A31lX5xL7Nlqgq6UaM5S0bBXX7a.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/6J9xHjZkC9U9Hq9eQvD5O8mD1X.jpg",
        desc: "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
        cast: [
            { name: "Christian Friedel", role: "Rudolf Höss", img: "https://image.tmdb.org/t/p/w200/o72U1FMyT7T0I2w7p1w2U60m32N.jpg" },
            { name: "Sandra Hüller", role: "Hedwig Höss", img: "https://image.tmdb.org/t/p/w200/w7nJ40U9h2xK2xZ6oH143Q5cZ7F.jpg" }
        ]
    },
    {
        id: 9,
        title: "The Dark Knight",
        year: "2008",
        director: "Christopher Nolan",
        rating: "9.0",
        runtime: "2h 32m",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
        desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        cast: [
            { name: "Christian Bale", role: "Bruce Wayne / Batman", img: "https://image.tmdb.org/t/p/w200/b7fTC9WFkgqGOv77mLQ3w2mH12z.jpg" },
            { name: "Heath Ledger", role: "Joker", img: "https://image.tmdb.org/t/p/w200/50y1Dq8XhVl1G2hA0oWp4Sg9o9q.jpg" },
            { name: "Aaron Eckhart", role: "Harvey Dent", img: "https://image.tmdb.org/t/p/w200/kt3r0Nf1kGqX1v2p0m6f9B8qP4f.jpg" }
        ]
    },
    {
        id: 10,
        title: "Parasite",
        year: "2019",
        director: "Bong Joon Ho",
        rating: "8.6",
        runtime: "2h 12m",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoZPhKvOFzEw.jpg",
        desc: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        cast: [
            { name: "Song Kang-ho", role: "Ki Taek", img: "https://image.tmdb.org/t/p/w200/kQ3G9PME0sR8X4vT8iQh9q2hN0A.jpg" },
            { name: "Lee Sun-kyun", role: "Dong Ik", img: "https://image.tmdb.org/t/p/w200/c9XW0z0g5c0zP6p5R5f4m4O9w0.jpg" },
            { name: "Cho Yeo-jeong", role: "Yeon Kyo", img: "https://image.tmdb.org/t/p/w200/pK9o0p6t4pZ1p2Q5O7Q5Vn7Q0Q5.jpg" }
        ]
    }
];

// --- Auth System & Cloud Sync ---
function getCurrentUser() {
    return localStorage.getItem('filmago_current_user') || 'guest';
}

function getToken() {
    return localStorage.getItem('filmago_token');
}

async function loginUserAPI(username, password) {
    try {
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);

        localStorage.setItem('filmago_token', data.token);
        localStorage.setItem('filmago_current_user', data.username);

        // Fetch all user data down from cloud!
        await syncDataFromCloud();
        return true;
    } catch (err) {
        alert(err.message);
        return false;
    }
}

async function signupUserAPI(username, email, password) {
    try {
        const res = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);

        localStorage.setItem('filmago_token', data.token);
        localStorage.setItem('filmago_current_user', data.username);

        // Initialize basic profile for new user locally
        saveProfile({
            name: username,
            bio: 'A brand new Filmago member.',
            avatar: `https://ui-avatars.com/api/?name=${username}&background=FF4500&color=fff`
        });

        return true;
    } catch (err) {
        alert(err.message);
        return false;
    }
}

function logoutUser() {
    localStorage.removeItem('filmago_token');
    localStorage.removeItem('filmago_current_user');
    window.location.href = 'index.html';
}

function getUserKey(baseKey) {
    const user = getCurrentUser();
    return `${baseKey}_${user}`;
}

async function syncDataFromCloud() {
    const token = getToken();
    if (!token) return;
    try {
        const res = await fetch('http://localhost:3000/api/user/data', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
            const data = await res.json();
            for (const [key, value] of Object.entries(data)) {
                localStorage.setItem(getUserKey(key), JSON.stringify(value));
            }
        }
    } catch (e) {
        console.error("Cloud sync failed", e);
    }
}

// --- Local Storage Diary Functions ---

function getDiary() {
    const raw = localStorage.getItem(getUserKey('filmago_diary'));
    if (!raw) return [];
    return JSON.parse(raw);
}

function saveToDiary(movie, rating, liked, date, review) {
    const diary = getDiary();

    if (typeof removeFromWatchlist === "function") {
        removeFromWatchlist(movie.id);
    }

    const entry = {
        movie: movie,
        rating: rating,
        liked: liked,
        date: date,
        review: review,
        logDate: new Date().toISOString()
    };

    // Add to beginning of array (most recent first)
    diary.unshift(entry);
    setToStorage('filmago_diary', diary);
    return entry;
}

function removeDiaryEntry(logDate) {
    const diary = getDiary();
    const updated = diary.filter(d => d.logDate !== logDate);
    setToStorage('filmago_diary', updated);
}

// --- Watchlist / Favorites / Profile Helpers ---
function getFromStorage(baseKey, fallback) {
    const raw = localStorage.getItem(getUserKey(baseKey));
    if (!raw) return fallback;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return fallback;
    }
}

function setToStorage(baseKey, value) {
    localStorage.setItem(getUserKey(baseKey), JSON.stringify(value));

    // Background optimistic cloud sync
    const token = getToken();
    if (token && token !== 'undefined' && token !== 'null') {
        fetch('http://localhost:3000/api/user/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ key: baseKey, value: value })
        }).catch(err => console.error("Cloud push failed"));
    }
}

function getWatchlist() {
    const raw = localStorage.getItem(getUserKey('filmago_watchlist'));
    if (!raw) return [];
    return JSON.parse(raw);
}

function saveWatchlist(list) {
    setToStorage('filmago_watchlist', list);
}

function addToWatchlist(movie) {
    const list = getWatchlist();
    if (!list.find(m => m.id == movie.id)) {
        list.unshift({ id: movie.id, title: movie.title, year: movie.year, poster: movie.poster });
        saveWatchlist(list);
    }
}

function removeFromWatchlist(movieId) {
    const list = getWatchlist().filter(m => m.id != movieId);
    saveWatchlist(list);
}

function isInWatchlist(movieId) {
    return getWatchlist().some(m => m.id == movieId);
}

function getFavorites() {
    return getFromStorage('filmago_favorites', []);
}

function saveFavorites(list) {
    setToStorage('filmago_favorites', list);
}

function addToFavorites(movie) {
    let list = getFavorites();
    if (!list.find(m => m.id == movie.id)) {
        list.unshift({ id: movie.id, title: movie.title, year: movie.year, poster: movie.poster });
        if (list.length > 6) {
            list = list.slice(0, 6);
        }
        saveFavorites(list);
    }
}

function removeFromFavorites(movieId) {
    const list = getFavorites().filter(m => m.id != movieId);
    saveFavorites(list);
}

function isFavorite(movieId) {
    return getFavorites().some(m => m.id == movieId);
}

function getProfile() {
    const user = getCurrentUser();
    return getFromStorage('filmago_profile', {
        name: user !== 'guest' ? user : 'Guest',
        bio: 'A brand new Filmago member.',
        avatar: `https://ui-avatars.com/api/?name=${user !== 'guest' ? user : 'Guest'}&background=FF4500&color=fff`
    });
}

function saveProfile(profile) {
    setToStorage('filmago_profile', profile);
}


