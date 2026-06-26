import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '../components/Button/Button'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import { cn } from '../utils/cn'

const PRESET_AMOUNTS = [25, 50, 100, 250, 500] as const

const donationSchema = z.object({
  amount: z.number().min(1, 'Minimum donation is $1'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Enter a valid email address'),
  isMonthly: z.boolean(),
  message: z.string().optional(),
})

type DonationFormData = z.infer<typeof donationSchema>

export default function DonatePage() {
  return (
    <>
      <DonateHeroSection />
      <DonateFormSection />
      <ImpactSection />
    </>
  )
}

function DonateHeroSection() {
  return (
    <section className="bg-brand py-32 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/50 mb-6">
          Donate
        </span>
        <h1 className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6 leading-tight">
          Fund a nurse's future
        </h1>
        <p className="text-white/80 text-xl leading-relaxed">
          Your donation supports internationally educated nurses pursuing U.S. licensure, and funds nursing education grants in low-income countries.
        </p>
      </div>
    </section>
  )
}

function DonateFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedPreset, setSelectedPreset] = useState<number | null>(50)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: { amount: 50, isMonthly: false },
  })

  const isMonthly = watch('isMonthly')

  const handlePresetSelect = (amount: number) => {
    setSelectedPreset(amount)
    setValue('amount', amount, { shouldValidate: true })
  }

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPreset(null)
    const val = parseFloat(e.target.value)
    setValue('amount', isNaN(val) ? 0 : val, { shouldValidate: true })
  }

  const handleFormSubmit = async (_data: DonationFormData) => {
    await new Promise<void>((resolve) => setTimeout(resolve, 800))
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-navy text-3xl mb-3">Thank you!</h2>
          <p className="text-muted text-lg">
            Your generosity directly supports nurses on their validation journey and funds education grants worldwide. A receipt has been sent to your email.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: context */}
          <div>
            <SectionHeader align="left" eyebrow="Make a Gift" title="Your donation at work" />
            <div className="space-y-5 text-dark/70 leading-relaxed mb-8">
              <p>
                GNF is a 501(c)(3) nonprofit. Every dollar donated goes directly toward supporting nurses through the validation process and funding nursing education in low-income countries.
              </p>
              <p>
                Your gift is tax-deductible to the fullest extent of the law.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { amount: '$25', impact: 'Covers one month of Flo AI assistant access for a nurse' },
                { amount: '$50', impact: 'Contributes to English prep materials for a non-English-speaking nurse' },
                { amount: '$100', impact: 'Supports one CGFNS application fee offset for a qualifying nurse' },
                { amount: '$250', impact: 'Funds one education grant for a nursing student in a low-income country' },
              ].map(({ amount, impact }) => (
                <div key={amount} className="flex items-start gap-4">
                  <span className="bg-brand/10 text-brand text-xs font-bold px-2.5 py-1 rounded-md shrink-0 mt-0.5">
                    {amount}
                  </span>
                  <p className="text-sm text-dark/70">{impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-neutral rounded-2xl p-8">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="space-y-6"
              noValidate
              aria-label="Donation form"
            >
              {/* Monthly toggle */}
              <div className="flex items-center gap-3 bg-white rounded-xl p-1 border border-gray-200">
                <button
                  type="button"
                  onClick={() => setValue('isMonthly', false)}
                  className={cn(
                    'flex-1 py-2 rounded-lg text-sm font-semibold transition-all',
                    !isMonthly ? 'bg-brand text-white shadow-sm' : 'text-muted hover:text-dark',
                  )}
                >
                  One-time
                </button>
                <button
                  type="button"
                  onClick={() => setValue('isMonthly', true)}
                  className={cn(
                    'flex-1 py-2 rounded-lg text-sm font-semibold transition-all',
                    isMonthly ? 'bg-brand text-white shadow-sm' : 'text-muted hover:text-dark',
                  )}
                >
                  Monthly
                </button>
              </div>

              {/* Preset amounts */}
              <div>
                <label className="block text-sm font-medium text-dark mb-2">
                  Select amount
                </label>
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {PRESET_AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handlePresetSelect(amount)}
                      className={cn(
                        'py-2.5 rounded-lg text-sm font-semibold border-2 transition-all',
                        selectedPreset === amount
                          ? 'border-brand bg-brand text-white'
                          : 'border-gray-200 bg-white text-navy hover:border-brand/50',
                      )}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-sm" aria-hidden="true">$</span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Other amount"
                    className={cn(
                      'w-full pl-8 pr-4 py-3 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent',
                      errors.amount ? 'border-red-400' : 'border-gray-200',
                    )}
                    onChange={handleCustomAmount}
                  />
                </div>
                {errors.amount && (
                  <p className="mt-1.5 text-xs text-red-600" role="alert">{errors.amount.message}</p>
                )}
                {/* Hidden field for react-hook-form validation */}
                <input type="hidden" {...register('amount', { valueAsNumber: true })} />
              </div>

              {/* Personal info */}
              <div className="grid grid-cols-2 gap-4">
                <DonateField label="First name" error={errors.firstName?.message} htmlFor="donorFirstName">
                  <input
                    id="donorFirstName"
                    type="text"
                    autoComplete="given-name"
                    className={inputClass(!!errors.firstName)}
                    placeholder="Maria"
                    {...register('firstName')}
                  />
                </DonateField>
                <DonateField label="Last name" error={errors.lastName?.message} htmlFor="donorLastName">
                  <input
                    id="donorLastName"
                    type="text"
                    autoComplete="family-name"
                    className={inputClass(!!errors.lastName)}
                    placeholder="Santos"
                    {...register('lastName')}
                  />
                </DonateField>
              </div>

              <DonateField label="Email address" error={errors.email?.message} htmlFor="donorEmail">
                <input
                  id="donorEmail"
                  type="email"
                  autoComplete="email"
                  className={inputClass(!!errors.email)}
                  placeholder="maria@example.com"
                  {...register('email')}
                />
              </DonateField>

              <DonateField label="Leave a message (optional)" htmlFor="donorMessage">
                <textarea
                  id="donorMessage"
                  rows={3}
                  className={cn(inputClass(false), 'resize-none')}
                  placeholder="Why you support GNF's mission…"
                  {...register('message')}
                />
              </DonateField>

              <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
                {isMonthly ? 'Give Monthly' : 'Donate Now'}
              </Button>

              <p className="text-xs text-muted text-center">
                GNF is a 501(c)(3) nonprofit. Your donation is tax-deductible. Secure payment processing.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImpactSection() {
  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="Our Commitment"
          title="How your gift is used"
          subtitle="Every dollar is allocated with care and transparency."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              percent: '60%',
              label: 'Programs & Services',
              desc: 'Directly funding nurse support, community tools, and educational resources.',
              color: 'bg-brand',
            },
            {
              percent: '25%',
              label: 'In-Country Grants',
              desc: 'Education grants for nursing students in low-income countries globally.',
              color: 'bg-green',
            },
            {
              percent: '15%',
              label: 'Operations',
              desc: 'Technology infrastructure, compliance, and organizational sustainability.',
              color: 'bg-navy',
            },
          ].map(({ percent, label, desc, color }) => (
            <div key={label} className="bg-white rounded-2xl p-8 text-center">
              <div className={cn('w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4', color)}>
                <span className="font-display font-bold text-white text-lg">{percent}</span>
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2">{label}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type DonateFieldProps = {
  label: string
  error?: string
  htmlFor: string
  children: React.ReactNode
}

function DonateField({ label, error, htmlFor, children }: DonateFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-dark mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600" role="alert">{error}</p>
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
