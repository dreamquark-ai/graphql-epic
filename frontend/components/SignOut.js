import { useMutation } from '@apollo/client'
import { SIGNOUT_MUTATION } from '../graphql/mutation'
import { CURRENT_USER_QUERY } from '../graphql/query'

export default function SignOut() {
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  })
  return (
    <button type="button" onClick={signout}>
      Sign Out
    </button>
  )
}
