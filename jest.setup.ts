import "@testing-library/jest-dom"

import { mswServer } from "@/mocks/mswServer"
import { MockNextNavigation } from "@/mocks/utils/mock-next-navigation"

jest.mock("next/router", () => require("next-router-mock"))
jest.mock("next/navigation", () => MockNextNavigation)

// To mock Navigation in test on click anchor
HTMLAnchorElement.prototype.click = jest.fn()

global.URL.createObjectURL = jest.fn().mockReturnValue("/mocked-url-string.png")
global.URL.revokeObjectURL = jest.fn()

const originalConsole = console
const originalImage = Image

beforeAll(async () => {
  await mswServer.listen()

  const tooltipRoot = document.createElement("div")
  tooltipRoot.setAttribute("id", "tooltip")
  document.body.appendChild(tooltipRoot)
})

afterAll(() => {
  mswServer.close()
})

afterEach(() => {
  mswServer.resetHandlers()
  // Restore the original console
  // eslint-disable-next-line no-global-assign
  console = originalConsole
  // eslint-disable-next-line no-global-assign
  Image = originalImage
})
