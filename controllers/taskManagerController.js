const db = require("../models");

module.exports = {
  findAllProjects: function(req, res) {
    db.Wedding
      .findOne({_id: req.params.weddingId}, "taskManager")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllTasks: function(req, res){
    db.Wedding
      .findOne({_id: req.params.weddingId, 'taskManager._id': req.params.projectId})
      .then(dbModel => res.json(dbModel.taskItems))
      .catch(err => res.status(422).json(err));
  },
  removeTask: function(req, res){
    db.Wedding
      .findOneAndUpdate({_id: req.params.weddingId, 'taskManager._id': req.params.projectId},
        {$pull:
          {'taskManager.$.taskItems': req.params.task}
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createTask: function(req, res){
    db.Wedding
      .findOneAndUpdate({_id: req.params.weddingId, 'taskManager._id': req.params.projectId},
        {$push:
          {'taskManager.$.taskItems': req.body}
        }
      ).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createProject: function(req, res){
    db.Wedding
    .findOneAndUpdate({_id: req.params.weddingId},
      {$push:
        {taskManager:{projectName: req.body}}
      }
    )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
