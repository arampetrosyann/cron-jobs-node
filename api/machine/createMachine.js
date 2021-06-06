const { UserInputError } = require("apollo-server");
const Machine = require("../../models/Machine");

module.exports = async ({ name = "" }) => {
  if (!(name.trim())) throw new UserInputError("input error");

  const machine = new Machine({ name: name.trim() });

  const res = await machine.save();

  return res;
};
