const db = require("../models");

module.exports = {
  findById: function(req, res) {
    db.Wedding
      .findOne({users: req.params.userEmail})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Wedding
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }
};
