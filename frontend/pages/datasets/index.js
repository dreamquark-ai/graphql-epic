import { useRouter } from 'next/dist/client/router'
import Datasets from '../../components/Datasets'
import Pagination from '../../components/Pagination'

export default function DatasetsPage() {
  const { query } = useRouter()
  const page = parseInt(query.page)

  return (
    <>
      <Pagination page={page || 1} />
      <Datasets page={page || 1} />
      <Pagination page={page || 1} />
    </>
  )
}
