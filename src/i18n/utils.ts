import type { InterpolationValues } from './types'

export function resolveTranslation(
  dictionary: Record<string, unknown>,
  key: string,
): string | undefined {
  const value = key.split('.').reduce<unknown>((current, segment) => {
    if (current && typeof current === 'object' && segment in current) {
      return (current as Record<string, unknown>)[segment]
    }
    return undefined
  }, dictionary)

  return typeof value === 'string' ? value : undefined
}

export function interpolate(message: string, values?: InterpolationValues): string {
  if (!values) return message

  return Object.entries(values).reduce(
    (result, [placeholder, value]) => result.replaceAll(`{{${placeholder}}}`, String(value)),
    message,
  )
}
