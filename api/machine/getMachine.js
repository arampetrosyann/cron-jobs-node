const { UserInputError, ApolloError } = require("apollo-server");
const Machine = require("../../models/Machine");

module.exports = async ({ name = "" }) => {
  if (!(name.trim())) throw new UserInputError("input error");

  const res = await Machine.findOne({ name: name.trim() });

  if (!res) throw new ApolloError(`can't find the machine with the name ${name}`);

  return res;
};
