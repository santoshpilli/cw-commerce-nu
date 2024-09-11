import { Metadata } from 'next'
import SignIn from './Form'

export const metadata: Metadata = {
  title: 'Sign in',
}

export default async function Signin() {
  return <SignIn />
}
