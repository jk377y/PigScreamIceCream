# Project Architecture

*Intended technology stack and deployment plan. Update this document when the team changes either one.*

## Stack and deployment

| Component | Technology | Intended deployment / use |
|---|---|---|
| Frontend | React, Vite, JavaScript, HTML, CSS | Build the frontend and serve its static files from **Amazon S3 through CloudFront** |
| Backend / API | Python, FastAPI | Run the API on **Amazon EC2** |
| Database | PostgreSQL | Host the database on **Amazon RDS** |
| Source control | Git, GitHub | Maintain the shared repository |
| CI/CD | GitHub Actions | Automate builds/deployments when the workflow is implemented; `.github/workflows/auto-deploy.yml` is currently a placeholder |

## Public access

The team plans to use the default **CloudFront `cloudfront.net` HTTPS URL** for the website. No Application Load Balancer or custom ACM certificate configuration is planned.

The specific API routing and deployment commands will be finalized during implementation. Do not treat unconfigured deployment details as complete.
