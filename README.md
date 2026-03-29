# CineSearch 🎬

A movie browsing app built with React + Vite featuring the top 14 movies of all time.

## Features

- **Browse** — Top 14 greatest movies displayed in a responsive grid
- **Search** — Filter movies by title instantly
- **Hover Preview** — Hover over any card to see the title, year, and overview
- **Movie Details** — Click any card to open a full detail modal
- **Bookmark** — Save movies to a bookmarks list (persisted in localStorage)
- **Favorites** — Mark movies as favorites (persisted in localStorage)
- **Tabs** — Switch between All, Bookmarks, and Favorites views

## Tech Stack

- [React 19](https://react.dev)
- [Vite 8](https://vite.dev)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx    # Movie card with hover preview, bookmark & favorite buttons
│   ├── MovieModal.jsx   # Full detail modal with bookmark & favorite actions
│   └── SearchBar.jsx    # Search input
├── App.jsx              # Main app — state, tabs, movie data
├── App.css              # All styles
└── main.jsx             # Entry point
```

## Optional: TMDB API

The app uses hardcoded movie data by default. To enable live search and trending movies from [The Movie Database](https://www.themoviedb.org):

1. Get a free API key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
2. Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_key_here
```

3. Restart the dev server
