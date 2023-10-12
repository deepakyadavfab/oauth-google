var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://deepak:kuchbhipassword@cluster0.5nkuyno.mongodb.net/?retryWrites=true&w=majority')
const userSchema = mongoose.Schema({
  email: String,
  name: String
})

module.exports = mongoose.model('users', userSchema);