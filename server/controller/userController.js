const users = require('../users.json');
let id = 2;

function getIndex(id) {
  return users.findIndex((user) => {
    return user.id === +id;
  });
}

module.exports = {
  getUserByID: (req, res, next) => {
    const { id } = req.params;
    const index = getIndex(id);
    
    if (index !== -1) {
      res.status(200).send(users[index]);
    } else {
      res.status(404).send(`No user with ID ${id}.`);
    }
  }
}