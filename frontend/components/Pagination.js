import Head from 'next/head'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import PaginationStyles from './styles/PaginationStyles'
import { ALL_DATASETS_COUNT_QUERY } from '../graphql/query'
import DisplayError from './ErrorMessage'
import { perPage } from '../config'

export default function Pagination({ page }) {
  const { data, loading, error } = useQuery(ALL_DATASETS_COUNT_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <DisplayError error={error} />

  const { count } = data._allDatasetsMeta
  const pageCount = Math.ceil(count / perPage)
  return (
    <PaginationStyles>
      <Head>
        <title>
          Dreamquark - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/datasets/${page - 1}`}>
        <a aria-disabled={page <= 1}> Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items total </p>
      <Link href={`/datasets/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </PaginationStyles>
  )
}
