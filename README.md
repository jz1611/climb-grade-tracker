# No DB - Indoor Boulder Route Tracker
This project will allow a user to add, edit, and view indoor climbing routes they have completed.

[Figma Wireframe](https://www.figma.com/file/tgIZ6r13sHbCCMKoVrl0SL/Climbing-Route-Tracker?node-id=0%3A1)

## Front-End Checklist
- reset.css
- package.json
  - main: server/index.js
- setupProxy.js => 4000

### Front-End File Structure
- src/
  - App.js
  - index.js
  - index.css => reset.css will be copied here
  - setupProxy.js
  - Components/
    - Header.js
    - Main.js
    - Footer.js
    - Route.js (holds state)
    - RouteList.js (holds state)
    - RouteAdd.js
    - Button.js
    - UserProfile.js (holds state)

### Front-End Dependencies
- axios
- http-proxy-middleware

## Back-End Checklist

### Back-End File Structure
- server/
  - index.js
  - controller/
    - routeController.js

### Back-End Dependencies
- express

### API Routes
- get: `/api/routes`
- getById: `/api/route/:id`
- post: `/api/route`
- delete: `/api/remove/:id`
- put: `/api/route/:id` {body: attempts, completes, record}
```js
app.put(`/api/route/:id`, (req, res, next) => {
  const {attempts, completes, record} = req.body;
})
```

### Data
```js
const route = {
  id: Number,
  nickname: String,
  difficulty: String,
  attempts: Number,
  completes: Number,
  record: String
}
```
