# Project Guidelines

## Architecture

- This repository is a minimal Express + React starter.
- The server entrypoint is `server.js`, which loads `app.js` and listens on `PORT` or `3000`.
- `app.js` serves static assets from `public/`.
- The client entrypoint is `src/app/index.jsx` and webpack writes the bundle to `public/client.min.js`.
- Keep the current split: server/runtime files in the repo root, client code in `src/app`, and styles in `src/scss`.

## Code Style

- Match the existing style in each file instead of normalizing the whole repo.
- Use 4-space indentation and prefer single quotes where the surrounding file does.
- Keep CommonJS in Node-side files such as `app.js`, `server.js`, and `webpack.config.js` unless a broader migration is requested.
- Keep React changes simple and compatible with the existing entrypoint pattern.

## Build And Validation

- Use the package manager already in use for the task. Do not update multiple lockfiles in the same change unless explicitly requested.
- Main scripts:
    - `npm run react` builds the client bundle with webpack in watch mode.
    - `npm run server` starts the Express server with nodemon and babel-node.
    - `npm start` runs both processes concurrently.
- There is no automated test suite configured. When behavior changes, validate with the relevant build or run command and state what you checked.

## Conventions

- If you change the client bundle location or name, update both webpack output and `public/index.html` together.
- Keep static assets compatible with Express serving from `public/`.
- If you change Babel or webpack configuration, update the related package dependencies in the same change.
- This repo uses `AGENTS.md` as the workspace instruction file. Do not add `copilot-instructions.md` unless you are intentionally replacing this setup.
