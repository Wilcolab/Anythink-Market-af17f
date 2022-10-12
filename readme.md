# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. To first setup the development env, just run the docker-compoese file by using the command docker-compose up when in the repository root

2. Test your connection with this address: http://localhost:3000/api/ping

3. Create your own user in: http://localhost:3001/register