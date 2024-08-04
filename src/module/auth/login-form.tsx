'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  ControlledPasswordInput,
  ControlledTextInput,
  Icon,
} from '@src/module/common'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { login, LoginPayload } from './auth-service'
import { Checkbox } from '../common/checkbox'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function LoginForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  })

  async function action(payload: LoginPayload) {
    const res = await login(payload)

    if (res?.error) {
      console.log(res.error)
      setError('root', { message: res.error })
    }
  }

  const onSubmit = handleSubmit((data) => {
    console.log('wtf', data)
    action(data)
  })

  return (
    <div className='card mx-auto w-full max-w-5xl shadow-slate-500 dark:shadow-sky-400  shadow-2xl min-h-96 py-4 flex justify-center items-center'>
      <div className=' mx-auto h-full'>
        <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
        <form onSubmit={onSubmit}>
          {errors.root && (
            <span className='text-error'>{errors.root.message}</span>
          )}

          <div className='mb-4'>
            <ControlledTextInput
              name='email'
              control={control}
              leftElement={<Icon icon='person' />}
              autoComplete='username'
            />

            <ControlledPasswordInput
              name='password'
              control={control}
              autoComplete='current-password'
            />
          </div>

          <div className='text-right text-primary'>
            <Link href='/forgot-password'>
              <span className='text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200'>
                Forgot Password?
              </span>
            </Link>
          </div>
          <div>
            <Checkbox label='Remember me'/>
          </div>
          {/* <ErrorText styleClass="mt-8">{errorMessage}</ErrorText> */}
          <Button
            type='submit'
            variant='primary'
            textColor='white'
            animation='growing-bubble-tl-primary'
            size='medium'
          >
            Login
          </Button>

          <div className='text-center'>
            <Link href='/register'>
              <Button
                variant='secondary'
                textColor='blue'
                size='medium'
                animation='growing-bubble-tl-secondary'
              >
                Register
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
