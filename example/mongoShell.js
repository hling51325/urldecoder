const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

module.exports = async (collections) => {
  const user = await collections['system.users'].findOne({})
  console.log(user)
}