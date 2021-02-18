import gql from 'graphql-tag'

export const SINGLE_DATASET_QUERY = gql`
  query SINGLE_DATASET_QUERY($id: ID!) {
    Dataset(where: { id: $id }) {
      id
      name
      description
      id
      projects {
        name
      }
    }
  }
`
export const ALL_DATASETS_QUERY = gql`
  query ALL_DATASETS_QUERY($skip: Int = 0, $first: Int) {
    allDatasets(skip: $skip, first: $first) {
      id
      name
      description
      projects {
        id
        name
      }
    }
  }
`
export const ALL_DATASETS_COUNT_QUERY = gql`
  query ALL_DATASETS_COUNT_QUERY {
    _allDatasetsMeta {
      count
    }
  }
`
export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`
