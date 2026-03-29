import { useEffect } from 'react'

const IMG_BASE = 'https://image.tmdb.org/t/p/w780'

function MovieModal({ movie, onClose, isBookmarked, isFavorite, onBookmark, onFavorite }) {
  const year = movie.release_date?.slice(0, 4) || '—'
  const rating = movie.vote_average?.toFixed(1) || 'N/A'

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-content">
          {movie.backdrop_path ? (
            <div
              className="modal-backdrop"
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}
            />
          ) : null}
          <div className="modal-body">
            {movie.poster_path && (
              <img
                className="modal-poster"
                src={`${IMG_BASE}${movie.poster_path}`}
                alt={movie.title}
                onError={(e) => { e.target.style.display = 'none' }}
              />
            )}
            <div className="modal-details">
              <h2 className="modal-title">{movie.title}</h2>
              <div className="modal-meta">
                <span className="meta-year">{year}</span>
                <span className="meta-rating">⭐ {rating}</span>
                <span className="meta-votes">{movie.vote_count?.toLocaleString()} votes</span>
              </div>
              {movie.overview && <p className="modal-overview">{movie.overview}</p>}
              <div className="modal-actions">
                <button
                  className={`modal-action-btn ${isBookmarked ? 'active-bookmark' : ''}`}
                  onClick={() => onBookmark(movie.id)}
                >
                  🔖 {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </button>
                <button
                  className={`modal-action-btn ${isFavorite ? 'active-favorite' : ''}`}
                  onClick={() => onFavorite(movie.id)}
                >
                  {isFavorite ? '❤️ Favorited' : '🤍 Favorite'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
