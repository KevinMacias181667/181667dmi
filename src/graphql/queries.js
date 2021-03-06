/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      titulo
      autor
      isbm
      name
      description
      status
      fechaPublicacion
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titulo
        autor
        isbm
        name
        description
        status
        fechaPublicacion
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
