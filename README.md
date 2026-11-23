# Pig Scream Ice Cream

Cloud 9 Group Project

This README covers **local startup only**. For the intended technology stack and deployment plan, see [Project Architecture](docs/psic-architecture.md).

## First-time setup

1. Follow [Git Setup](docs/gitSETUP.md) to clone the repository.
2. Install **Node.js 26.13.1** and **npm 12.2.3** for frontend development.
3. Install **Python 3** if you will run the backend. The team has not selected a specific Python version yet.

## Start the frontend

From the repository root, open a terminal and run:

```bash
cd frontend
npm ci
npm run dev
```

Open the local address shown in the terminal (typically `http://localhost:5173`).

## Start the backend

The backend currently contains only a health-check endpoint. Open a **second terminal** at the repository root.

For **Windows Git Bash**:

```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate
python -m pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

The backend runs locally at `http://localhost:8000`:

- Health check: `http://localhost:8000/health`
- FastAPI interactive documentation: `http://localhost:8000/docs`

Press `Ctrl+C` in each terminal to stop its server.

> **Backend dependencies:** `backend/requirements.txt` is currently a draft, not an installable requirements file. Once the backend developer finalizes it, the team can switch to `python -m pip install -r requirements.txt`.

## Project guides

| Document | What it covers |
|---|---|
| [Project Architecture](docs/psic-architecture.md) | Intended stack and deployment |
| [API Endpoints](docs/psic-api.md) | Implemented API routes |
| [Git Setup](docs/gitSETUP.md) | Initial clone and Git configuration |
| [Git Workflow](docs/gitWORKFLOW.md) | Day-to-day branches, commits, and pull requests |
