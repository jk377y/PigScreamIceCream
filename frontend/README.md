# Pig Scream Ice Cream

**Cloud 9 Group Project**

A simple ice cream ordering application built with React, FastAPI, and PostgreSQL, deployed on AWS.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | React + Vite |
| Backend | Python + FastAPI |
| Database | PostgreSQL (Amazon RDS) |
| Cloud Hosting | AWS S3, CloudFront, EC2 |
| CI/CD | GitHub Actions |

## Getting Started

### 1. Prerequisites

Install the following before starting:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) — Version 26.13.1
- npm — Version 12.2.3
- [Python](https://www.python.org/downloads/) — For backend development
- [VS Code](https://code.visualstudio.com/) — Recommended editor

### 2. Clone the Repository

Open Git Bash and run:

```bash
git clone https://github.com/jk377y/PigScreamIceCream.git
cd PigScreamIceCream
```

For additional Git instructions, see [Git Setup](docs/gitSETUP.md).

### 3. Start the Frontend

Navigate to the frontend folder:

```bash
cd frontend
```

Install the dependencies:

```bash
npm ci
```

Start the React development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal, typically:

**http://localhost:5173**

### 4. Start the Backend

*The backend is currently in its initial development stage.*

Open a **second Git Bash terminal** in the project root:

```bash
cd backend
```

Create and activate a Python virtual environment (Windows Git Bash):

```bash
python -m venv .venv
source .venv/Scripts/activate
```

Install the initial dependencies:

```bash
pip install fastapi uvicorn
```

Start FastAPI:

```bash
uvicorn main:app --reload
```

The backend runs at:

- Health check: http://localhost:8000/health
- API documentation: http://localhost:8000/docs

Press `Ctrl+C` to stop either development server.

## Project Documentation

- [Git Setup](docs/gitSETUP.md)
- [Git Workflow](docs/gitWORKFLOW.md)
- [Project Architecture](docs/psic-architecture.md)
- [API Documentation](docs/api.md)

## Team Development

All development should take place on a separate feature branch. Do not push directly to `main`.

See the [Git Workflow](docs/gitWORKFLOW.md) for branching, commits, pull requests, and code reviews.