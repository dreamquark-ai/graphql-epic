import { useMutation, useQuery } from '@apollo/client'
import { SINGLE_DATASET_QUERY } from '../graphql/query'
import { UPDATE_DATASET_MUTATION } from '../graphql/mutation'

import DisplayError from './ErrorMessage'
import useForm from '../lib/useForm'
import Form from './styles/Form'

export default function UpdateProduct({ id }) {
  const { data, error, loading } = useQuery(SINGLE_DATASET_QUERY, {
    variables: { id },
  })
  // 2. We need to get the mutation to update the product
  const [
    updateProduct,
    { data: updateData, errror: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_DATASET_MUTATION)
  // 2.5 Create some state for the form inputs:
  const { inputs, handleChange, clearForm, resetForm } = useForm(
    data?.Product || {
      name: '',
      description: '',
    }
  )
  if (loading) return <p>loading...</p>
  // 3. We need the form to handle the updates
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()
        const res = await updateProduct({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        }).catch(console.error)
        console.log(res)
        // Submit the inputfields to the backend:
        // TODO: Handle Submit!!!
        // const res = await createProduct();
        // clearForm();
        // // Go to that product's page!
        // Router.push({
        //   pathname: `/product/${res.data.createProduct.id}`,
        // });
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
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
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update Dataset</button>
      </fieldset>
    </Form>
  )
}
