export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: React.ReactNode
  isLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>
