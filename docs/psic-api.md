# API Documentation

*---Subject to change---*

## Overview

The application uses Python and FastAPI to provide REST API endpoints for the React frontend.

The API communicates with a PostgreSQL database hosted on Amazon RDS.

## API Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| Language | Python | Backend programming |
| Framework | FastAPI | Create REST API endpoints |
| Server | Uvicorn | Run the FastAPI application |
| Database | PostgreSQL | Store application data |
| Database Hosting | Amazon RDS | Managed database hosting |
| Data Format | JSON | Exchange data with React |
| Protocol | HTTP/HTTPS | Frontend/backend communication |

## API Endpoints

The following table will be updated as endpoints are developed.

| Method | Endpoint | Purpose | Status |
|---|---|---|---|
| GET | `/health` | Verify backend availability | Starter endpoint |
| TBD | TBD | Retrieve ice cream products | Planned |
| TBD | TBD | Submit customer orders | Planned |
| TBD | TBD | Retrieve order information | Planned |

Endpoint paths and HTTP methods will be finalized during backend development.

## Request and Response Format

API requests and responses will use JSON where applicable.

Example health-check response:

```
{
  "status": "ok"
}
```

Additional examples will be documented as endpoints are implemented.

## Development Notes

- Backend application entry point: `backend/main.py`
- API endpoints will be developed using FastAPI.
- Database credentials will not be committed to Git.
- The React frontend will communicate with the FastAPI backend through CloudFront using HTTPS in production. Local development may use HTTP.
- FastAPI's interactive API documentation will be available at `/docs` when the server is running.

**Status:** Initial API structure established. Endpoint development pending.