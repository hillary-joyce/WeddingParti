const db = require("../models");

//PhotoGalleryController
module.exports = {
  findAll: function(req, res) {
    db.Wedding
      .findOne({_id: req.params.weddingId}, "photoGallery")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Wedding
      .findOneAndUpdate({_id: req.params.weddingId},
        {$push:
          {photoGallery:{req.body}}
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Wedding
      .findOneAndUpdate({_id: req.params.weddingId},
        {$pop:
          {photoGallery:{_id: req.params.photoId}}
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};



Wedding.findOneAndUpdate({weddingName: "test3"},
  {$pull:
    {calendarDates: {description: "cool thing"}}
  }
).then(dbModel => console.log(dbModel));
