// Waitlist service — replace stub with actual API integration when backend is ready

export type WaitlistPayload = {
  firstName: string
  lastName: string
  email: string
  country: string
  nurseStatus: string
}

export const submitWaitlist = async (_payload: WaitlistPayload): Promise<void> => {
  // TODO: POST to /api/waitlist or a third-party form service (e.g. Mailchimp, Airtable)
  await new Promise<void>((resolve) => setTimeout(resolve, 800))
}
