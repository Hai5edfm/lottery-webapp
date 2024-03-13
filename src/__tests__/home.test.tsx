import Home from "@/app/page"
import { render, screen } from "@testing-library/react"

describe("src/app/page.tsx", () => {
  it("render without crash", async () => {
    render(<Home />)
    expect(await screen.findByText("hola world")).toBeInTheDocument()
  })
})
