## Description
Hi! This is my work for the Coveo Frontend demo. It's a search interface for the SAQ.

## Set up 
Since this is a react app, installing it is quite simple.
```
cd frontend
npm i
npm start
```
The application will open to port 3000.

## Running Unit Tests
The application uses `jest` and `puppeteer`. There aren't many tests but I wanted to try puppeteer. It runs a headless chrominium instance while you develop and simulates interactions with your app (so your application must be running on port 3000).
```
npm run test
```

## Features
- [x] Search bar functionality
- [x] Paging
- [ ] Category facets (frontend components there but not fully integrated)

## Demo
Check out this link to view the demo:
