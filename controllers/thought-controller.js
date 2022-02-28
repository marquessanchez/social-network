const { Thought, User } = require('../models');

app.post('/submit', ({ body }, res) => {
  Thought.create(body)
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.json(err));
});

app.get('/all', (req, res) => {
    Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
});

app.post('/update/:id', ({ params, body }, res) => {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
});

app.delete('/delete/:id', ({ params }, res) => {
  Thought.findOneAndDelete({ _id: params.id })
  .then(dbThoughtData => {
    if (!dbThoughtData) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json(dbThoughtData);
  })
  .catch(err => res.status(400).json(err));
  //
});



module.exports = thoughtController;