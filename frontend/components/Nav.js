import Link from 'next/link'
import SignOut from './SignOut'
import NavStyles from './styles/NavStyles'
import { useUser } from './User'

export default function Nav() {
  const user = useUser()
  console.log(user)
  return (
    <NavStyles>
      <Link href="/datasets">datasets</Link>
      {user && (
        <>
          <Link href="/create">create dataset</Link>
          <Link href="/account">account</Link>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign in</Link>
        </>
      )}
    </NavStyles>
  )
}
