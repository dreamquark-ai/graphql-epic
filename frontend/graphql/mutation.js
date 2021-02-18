import gql from 'graphql-tag'

export const CREATE_DATASET_MUTATION = gql`
  mutation CREATE_DATASET_MUTATION($name: String!, $description: String!) {
    createDataset(data: { name: $name, description: $description }) {
      id
      name
      description
    }
  }
`
export const UPDATE_DATASET_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
  ) {
    updateDataset(id: $id, data: { name: $name, description: $description }) {
      id
      name
      description
    }
  }
`
export const DELETE_DATASET_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteDataset(id: $id) {
      id
      name
      description
    }
  }
`

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`
export const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`
