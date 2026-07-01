import type { en } from './translations/en'

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>
}

export type TranslationDictionary = DeepStringify<typeof en>

type NestedKeyOf<T, Prefix extends string = ''> = T extends string
  ? Prefix extends ''
    ? never
    : Prefix
  : T extends object
    ? {
        [K in keyof T & string]: NestedKeyOf<T[K], Prefix extends '' ? K : `${Prefix}.${K}`>
      }[keyof T & string]
    : never

export type TranslationKey = NestedKeyOf<typeof en>

export type InterpolationValues = Record<string, string | number>
