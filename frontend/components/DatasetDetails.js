import { useQuery } from '@apollo/client'
import Head from 'next/head'
import { SINGLE_DATASET_QUERY } from '../graphql/query'
import DisplayError from './ErrorMessage'

export default function DatasetDetails({ id }) {
  const { data, error, loading } = useQuery(SINGLE_DATASET_QUERY, {
    variables: {
      id,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <DisplayError error={error} />

  const { Dataset } = data
  return (
    <>
      <Head>
        <title>Dream quark | {Dataset.name}</title>
      </Head>
      <div className="details">
        <h2>{Dataset.name}</h2>
        <p>{Dataset.description}</p>
      </div>
    </>
  )
}
