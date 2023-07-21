export const dateRelativeTimeFormat = new Intl.RelativeTimeFormat('pt-BR', {
  numeric: 'auto',
})

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'long',
})

export const dateFormmaterInHours = (date: string) => {
  const diffInHours = Math.floor(
    (Date.now() - new Date(date).getTime()) / (1000 * 60 * 60),
  )

  return dateRelativeTimeFormat.format(-diffInHours, 'hour')
}
