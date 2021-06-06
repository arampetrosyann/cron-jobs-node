const { UserInputError, ApolloError } = require("apollo-server");
const Machine = require("../../models/Machine");

module.exports = async ({ name = "", value = 1 }) => {
  if (!(name.trim())) throw new UserInputError("input error (name)");
  if (!Number.isSafeInteger(value) || value < 0) throw new UserInputError("input error (value)");

  const machine = await Machine.findOneAndUpdate(
    { name: name.trim() },
    { $inc: { counter: value } },
    { new: true }
  );

  if (!machine) throw new ApolloError(`can't find the machine with the name ${name}`);

  return machine;
};
