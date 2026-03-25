# Express Server Documentation (LoveorNot_fixed.cjs)

## Overview
This is a Node.js Express server running on **port 3000**. It demonstrates basic routing, middleware (token & password auth), parameterized routes, POST handling, and error handling.

**Dependencies:** express (from package.json)

**Created modules:** checktoken.cjs/js, checkpass.cjs/js (for /news auth)

## Setup & Run
1. Ensure Node.js installed.
2. `cd \"c:/Users/AONAK YADAV/OneDrive/Desktop/JavaScript/JavaScript/JavaScript/basics/LoveorNot_fixed\"`
3. `node LoveorNot_fixed.cjs`
4. Server logs: \"server is running on port 3000\"

## Endpoints

### GET /
- **URL:** http://localhost:3000/
- **Response:** `{status:1, msg: \"this is home page API\"}`

### GET /news
- **URL:** http://localhost:3000/news?token=Ayush&pass=12345
- **Auth:** Requires `token=Ayush` (checktoken middleware), then `pass=12345` (checkpass middleware)
- **Invalid token/pass:** `{status:0, msg: \"...\"}`
- **Response:** `{status:1, msg: \"this is new page API\"}`

### GET /news/:id
- **URL:** http://localhost:3000/news/123
- **No auth needed**
- **Response:** \"News details API 123\"

### GET /product
- **URL:** http://localhost:3000/product
- **Response:** `{status: 1, msg: \"this is product page API\"}`

### POST /login
- **URL:** http://localhost:3000/login (use Postman/Thunder Client)
- **Body:** JSON e.g. `{ \"username\": \"test\" }`
- **Query params:** Optional ?key=value
- **Response:** `{status:1, msg: \"Login API\", bodyData: {...}, querydata: {...}}`
- **Console:** Logs request body

### GET /error
- **URL:** http://localhost:3000/error
- **Triggers:** Custom error handler
- **Response:** `{status:0, msg: \"something went wrong\"}`

## Key Features
- **Middleware:** app.use(express.json()) for JSON parsing
- **Auth Middleware:** Custom token/password checkers on /news
- **Error Handling:** Global error middleware catches thrown errors
- **Params/Query/Body:** Full support demonstrated

## Stop Server
Ctrl+C in terminal

## File Structure
- LoveorNot_fixed.cjs: Main server code
- checktoken.cjs/js: Token validation
- checkpass.cjs/js: Password validation
- LoveorNot_fixed.cjs_summary.txt / README.txt: Additional docs/summaries
