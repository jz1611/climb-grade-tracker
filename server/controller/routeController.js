const routes = require('../data.json');
let id = 2;

function getIndex(id) {
  return routes.findIndex((route) => {
    return route.id === +id;
  });
}

module.exports = {
  getRoutes: (req, res, next) => {
    res.status(200).send(puppies);
  },

  getRouteByID: (req, res, next) => {
    const { id } = req.params;
    const index = getIndex(id);
    
    if (index !== -1) {
      res.status(200).send(routes[index]);
    } else {
      res.status(404).send(`No route with ID ${id}.`);
    }
  },

  postRoute: (req, res, next) => {
    const {
      nickname,
      difficulty,
      attempts,
      completes,
      record
    } = req.body;

    const route = {
      id,
      nickname,
      difficulty,
      attempts,
      completes,
      record
    };

    routes.push(route);
    id++;

    res.status(200).send(routes);
  },

  deleteRoute: (req, res, next) => {
    const { id } = req.params;
    const index = getIndex(id);
    if (index !== -1) {
      routes.splice(index, 1);
      res.status(200).send(puppies);
    } else {
      res.status(404).send(`No route to delete with ID ${id}.`);
    }
  },

  updateRoute: (req, res, next) => {
    const { id } = req.params;
    const { attempts, completes, record } = req.body;
    const index = getIndex(id);

    if (index !== -1) {
      routes[index].attempts = attempts || routes[index].attempts;
      routes[index].completes = completes || routes[index].completes;
      routes[index].record = record || routes[index].record;

      res.status(200).send(routes);
    } else {
      res.status(404).send(`No route to update with ID ${id}.`);
    }
  }
}