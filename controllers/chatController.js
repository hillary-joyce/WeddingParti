// const db = require("../models");
//
// module.exports = {
//   findAll: function(req, res) {
//     db.Wedding
//       .findOne({_id: req.params.weddingId}, "chat")
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Wedding
//       .findOneAndUpdate({_id: req.params.weddingId},
//         {$push:
//           {chat:{req.body}}
//         }
//       )
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
