import { useQuery } from '@apollo/client'
import { ALL_DATASETS_QUERY } from '../graphql/query'
import Dataset from './Dataset'
import DisplayError from './ErrorMessage'
import { perPage } from '../config'

export default function Datasets({ page }) {
  const { data, error, loading } = useQuery(ALL_DATASETS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <DisplayError error={error} />

  return (
    <div>
      {data.allDatasets.map((dataset) => (
        <div key={dataset.id}>
          <Dataset dataset={dataset} />
        </div>
      ))}
    </div>
  )
}
