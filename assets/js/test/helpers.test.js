import { humanize } from '../lib/helpers'

test('humanize', () => {
  expect(humanize("hasta_tres")).toBe("Hasta Tres")
  expect(humanize("uno")).toBe("Uno")
})
