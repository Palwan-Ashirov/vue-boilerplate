import { describe, expect, test } from 'vitest'
import { numberWithSpaces, divisionIntoThousandths } from '../../utils/helpers'
import { divisionIntoThousandthsData, numberWithSpacesData } from '../data'

describe('numberWithSpaces', () => {
  test('toBe', () => {
    for (let mock of Object.values(numberWithSpacesData.toBe)) {
      expect(numberWithSpaces(mock.input)).toBe(mock.output)
    }
  })
  test('notToBe', () => {
    for (let mock of Object.values(numberWithSpacesData.notToBe)) {
      expect(numberWithSpaces(mock.input)).not.toBe(mock.output)
    }
  })
})

describe('divisionIntoThousandths', () => {
  test('toBe', () => {
    for (let data of divisionIntoThousandthsData.tobe) {
      expect(divisionIntoThousandths(...data.input)).toBe(data.output)
    }
  })
  test('notToBe', () => {
    for (let data of divisionIntoThousandthsData.notToBe) {
      expect(divisionIntoThousandths(...data.input)).not.toBe(data.output)
    }
  })
})
