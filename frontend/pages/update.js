import UpdateDataset from '../components/UpdateDataset'

export default function UpdatePage({ query }) {
  return (
    <div>
      <UpdateDataset id={query.id} />
    </div>
  )
}
