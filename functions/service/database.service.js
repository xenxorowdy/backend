const mongoose = require('mongoose');

const dbUrl ="mongodb+srv://riyam:w0O3NJXRZSAMYiS3@cluster0.qbqy2ip.mongodb.net/?retryWrites=true&w=majority" ;

module.exports = () => {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on('connected', () => {
    console.log((`connected to mongoDB`));
  });

  mongoose.set('debug', true);

  mongoose.connection.on('error', (err) => {
    console.log((`MongoDB has occured ${err}`));
  });

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB is disconnected due to application termination');
      process.exit(0);
    });
  });
};

