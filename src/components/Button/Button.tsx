import { cn } from '../../utils/cn'
import type { ButtonProps } from './Button.types'

const variantClasses = {
  primary: 'bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand',
  secondary: 'bg-transparent text-brand border border-brand hover:bg-brand hover:text-white focus-visible:ring-brand',
  ghost: 'bg-transparent text-navy border border-navy hover:bg-navy hover:text-white focus-visible:ring-navy',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm font-semibold',
  lg: 'px-8 py-4 text-base font-semibold',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  isLoading = false,
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      disabled={disabled ?? isLoading}
      {...rest}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true" />
      ) : (
        leftIcon && <span aria-hidden="true">{leftIcon}</span>
      )}
      {children}
    </button>
  )
}
