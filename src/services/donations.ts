// Donation service — replace stub with Stripe or payment processor integration

export type DonationPayload = {
  amount: number
  firstName: string
  lastName: string
  email: string
  isMonthly: boolean
  message?: string
}

export const submitDonation = async (_payload: DonationPayload): Promise<void> => {
  // TODO: Integrate Stripe Checkout or similar payment processor
  await new Promise<void>((resolve) => setTimeout(resolve, 800))
}
