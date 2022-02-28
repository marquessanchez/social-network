const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReply,
  removeReply
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<pizzaId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReply)
  .delete(removeThought);

// /api/thought/<userId>/<thoughtId>/<replyId>
router.route('/:pizzaId/:thoughtId/:replyId').delete(removeReply);

module.exports = router;