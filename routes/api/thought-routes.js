const router = require('express').Router();
const {
  addThought,
  removeThought
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addThought)
  .delete(removeThought);

// /api/thought/<userId>/<thoughtId>
router.route('/:userId/:thoughtId/:replyId').delete(removeThought);

module.exports = router;