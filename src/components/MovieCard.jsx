const IMG_BASE = 'https://image.tmdb.org/t/p/w500'

function MovieCard({ movie, onClick, isBookmarked, isFavorite, onBookmark, onFavorite }) {
  const year = movie.release_date?.slice(0, 4) || '—'
  const rating = movie.vote_average?.toFixed(1) || 'N/A'
  const ratingNum = parseFloat(rating)

  const ratingColor =
    ratingNum >= 7.5 ? 'green' :
    ratingNum >= 5 ? 'yellow' : 'red'

  const handleAction = (e, fn, id) => {
    e.stopPropagation()
    fn(id)
  }

  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            className="poster"
            src={`${IMG_BASE}${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        <div className="no-poster" style={{ display: movie.poster_path ? 'none' : 'flex' }}>
          🎬<br />{movie.title}
        </div>

        <div className="rating-badge">{rating}</div>

        {/* Hover preview overlay */}
        <div className="card-preview">
          <p className="preview-title">{movie.title}</p>
          <p className="preview-year">{year}</p>
          <p className="preview-overview">{movie.overview}</p>
          <span className="preview-tap">Tap for details</span>
        </div>

        {/* Action buttons */}
        <div className="card-actions">
          <button
            className={`action-btn bookmark ${isBookmarked ? 'active' : ''}`}
            onClick={(e) => handleAction(e, onBookmark, movie.id)}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
          >
            🔖
          </button>
          <button
            className={`action-btn favorite ${isFavorite ? 'active' : ''}`}
            onClick={(e) => handleAction(e, onFavorite, movie.id)}
            title={isFavorite ? 'Remove favorite' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>

      <div className="card-info">
        <h3 className="card-title">{movie.title}</h3>
        <div className="card-meta">
          <span className="card-year">{year}</span>
          <div className="card-badges">
            {isBookmarked && <span className="mini-badge">🔖</span>}
            {isFavorite && <span className="mini-badge">❤️</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
