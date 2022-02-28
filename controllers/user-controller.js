const { User } = require('../models');

  // get all users
  app.get('/api/users', ({ body }, res) => {
    User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
  });
  
  app.get('/api/users', (req, res) => {
      User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
  });
  
  app.put('/update/:id', ({ params, body }, res) => {
      User.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
  });
  
  app.delete('/delete/:id', ({ params }, res) => {
    User.findOneAndDelete({ _id: params.id })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
  });

  app.post('api/users', ({ params }, res) => {
      User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
  })

  // create friends routes
  app.post('/api/users/:userId/friends/:friendId'), ({ params })

module.exports = userController;