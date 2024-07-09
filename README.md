# Project structure
- `/backend` directory contains backend api written with Express framework
- `/frontend` directory contains frontend part written on Angular

# Configuration and starting
## Backend
- Rename `.env.template` to the `.env` and fill missing fields
- Install all necessary packages
- From `/backend` directory run `npx ts-node index.ts`
## Frontend
- Rename `/frontend/src/environments/environment.ts.template` to `environment.ts` and fill missing fields
- Install all necessary packages
- Start as Angular project using `npm start`

# TODO
- More robust way for handling errors on both backend and frontend
- Dialog window style