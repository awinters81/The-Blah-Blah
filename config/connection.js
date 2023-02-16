const mongoose = require('mongoose');

// Mongoose is needed for my connection...

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialmedia', {
});

module.exports = mongoose.connection;
