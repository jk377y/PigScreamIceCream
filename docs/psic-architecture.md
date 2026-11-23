# Project Architecture

*---Subject to change---*

## Overview

Pig Scream Ice Cream is a full-stack web application that allows customers to browse ice cream products and place orders.

The application uses a React frontend, a Python FastAPI backend, and a PostgreSQL database hosted on AWS.

## Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| Frontend | React | User interface |
| Build Tool | Vite | Frontend development and builds |
| Languages | JavaScript, HTML, CSS | Frontend development |
| Backend | Python | Server-side programming |
| API Framework | FastAPI | REST API development |
| Database | PostgreSQL | Store application data |
| Database Hosting | Amazon RDS | Managed PostgreSQL database |
| Backend Hosting | Amazon EC2 | Host the FastAPI application |
| Cloud Platform | AWS | Application infrastructure |
| Version Control | Git / GitHub | Source code management |
| CI/CD | GitHub Actions | Automated testing and deployment |

## Project Structure

| Directory | Purpose |
|---|---|
| `frontend/` | React application and website assets |
| `backend/` | Python FastAPI application |
| `docs/` | Project documentation |
| `.github/workflows/` | GitHub Actions CI/CD workflows |

## Application Workflow

1. Customers interact with the React frontend.
2. React sends HTTP requests to the FastAPI backend.
3. FastAPI processes requests and communicates with PostgreSQL.
4. PostgreSQL stores and retrieves application data.
5. FastAPI returns JSON responses to React.
6. React updates the interface with the returned data.

## Deployment

The application will use AWS infrastructure, including EC2 for the backend and RDS for PostgreSQL. GitHub Actions will eventually automate deployment.

**Status:** Initial architecture established. Implementation and deployment are in progress.