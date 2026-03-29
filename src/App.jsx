import { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import MovieModal from './components/MovieModal'
import './App.css'

const TOP_MOVIES = [
  {
    id: 278,
    title: 'The Shawshank Redemption',
    release_date: '1994-09-23',
    vote_average: 9.3,
    vote_count: 26000,
    poster_path: '/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
    backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden.',
  },
  {
    id: 238,
    title: 'The Godfather',
    release_date: '1972-03-14',
    vote_average: 9.2,
    vote_count: 19000,
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When patriarch Vito Corleone barely survives an attempt on his life, his youngest son, Michael, steps in to take care of the would-be killers.',
  },
  {
    id: 240,
    title: 'The Godfather Part II',
    release_date: '1974-12-20',
    vote_average: 9.0,
    vote_count: 11000,
    poster_path: '/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
    backdrop_path: '/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg',
    overview: 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
  },
  {
    id: 424,
    title: "Schindler's List",
    release_date: '1993-11-30',
    vote_average: 9.0,
    vote_count: 14000,
    poster_path: '/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
    backdrop_path: '/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg',
    overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
  },
  {
    id: 389,
    title: '12 Angry Men',
    release_date: '1957-04-10',
    vote_average: 9.0,
    vote_count: 8000,
    poster_path: '/ppd84D2i9W8jXmsyInGyihiSyqz.jpg',
    backdrop_path: '/qqHQsStV6exghCM7zbObuYBiYxw.jpg',
    overview: 'The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father.',
  },
  {
    id: 129,
    title: "Spirited Away",
    release_date: '2001-07-20',
    vote_average: 8.8,
    vote_count: 15000,
    poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    backdrop_path: '/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg',
    overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
  },
  {
    id: 19404,
    title: 'Dilwale Dulhania Le Jayenge',
    release_date: '1995-10-20',
    vote_average: 8.7,
    vote_count: 4000,
    poster_path: '/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
    backdrop_path: '/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg',
    overview: 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about maintaining Indian values.',
  },
  {
    id: 372058,
    title: 'Your Name.',
    release_date: '2016-08-26',
    vote_average: 8.7,
    vote_count: 11000,
    poster_path: '/q719jXXEzOoYaps6babgKnONONX.jpg',
    backdrop_path: '/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg',
    overview: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki's body, and he in hers.",
  },
  {
    id: 497,
    title: 'The Green Mile',
    release_date: '1999-12-10',
    vote_average: 8.5,
    vote_count: 16000,
    poster_path: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
    backdrop_path: '/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
    overview: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the miraculous power to heal people's ailments.",
  },
  {
    id: 680,
    title: 'Pulp Fiction',
    release_date: '1994-09-10',
    vote_average: 8.5,
    vote_count: 25000,
    poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper.",
  },
  {
    id: 155,
    title: 'The Dark Knight',
    release_date: '2008-07-18',
    vote_average: 9.0,
    vote_count: 32000,
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: '/hkBaDkMWbLaf8B1lsWsySuR1x2z.jpg',
    overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague Gotham City.',
  },
  {
    id: 13,
    title: 'Forrest Gump',
    release_date: '1994-06-23',
    vote_average: 8.8,
    vote_count: 26000,
    poster_path: '/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    backdrop_path: '/7c9UVPPiTPltouxRVY6N9uugaVA.jpg',
    overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events — in each case, far exceeding what anyone imagined he could do.',
  },
  {
    id: 289,
    title: 'Casablanca',
    release_date: '1942-11-26',
    vote_average: 8.5,
    vote_count: 5500,
    poster_path: '/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg',
    backdrop_path: '/1rLWt7hSiJFyPMSM2hqPqooFJqm.jpg',
    overview: 'In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.',
  },
  {
    id: 637,
    title: 'Life is Beautiful',
    release_date: '1997-12-20',
    vote_average: 8.5,
    vote_count: 12000,
    poster_path: '/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg',
    backdrop_path: '/e7NU47IXHBCjGAbDrhI1GlELOSd.jpg',
    overview: 'A touching story of an Italian Jewish man who uses his humor and imagination to protect his son from the horrors of a World War II concentration camp.',
  },
]

function App() {
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState('all') // 'all' | 'bookmarks' | 'favorites'
  const [bookmarks, setBookmarks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('bookmarks') || '[]') } catch { return [] }
  })
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('favorites') || '[]') } catch { return [] }
  })
  const [selected, setSelected] = useState(null)

  const toggleBookmark = (id) => {
    const next = bookmarks.includes(id) ? bookmarks.filter(x => x !== id) : [...bookmarks, id]
    setBookmarks(next)
    localStorage.setItem('bookmarks', JSON.stringify(next))
  }

  const toggleFavorite = (id) => {
    const next = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id]
    setFavorites(next)
    localStorage.setItem('favorites', JSON.stringify(next))
  }

  const handleSearch = (q) => {
    setQuery(q)
    setTab('all')
  }

  let pool = TOP_MOVIES
  if (tab === 'bookmarks') pool = TOP_MOVIES.filter(m => bookmarks.includes(m.id))
  if (tab === 'favorites') pool = TOP_MOVIES.filter(m => favorites.includes(m.id))

  const filtered = query
    ? pool.filter(m => m.title.toLowerCase().includes(query.toLowerCase()))
    : pool

  const sectionTitle = () => {
    if (query) return `Results for "${query}"`
    if (tab === 'bookmarks') return `Bookmarks (${bookmarks.length})`
    if (tab === 'favorites') return `Favorites (${favorites.length})`
    return 'Top 14 Movies of All Time'
  }

  const emptyMsg = () => {
    if (tab === 'bookmarks') return 'No bookmarks yet. Click 🔖 on any movie.'
    if (tab === 'favorites') return 'No favorites yet. Click ❤️ on any movie.'
    return 'No movies found.'
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🎬</span>
            <span className="logo-text">CineSearch</span>
          </div>
          <SearchBar onSearch={handleSearch} />
          <nav className="tab-nav">
            <button className={`tab-btn ${tab === 'all' ? 'active' : ''}`} onClick={() => setTab('all')}>All</button>
            <button className={`tab-btn ${tab === 'bookmarks' ? 'active' : ''}`} onClick={() => setTab('bookmarks')}>
              🔖 Bookmarks {bookmarks.length > 0 && <span className="tab-count">{bookmarks.length}</span>}
            </button>
            <button className={`tab-btn ${tab === 'favorites' ? 'active' : ''}`} onClick={() => setTab('favorites')}>
              ❤️ Favorites {favorites.length > 0 && <span className="tab-count">{favorites.length}</span>}
            </button>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="section-title">
          <h2>{sectionTitle()}</h2>
        </div>

        <div className="movies-grid">
          {filtered.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={setSelected}
              isBookmarked={bookmarks.includes(movie.id)}
              isFavorite={favorites.includes(movie.id)}
              onBookmark={toggleBookmark}
              onFavorite={toggleFavorite}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty">{emptyMsg()}</div>
        )}
      </main>

      {selected && (
        <MovieModal
          movie={selected}
          onClose={() => setSelected(null)}
          isBookmarked={bookmarks.includes(selected.id)}
          isFavorite={favorites.includes(selected.id)}
          onBookmark={toggleBookmark}
          onFavorite={toggleFavorite}
        />
      )}
    </div>
  )
}

export default App
