import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '../../components/Button/Button'
import { cn } from '../../utils/cn'

const waitlistSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Enter a valid email address'),
  country: z.string().min(1, 'Country is required'),
  nurseStatus: z.enum(['us-unlicensed', 'english-abroad', 'non-english-abroad', 'nursing-student'], {
    error: 'Select your current status',
  }),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const handleFormSubmit = async (_data: WaitlistFormData) => {
    // Service layer integration point — currently a stub
    await new Promise<void>((resolve) => setTimeout(resolve, 800))
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green/5 border border-green/30 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-navy text-xl mb-2">You're on the list!</h3>
        <p className="text-muted">We'll reach out as soon as the community opens. Welcome to GNF.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-5"
      noValidate
      aria-label="Community waitlist sign-up"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldWrapper label="First name" error={errors.firstName?.message} htmlFor="firstName">
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            className={inputClass(!!errors.firstName)}
            placeholder="Maria"
            {...register('firstName')}
          />
        </FieldWrapper>
        <FieldWrapper label="Last name" error={errors.lastName?.message} htmlFor="lastName">
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            className={inputClass(!!errors.lastName)}
            placeholder="Santos"
            {...register('lastName')}
          />
        </FieldWrapper>
      </div>

      <FieldWrapper label="Email address" error={errors.email?.message} htmlFor="email">
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClass(!!errors.email)}
          placeholder="maria@example.com"
          {...register('email')}
        />
      </FieldWrapper>

      <FieldWrapper label="Country of residence" error={errors.country?.message} htmlFor="country">
        <input
          id="country"
          type="text"
          autoComplete="country-name"
          className={inputClass(!!errors.country)}
          placeholder="Brazil"
          {...register('country')}
        />
      </FieldWrapper>

      <FieldWrapper label="Your current status" error={errors.nurseStatus?.message} htmlFor="nurseStatus">
        <select
          id="nurseStatus"
          className={inputClass(!!errors.nurseStatus)}
          defaultValue=""
          {...register('nurseStatus')}
        >
          <option value="" disabled>Select your status…</option>
          <option value="us-unlicensed">Nurse in the U.S. (unlicensed)</option>
          <option value="english-abroad">English-speaking nurse practicing abroad</option>
          <option value="non-english-abroad">Non-English-speaking nurse practicing abroad</option>
          <option value="nursing-student">Nursing student</option>
        </select>
      </FieldWrapper>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
      >
        Join the Waitlist
      </Button>

      <p className="text-xs text-muted text-center">
        No spam. We'll only reach out about community access and GNF updates.
      </p>
    </form>
  )
}

type FieldWrapperProps = {
  label: string
  error?: string
  htmlFor: string
  children: React.ReactNode
}

function FieldWrapper({ label, error, htmlFor, children }: FieldWrapperProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-dark mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function inputClass(hasError: boolean): string {
  return cn(
    'w-full px-4 py-3 rounded-lg border text-sm text-dark bg-white',
    'focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent',
    'placeholder:text-muted/60 transition-colors',
    hasError ? 'border-red-400' : 'border-gray-200 hover:border-gray-300',
  )
}
