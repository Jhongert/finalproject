// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    res.send('findAll');
    /*db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));*/
  },
  findById: function(req, res) {
    res.send('findById');
    /*db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));*/
  },
  create: function(req, res) {
    res.send('create');
    /*db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));*/
  },
  update: function(req, res) {
    res.send('update');
    /*db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));*/
  },
  remove: function(req, res) {
    res.send('remove');
   /* db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));*/
  }
};