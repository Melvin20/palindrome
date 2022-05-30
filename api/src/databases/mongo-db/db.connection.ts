import mongoose from 'mongoose';

const connection = `mongodb+srv://${process.env.DB_MONGODB_USER}:${process.env.DB_MONGODB_PASSWORD}@cluster0.s7ctz.mongodb.net/${process.env.DB_MONGODB_DB}?retryWrites=true&w=majority`;



mongoose.connect(connection);

const connect = mongoose.connection;
connect.once('open', () => {
  console.log('Mongodb Connection established');
});
connect.on('error', (err) => {
  console.log(err);
  process.exit(0);
});
