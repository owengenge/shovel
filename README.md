# Shovel

> Uncover the truth behind every dig.

A full-stack web app for volleyball players to track defensive performance in real time. Log attack origin, contact location, and dig quality court-side, then review detailed stats breakdowns after each session.

---

## Features

- **Session Management** — Create sessions with a custom roster, track multiple players, and end sessions when done
- **Live Action Tracking** — Log each dig by selecting attack zone, contact location, and dig quality on an interactive court layout
- **Player Management** — Add new or existing players to a session, edit the roster mid-session
- **Stats Dashboard** — View overall dig stats and per-attack-zone breakdowns with filterable contact location data
- **Season Tracking** — Sessions are automatically grouped by volleyball season

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, React Router 7 |
| Backend | Node.js, Express 5 |
| Database | PostgreSQL via Prisma ORM |
| Build Tool | Vite |
| Hosting | Vercel (frontend), Railway (backend), Neon (database) |

---

## Getting Started

### Prerequisites
- Node.js v18+

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```

### Run the backend server
```bash
npm run server
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── components/
│   ├── new-session/     # Session creation form and player management
│   ├── track-session/   # Live dig tracking (attack grid, contact grid, dig quality)
│   └── stats/           # Stats dashboard and zone breakdowns
├── utils/               # Helper functions (e.g. season calculation)
├── App.jsx              # Root layout and global state
└── server.js            # Express API
```

---

## Author

Built by Owen Genge
