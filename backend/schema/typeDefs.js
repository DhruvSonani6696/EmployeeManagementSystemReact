const { gql } = require('apollo-server-express')
// The GraphQL schema
const typeDefs = gql`
  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    age: String!
    dateOfJoining: String!
    title: String!
    department: String!
    empType: String!
    currentStatus: String
  }

  type Query {
    getEmployees(empType:String!): [Employee]
    getEmployee(id: ID!): Employee
  }
  type Mutation {
    addEmployee(firstName: String!, lastName: String!, age: String!, dateOfJoining: String!, title: String!, department: String!, empType:String!, currentStatus: String): Employee
    updateEmployee(id:ID!, title: String!, department: String!, currentStatus: String): Employee
    deleteEmployee(id: ID!): Boolean!
  }
`;

module.exports = { typeDefs }