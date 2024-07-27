//  Добавляет пробелы на тысячных но не округлает
export function numberWithSpaces(event: number | string): string | null {
  if (!event || (typeof event != 'number' && typeof event != 'string')) {
    return null
  }
  const price = event.toString().replaceAll(' ', '')
  const parts = price.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  if (parts.length <= 2) {
    return parts.join('.')
  } else {
    return [parts[0], parts[1]].join('.')
  }
}

// Добавляет пробелы на тысячных и округляет по заданному числу
export function divisionIntoThousandths(price: number | string, scale: number) {
  if (typeof price != 'number' && typeof price != 'string') {
    return null
  }
  const changedPrice = price.toString().split(' ').join('')
  const parts = changedPrice.split('.')

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  const integerPart = parts[0]
  const [, nonIntegerPart] = Number(changedPrice).toFixed(scale).split('.')
  if (nonIntegerPart) return integerPart + '.' + nonIntegerPart
  return '-'
}
