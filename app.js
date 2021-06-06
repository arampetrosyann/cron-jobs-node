const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cron = require("node-cron");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { increaseMachineCounter } = require("./api/machine");
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    return server.listen(process.env.PORT);
  })
  .then(() => {
    cron.schedule("*/2 * * * * *", () => {
      increaseMachineCounter({ name: "Bob", value: 1 });
    });
  });
