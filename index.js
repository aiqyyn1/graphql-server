const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');
const schema = require('./schema');
const app = express();
const port = 8080;
const url = 'mongodb+srv://aiqyyn:aikyn777@cluster0.qwtnih1.mongodb.net/';
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);


const start = async () => {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
