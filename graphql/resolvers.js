const machineResolvers = require("./machine");

module.exports = {
  Query: {
    ...machineResolvers.Query,
  },
  Mutation: {
    ...machineResolvers.Mutation,
  },
};
