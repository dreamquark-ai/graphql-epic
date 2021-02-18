import { useMutation } from '@apollo/client'
import Router from 'next/router'
import { CREATE_DATASET_MUTATION } from '../graphql/mutation'
import { ALL_DATASETS_QUERY, ALL_DATASETS_COUNT_QUERY } from '../graphql/query'
import DisplayError from './ErrorMessage'
import useForm from '../lib/useForm'
import Form from './styles/Form'

export default function CreateDataset() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: '',
    description: '',
  })
  const [createDataset, { data, loading, error }] = useMutation(
    CREATE_DATASET_MUTATION,
    {
      variables: inputs,
      refetchQueries: [
        { query: ALL_DATASETS_QUERY },
        { query: ALL_DATASETS_COUNT_QUERY },
      ],
    }
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await createDataset()
    clearForm()
    Router.push({
      pathname: `/dataset/${res.data.createDataset.id}`,
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Add Dataset</button>
      </fieldset>
    </Form>
  )
}
