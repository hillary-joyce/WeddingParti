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
      .findOne({_id: req.params.weddingId, 'taskManager._id:' req.params.projectId}
    ).then(dbModel => res.json(dbModel.taskItems))
    .catch(err => res.status(422).json(err));
  },
  removeTask: function(req, res){
    db.Wedding({_id: req.params.weddingId, 'taskManager._id': req.params.projectId},
      {$pull:
        {'taskManager.$.taskItems': req.params.task}
      }
  )

  },
  removeProject: function(req, res){

  },
  createTask: function(req, res){
    db.Wedding
      .findOne({_id: req.params.weddingId, 'taskManager._id': req.params.projectId},
        {$push:
          {'taskManager.$.taskItems': req.body}
        }
      ).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createProject: function(req, res){

  }
}


Wedding.findOne({weddingName: 'test3', 'taskManager.projectName': 'cool3'}
).then(dbModel => console.log(dbModel.taskManager));

Wedding.findOneAndUpdate({weddingName: 'test3', 'taskManager.projectName': 'cool3'},
  {$pull:
    {'taskManager.$.taskItems': "this2"}
  }
).then(dbModel => console.log(dbModel));


Wedding.findOneAndUpdate({weddingName: 'test3', 'taskManager.projectName': 'cool3'},
  {$push:
    {'taskManager.$.taskItems': "thind1"}
  }
).then(dbModel => console.log(dbModel));
