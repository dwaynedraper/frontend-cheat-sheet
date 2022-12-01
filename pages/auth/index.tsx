import React from 'react'
import Input from '../../components/base-ui/Input'
import LockIcon from '../../components/icons/LockIcon'
import MailIcon from '../../components/icons/MailIcon'
import PeopleIcon from '../../components/icons/PeopleIcon'
import { useFormState } from '../../hooks/useFormState'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Auth() {
  const { data: session } = useSession()
  const [state, handleChange] = useFormState({
    email: '',
    password: '',
  })

  let handleClick;
  let buttonText;
  // const user = useAppSelector(selectUser)
  // const dispatch = useAppDispatch()

  if (session) {
    handleClick = () => signOut()
    buttonText = 'Sign out'
  } else {
    handleClick = () => signIn('github', {
      redirect: false,
      email: state.email,
      password: state.password,
    })
    buttonText = 'Sign in'
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
          <img className="object-cover w-24 h-24 mx-auto rounded-full" src="logo-square.png" alt="user avatar" />

          <div className="flex items-center justify-center mt-6">
            <a href="#" className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300">
              sign in
            </a>

            <a href="#" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
              sign up
            </a>
          </div>

          <Input icon={<PeopleIcon />} name='username' type="text" placeholder="Username" handleChange={handleChange} />
          <Input icon={<MailIcon />} name='email' type="email" placeholder="Email" handleChange={handleChange} />
          <Input icon={<LockIcon />} name='password' type="password" placeholder="Enter Password" handleChange={handleChange} />
          <Input icon={<LockIcon />} name='password' type="password" placeholder="Confirm Password" handleChange={handleChange} />



          <div className="mt-6">
            <button onClick={handleClick} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              {buttonText}
            </button>

            <div className="mt-6 text-center ">
              <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                Already have an account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
