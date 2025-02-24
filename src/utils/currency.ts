export const formatCurrency = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
})

export const formatterPeso = (num: number) => {
  const value = num * 1000
  const result = formatCurrency.format(value)
  return result
}