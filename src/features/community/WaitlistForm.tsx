import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '../../components/Button/Button'
import { useTranslation } from '../../hooks/useTranslation'
import { waitlistStatusKey } from '../../i18n/programsKeys'
import { cn } from '../../utils/cn'

type WaitlistFormData = {
  firstName: string
  lastName: string
  email: string
  country: string
  nurseStatus: 'us-unlicensed' | 'english-abroad' | 'non-english-abroad' | 'nursing-student'
}

const STATUS_OPTIONS = [
  'us-unlicensed',
  'english-abroad',
  'non-english-abroad',
  'nursing-student',
] as const

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useTranslation()

  const waitlistSchema = useMemo(
    () =>
      z.object({
        firstName: z.string().min(1, t('community.waitlist.form.errors.firstName')),
        lastName: z.string().min(1, t('community.waitlist.form.errors.lastName')),
        email: z.string().email(t('community.waitlist.form.errors.email')),
        country: z.string().min(1, t('community.waitlist.form.errors.country')),
        nurseStatus: z.enum(STATUS_OPTIONS, {
          error: t('community.waitlist.form.errors.nurseStatus'),
        }),
      }),
    [t],
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const handleFormSubmit = async (_data: WaitlistFormData) => {
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
        <h3 className="font-display font-bold text-navy text-xl mb-2">
          {t('community.waitlist.form.successTitle')}
        </h3>
        <p className="text-muted">{t('community.waitlist.form.successMessage')}</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-5"
      noValidate
      aria-label={t('community.waitlist.form.aria')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldWrapper
          label={t('community.waitlist.form.firstName')}
          error={errors.firstName?.message}
          htmlFor="firstName"
        >
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            className={inputClass(!!errors.firstName)}
            placeholder="Maria"
            {...register('firstName')}
          />
        </FieldWrapper>
        <FieldWrapper
          label={t('community.waitlist.form.lastName')}
          error={errors.lastName?.message}
          htmlFor="lastName"
        >
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

      <FieldWrapper label={t('community.waitlist.form.email')} error={errors.email?.message} htmlFor="email">
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClass(!!errors.email)}
          placeholder="maria@example.com"
          {...register('email')}
        />
      </FieldWrapper>

      <FieldWrapper label={t('community.waitlist.form.country')} error={errors.country?.message} htmlFor="country">
        <input
          id="country"
          type="text"
          autoComplete="country-name"
          className={inputClass(!!errors.country)}
          placeholder="Brazil"
          {...register('country')}
        />
      </FieldWrapper>

      <FieldWrapper label={t('community.waitlist.form.status')} error={errors.nurseStatus?.message} htmlFor="nurseStatus">
        <select
          id="nurseStatus"
          className={inputClass(!!errors.nurseStatus)}
          defaultValue=""
          {...register('nurseStatus')}
        >
          <option value="" disabled>
            {t('community.waitlist.form.statusPlaceholder')}
          </option>
          {STATUS_OPTIONS.map((value) => (
            <option key={value} value={value}>
              {t(waitlistStatusKey(value))}
            </option>
          ))}
        </select>
      </FieldWrapper>

      <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
        {t('community.waitlist.form.submit')}
      </Button>

      <p className="text-xs text-muted text-center">{t('community.waitlist.form.disclaimer')}</p>
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
