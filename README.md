# Meet Manager

A full-featured swim meet management system for timing, scoring, seeding, reporting, hardware integration, and live web dashboard.

## Features

- Run, Timing Console, Seeding, Reports, Events, Scoring, Preferences menus
- PDF/CSV/HY3/EV3 export
- Hardware integration hooks (Colorado, Daktronics, Time Machine, etc.)
- User preferences and scoring schemes
- Event management and seeding algorithms
- React frontend, Node.js backend

## Quickstart

1. **Install dependencies**

    ```
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

2. **Run backend**

    ```
    cd backend
    node server.js
    ```

3. **Run frontend**

    ```
    cd frontend
    npm start
    ```

4. **View the app**

    Open [http://localhost:3001](http://localhost:3001) in your browser.

## Deployment

- Deploy backend to Railway, Render, Heroku, etc.
- Deploy frontend to Netlify, Vercel, or similar.
- Set API URLs in `frontend/src/api/index.js` to your backend's public URL.

## Export Formats

- PDF and CSV: Direct download/export.
- HY3 and EV3: Simulated; add real format logic as needed.

## Hardware Integration

See `backend/hardware/` for protocol hook examples.
Connect real hardware using Electron/Node.js serialport.

## License

MIT