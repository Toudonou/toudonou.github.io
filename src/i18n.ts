export const languages = ["fr", "en"] as const;

export type Language = (typeof languages)[number];

export function isLanguage(value: string | undefined): value is Language {
  return !!value && languages.includes(value as Language);
}
