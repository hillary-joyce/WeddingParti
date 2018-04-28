const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Wedding
      .findOne({_id: req.params.weddingId}, "calendarDates")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Wedding
      .findOneAndUpdate({_id: req.params.weddingId},
        {$push:
          {calendarDates:{start: req.body.start, end: req.body.end, title:req.body.title}}
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Wedding
      .findOneAndUpdate({_id: req.params.weddingId},
        {$pull:
          {calendarDates: {_id: req.params.datedId}}
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
