import { cel_pattern } from "../patterns"
const cel_regex = new RegExp(cel_pattern)

test("Cel Pattern", () => {
  expect(cel_regex.test("11-1234-9152")).toBe(true)
  expect(cel_regex.test("(011)-1234-9152")).toBe(true)
  expect(cel_regex.test("(011)1234-9152")).toBe(true)
  expect(cel_regex.test("(011)-15-1234-9152")).toBe(true)
  expect(cel_regex.test("15-1234-9152")).toBe(true)
  expect(cel_regex.test("15-1234-91524")).toBe(false)
  expect(cel_regex.test("15-4-91524")).toBe(false)
})
