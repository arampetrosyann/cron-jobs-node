const {
  getMachine,
  createMachine,
  increaseMachineCounter,
} = require("../api/machine");

module.exports = {
  Query: {
    machine: async (_, args) => {
      const { name = "" } = args;

      const res = await getMachine({ name });

      return res;
    },
  },
  Mutation: {
    createMachine: async (_, args) => {
      const { name = "" } = args;

      const res = await createMachine({ name });

      return res;
    },
    increaseMachineCounter: async (_, args) => {
      const { name = "", value = 1 } = args;

      const res = await increaseMachineCounter({ name, value });

      return res;
    },
  },
};
