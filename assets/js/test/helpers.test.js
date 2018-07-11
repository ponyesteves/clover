import { humanize, sum } from '../lib/helpers'

test('humanize', () => {
  expect(humanize("hasta_tres")).toBe("Hasta Tres")
  expect(humanize("uno")).toBe("Uno")
})


test('sum', () => {
  expect(sum(1,2)).toBe(3)
  expect(sum(50,0,100, 24)).toBe(174)

})
