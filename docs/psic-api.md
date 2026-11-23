# API Endpoint Documentation

Record **implemented** FastAPI endpoints here as they are created. Harshini can expand or reorganize this reference to match the backend she develops. Do not list proposed routes as though they already exist.

## Current endpoints

| Method | Path | Purpose | Request | Successful response |
|---|---|---|---|---|
| `GET` | `/health` | Check whether the API is running | None | `200 OK` with `{"status": "ok"}` |

The health-check endpoint is currently defined in `backend/main.py`.

## Documenting new endpoints

For each endpoint added, record its **method, path, purpose, expected request, and response** in the table above. Where useful, add a separate section showing example JSON and error responses.

Only document behavior that matches the implemented code. API design and route names are left to the backend developer and team.
