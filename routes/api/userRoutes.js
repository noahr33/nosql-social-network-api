const router = require('express').Router()

const {
  getUsers,
  oneUser,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController.js')

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(oneUser).put(updateUser).delete(deleteUser)


module.exports = router