import DatasetDetails from '../../components/DatasetDetails'

export default function SingleDatasetPage({ query }) {
  console.log(query.id)
  return <DatasetDetails id={query.id} />
}
