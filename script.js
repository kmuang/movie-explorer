// Sample movie and TV series data
const mediaData = [
    // Trending
    {
        id: 1,
        title: 'Beyond Earth',
        year: 2019,
        category: 'Movie',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
        isTrending: true,
        isBookmarked: false
    },
    {
        id: 2,
        title: 'Bottom Gear',
        year: 2021,
        category: 'Movie',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
        isTrending: true,
        isBookmarked: false
    },
    {
        id: 3,
        title: 'Undiscovered Cities',
        year: 2019,
        category: 'TV Series',
        rating: 'E',
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
        isTrending: true,
        isBookmarked: false
    },

    // Recommended Movies
    {
        id: 4,
        title: 'The Great Lands',
        year: 2019,
        category: 'Movie',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 5,
        title: 'The Diary',
        year: 2019,
        category: 'TV Series',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 6,
        title: "Earth's Untouched",
        year: 2017,
        category: 'Movie',
        rating: '18+',
        image: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 7,
        title: 'No Land Beyond',
        year: 2019,
        category: 'Movie',
        rating: 'E',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 8,
        title: 'During the Hunt',
        year: 2016,
        category: 'TV Series',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 9,
        title: 'Autosport the Series',
        year: 2016,
        category: 'TV Series',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 10,
        title: 'Same Answer II',
        year: 2017,
        category: 'Movie',
        rating: 'E',
        image: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 11,
        title: 'Below Echo',
        year: 2016,
        category: 'TV Series',
        rating: '18+',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 12,
        title: 'The Rockies',
        year: 2015,
        category: 'TV Series',
        rating: 'E',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 13,
        title: 'Relentless',
        year: 2017,
        category: 'Movie',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 14,
        title: 'Community of Ours',
        year: 2018,
        category: 'TV Series',
        rating: '18+',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 15,
        title: 'Van Life',
        year: 2015,
        category: 'Movie',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 16,
        title: 'The Heiress',
        year: 2021,
        category: 'Movie',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 17,
        title: 'Off the Track',
        year: 2017,
        category: 'Movie',
        rating: '18+',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 18,
        title: 'Whispering Hill',
        year: 2017,
        category: 'Movie',
        rating: 'E',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 19,
        title: '112',
        year: 2019,
        category: 'TV Series',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 20,
        title: 'Lone Heart',
        year: 2017,
        category: 'Movie',
        rating: 'E',
        image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 21,
        title: 'Production Line',
        year: 2017,
        category: 'TV Series',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 22,
        title: 'Dogs',
        year: 2016,
        category: 'TV Series',
        rating: 'E',
        image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d2?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 23,
        title: 'Asia in 24 Days',
        year: 2020,
        category: 'TV Series',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 24,
        title: 'The Tasty Tour',
        year: 2016,
        category: 'TV Series',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 25,
        title: 'Darker',
        year: 2017,
        category: 'Movie',
        rating: '18+',
        image: 'https://images.unsplash.com/photo-1508002366005-75a695ee2d17?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 26,
        title: 'Unresolved Cases',
        year: 2018,
        category: 'TV Series',
        rating: '18+',
        image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 27,
        title: 'Mission: Saturn',
        year: 2017,
        category: 'Movie',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 28,
        title: '1998',
        year: 2021,
        category: 'Movie',
        rating: '18+',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    },
    {
        id: 29,
        title: 'Dark Side of the Moon',
        year: 2018,
        category: 'TV Series',
        rating: 'PG',
        image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&q=80',
        isTrending: false,
        isBookmarked: false
    }
];

// Load bookmarks and favorites from localStorage
let bookmarkedIds = JSON.parse(localStorage.getItem('bookmarks')) || [];
let favoritedIds = JSON.parse(localStorage.getItem('favorites')) || [];

mediaData.forEach(item => {
    if (bookmarkedIds.includes(item.id)) {
        item.isBookmarked = true;
    }
    item.isFavorited = favoritedIds.includes(item.id);
});

// Current filter state
let currentSection = 'home';
let searchQuery = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    setupEventListeners();
    updateFavoritesBadge();
});

// Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.currentTarget.dataset.section;
            navigateToSection(section);
        });
    });

    // Profile avatar click to show profile page
    const profileAvatar = document.querySelector('.profile-avatar-container');
    if (profileAvatar) {
        profileAvatar.addEventListener('click', () => {
            navigateToSection('profile');
        });
    }

    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderContent();
    });
}

// Navigation
function navigateToSection(section) {
    currentSection = section;

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === section) {
            btn.classList.add('active');
        }
    });

    // Show/hide sections
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(`${section}-section`).classList.add('active');

    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (section === 'movies') {
        searchInput.placeholder = 'Search for movies';
    } else if (section === 'tv-series') {
        searchInput.placeholder = 'Search for TV series';
    } else if (section === 'bookmarks') {
        searchInput.placeholder = 'Search for bookmarked shows';
    } else if (section === 'profile') {
        searchInput.placeholder = 'Search your collection';
    } else {
        searchInput.placeholder = 'Search for movies or TV series';
    }

    renderContent();
}

// Render content
function renderContent() {
    if (currentSection === 'home') {
        renderTrending();
        renderRecommended();
    } else if (currentSection === 'movies') {
        renderMovies();
    } else if (currentSection === 'tv-series') {
        renderTVSeries();
    } else if (currentSection === 'bookmarks') {
        renderBookmarks();
    } else if (currentSection === 'profile') {
        renderProfile();
    }
}

// Render trending
function renderTrending() {
    const container = document.getElementById('trending-container');
    const trending = filterData(mediaData.filter(item => item.isTrending));

    if (trending.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>No trending content found</h3></div>';
        return;
    }

    container.innerHTML = trending.map(item => createMediaCard(item, true)).join('');
    attachBookmarkListeners();
}

// Render recommended
function renderRecommended() {
    const container = document.getElementById('recommended-container');
    const recommended = filterData(mediaData.filter(item => !item.isTrending));

    if (recommended.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>No recommended content found</h3></div>';
        return;
    }

    container.innerHTML = recommended.map(item => createMediaCard(item)).join('');
    attachBookmarkListeners();
}

// Render movies
function renderMovies() {
    const container = document.getElementById('movies-container');
    const movies = filterData(mediaData.filter(item => item.category === 'Movie'));

    if (movies.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>No movies found</h3></div>';
        return;
    }

    container.innerHTML = movies.map(item => createMediaCard(item)).join('');
    attachBookmarkListeners();
}

// Render TV series
function renderTVSeries() {
    const container = document.getElementById('tv-series-container');
    const tvSeries = filterData(mediaData.filter(item => item.category === 'TV Series'));

    if (tvSeries.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>No TV series found</h3></div>';
        return;
    }

    container.innerHTML = tvSeries.map(item => createMediaCard(item)).join('');
    attachBookmarkListeners();
}

// Render bookmarks
function renderBookmarks() {
    const moviesContainer = document.getElementById('bookmarked-movies-container');
    const tvContainer = document.getElementById('bookmarked-tv-container');

    const bookmarkedMovies = filterData(mediaData.filter(item => item.isBookmarked && item.category === 'Movie'));
    const bookmarkedTV = filterData(mediaData.filter(item => item.isBookmarked && item.category === 'TV Series'));

    if (bookmarkedMovies.length === 0) {
        moviesContainer.innerHTML = '<div class="empty-state"><h3>No bookmarked movies</h3><p>Start bookmarking movies to see them here!</p></div>';
    } else {
        moviesContainer.innerHTML = bookmarkedMovies.map(item => createMediaCard(item)).join('');
    }

    if (bookmarkedTV.length === 0) {
        tvContainer.innerHTML = '<div class="empty-state"><h3>No bookmarked TV series</h3><p>Start bookmarking TV series to see them here!</p></div>';
    } else {
        tvContainer.innerHTML = bookmarkedTV.map(item => createMediaCard(item)).join('');
    }

    attachBookmarkListeners();
}

// Render profile page
function renderProfile() {
    // Update stats
    const favoritesCount = favoritedIds.length;
    const watchlistCount = bookmarkedIds.length;
    const totalCount = new Set([...favoritedIds, ...bookmarkedIds]).size;

    document.getElementById('favoritesCount').textContent = favoritesCount;
    document.getElementById('watchlistCount').textContent = watchlistCount;
    document.getElementById('totalCount').textContent = totalCount;

    // Render favorites
    const favoritesContainer = document.getElementById('profile-favorites-container');
    const favorites = filterData(mediaData.filter(item => item.isFavorited));

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<div class="empty-state"><h3>No favorites yet</h3><p>Click the ❤️ heart icon on any movie or TV series to add it to your favorites!</p></div>';
    } else {
        favoritesContainer.innerHTML = favorites.map(item => createMediaCard(item)).join('');
    }

    // Render watch list
    const watchlistContainer = document.getElementById('profile-watchlist-container');
    const watchlist = filterData(mediaData.filter(item => item.isBookmarked));

    if (watchlist.length === 0) {
        watchlistContainer.innerHTML = '<div class="empty-state"><h3>No items in watch list</h3><p>Click the bookmark icon to add movies and TV series to your watch list!</p></div>';
    } else {
        watchlistContainer.innerHTML = watchlist.map(item => createMediaCard(item)).join('');
    }

    attachBookmarkListeners();
}


// Filter data by search query
function filterData(data) {
    if (!searchQuery) return data;
    return data.filter(item => item.title.toLowerCase().includes(searchQuery));
}

// Toggle favorite
function toggleFavorite(id) {
    const item = mediaData.find(m => m.id === id);
    if (item) {
        item.isFavorited = !item.isFavorited;

        // Update localStorage
        if (item.isFavorited) {
            favoritedIds.push(id);
        } else {
            favoritedIds = favoritedIds.filter(fid => fid !== id);
        }
        localStorage.setItem('favorites', JSON.stringify(favoritedIds));

        // Update badge
        updateFavoritesBadge();

        // Re-render current section
        renderContent();
    }
}

// Update favorites badge count
function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesBadge');
    if (badge) {
        const count = favoritedIds.length;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'block' : 'none';
    }
}

// Show favorites when profile is clicked
function showFavorites() {
    const favoritedItems = mediaData.filter(item => item.isFavorited);

    if (favoritedItems.length === 0) {
        alert('You haven\'t favorited any movies or TV series yet!\n\nClick the heart icon on any card to add it to your favorites.');
        return;
    }

    const titles = favoritedItems.map(item => `❤️ ${item.title} (${item.year})`).join('\n');
    alert(`Your Favorites (${favoritedItems.length}):\n\n${titles}`);
}

// Create media card HTML
function createMediaCard(item, isTrending = false) {
    const categoryIcon = item.category === 'Movie'
        ? '<svg class="media-icon" viewBox="0 0 20 20" fill="currentColor"><path d="M18 4L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H18C19.1 20 20 19.1 20 18V4H18Z"/></svg>'
        : '<svg class="media-icon" viewBox="0 0 20 20" fill="currentColor"><path d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 22 18.1 22 17V5C22 3.9 22.1 3 21 3ZM21 17H3V5H21V17Z"/></svg>';

    return `
        <div class="media-card" data-id="${item.id}">
            <div class="card-image-container">
                <img src="${item.image}" alt="${item.title}" class="card-image">
                <div class="card-overlay"></div>
                <div class="card-actions">
                    <button class="favorite-btn ${item.isFavorited ? 'favorited' : ''}" data-id="${item.id}" title="Add to favorites">
                        <svg class="bookmark-icon" viewBox="0 0 24 24" fill="${item.isFavorited ? '#FC4747' : 'none'}" stroke="white" stroke-width="2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    <button class="bookmark-btn ${item.isBookmarked ? 'bookmarked' : ''}" data-id="${item.id}" title="Bookmark">
                        <svg class="bookmark-icon" viewBox="0 0 20 20" fill="${item.isBookmarked ? 'currentColor' : 'none'}" stroke="white" stroke-width="2">
                            <path d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="card-info">
                <div class="card-meta">
                    <span>${item.year}</span>
                    <span class="dot"></span>
                    <span>${categoryIcon} ${item.category}</span>
                    <span class="dot"></span>
                    <span>${item.rating}</span>
                </div>
                <div class="card-title">${item.title}</div>
            </div>
        </div>
    `;
}

// Attach bookmark and favorite listeners
function attachBookmarkListeners() {
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(e.currentTarget.dataset.id);
            toggleBookmark(id);
        });
    });

    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(e.currentTarget.dataset.id);
            toggleFavorite(id);
        });
    });
}

// Toggle bookmark
function toggleBookmark(id) {
    const item = mediaData.find(m => m.id === id);
    if (item) {
        item.isBookmarked = !item.isBookmarked;

        // Update localStorage
        if (item.isBookmarked) {
            bookmarkedIds.push(id);
        } else {
            bookmarkedIds = bookmarkedIds.filter(bid => bid !== id);
        }
        localStorage.setItem('bookmarks', JSON.stringify(bookmarkedIds));

        // Re-render current section
        renderContent();
    }
}
