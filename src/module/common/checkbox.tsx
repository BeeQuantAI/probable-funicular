// import React from 'react'
// import { cva, type VariantProps } from 'class-variance-authority'
// import { Label } from './label'

// export interface CheckboxVariants
//   extends VariantProps<typeof checkboxVariants> {}

// const checkboxVariants = cva(
//   [
//     'size-[18px]',
//     'focus:outline-none',
//     'focus:ring-0',
//     'focus:ring-offset-0',
//     'rounded',
//     'cursor-pointer'
//   ],
//   {
//     variants: {
//       variant: {
//         primary: 'border border-solid border-2',
//       },
//       background: {
//         default: 'bg-transparent',
//       },
//     },
//     defaultVariants: {
//       variant: 'primary',
//       background: 'default',
//     },
//   }
// )

// type CheckboxProps = {
//   label?: React.ReactNode
// } & React.InputHTMLAttributes<HTMLInputElement> &
//   CheckboxVariants

// export function Checkbox({
//   label,
//   variant,
//   background,
//   type = 'checkbox',
//   ...props
// }: CheckboxProps) {
//   return (
//     <label className='flex items-center gap-2 bg-transparent'>
//       <input
//         className={checkboxVariants({
//           variant,
//           background,
//         })}
//         type={type}
//         {...props}
//       />
//       {label && <Label>{label}</Label>}
//     </label>
//   )
// }


import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Label } from './label'

export interface CheckboxVariants
  extends VariantProps<typeof checkboxVariants> {}

const checkboxVariants = cva(
  [
    'appearance-none',
    'size-[18px]',
    'bg-transparent',
    'border',
    'border-solid',
    'rounded',
    'focus:outline-none',
    'focus:ring-0',
    'focus:ring-offset-0',
    'cursor-pointer',
    'peer',
    'transition-all',
    'duration-500',
    'group-hover:border-primary-300',
  ],
  {
    variants: {
      variant: {
        primary: 'border-gary-layout-primary',
      },
      size: {
        small: 'text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'small',
    },
  }
)

const svgVariants = cva(
  [
    'size-4',
    'cursor-pointer',
    'opacity-0',
    'peer-checked:opacity-100',
    'transition-opacity',
    'duration-300',
  ],
  {
    variants: {
      variant: {
        primary: 'primary-300',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

type CheckboxProps = {
  label?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement> &
  CheckboxVariants

export function Checkbox({
  label,
  variant,
  color,
  type = 'checkbox',
  ...props
}: CheckboxProps) {
  return (
    <label className='flex items-center gap-2 group'>
      <div className='relative flex items-center'>
        <input
          className={checkboxVariants({ variant })}
          type={type}
          {...props}
        />
        <svg
          className={svgVariants({ variant })}
          fill='#70bbfd'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <path d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' />
        </svg>
      </div>
      {label && <Label>{label}</Label>}
    </label>
  )
}
