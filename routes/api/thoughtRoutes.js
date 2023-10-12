const router = require('express').Router()

const {
  getThoughts,
  oneThought,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId').get(oneThought).put(updateThought).delete(deleteThought)

module.exports = router