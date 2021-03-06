const express = require('express');
const app = express();
const rC = require('./controller/routeController');
const uC = require('./controller/userController');

app.use(express.json());

app.get('/api/routes', rC.getRoutes);
app.get('/api/route/:id', rC.getRouteByID);
app.post('/api/route', rC.postRoute);
app.delete('/api/removeRoute/:id', rC.removeRoute);
app.put('/api/route/:id', rC.updateRoute);

app.get('/api/user/:id', uC.getUserByID);

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));