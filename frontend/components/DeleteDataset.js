import { useMutation } from '@apollo/client'
import { DELETE_DATASET_MUTATION } from '../graphql/mutation'

export default function DeleteProduct({ id, children }) {
  const update = (cache, payload) => {
    cache.evict(cache.identify(payload.data.deleteDataset))
  }

  const [deleteProduct, { loading, error }] = useMutation(
    DELETE_DATASET_MUTATION,
    {
      variables: { id },
      update,
    }
  )

  const handleClick = async () => {
    if (confirm('Are you sure you want to delete')) {
      await deleteProduct().catch((err) => alert(err.message))
    }
  }

  return (
    <button type="button" onClick={handleClick} disabled={loading}>
      {children}
    </button>
  )
}
