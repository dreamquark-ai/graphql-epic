import Link from 'next/link'
import ItemStyles from './styles/ItemStyles'
import Title from './styles/Title'
import DeleteDataset from './DeleteDataset'

export default function Dataset({ dataset }) {
  return (
    <ItemStyles>
      <Title>
        <Link href={`/dataset/${dataset.id}`}>{dataset.name}</Link>
      </Title>
      <p>Description: {dataset.description}</p>
      <div className="buttonList">
        <Link href={{ pathname: 'update', query: { id: dataset.id } }}>
          Edit
        </Link>
        <DeleteDataset id={dataset.id}>Delete</DeleteDataset>
      </div>
    </ItemStyles>
  )
}
