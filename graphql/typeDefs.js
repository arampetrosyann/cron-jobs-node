const { gql } = require("apollo-server");

module.exports = gql`
  type Machine {
    id: ID
    name: String
    counter: Int
  }

  type Query {
    machine(name: String!): Machine!
  }

  type Mutation {
    createMachine(name: String!): Machine
    increaseMachineCounter(name: String!, value: Int): Machine!
  }
`;
