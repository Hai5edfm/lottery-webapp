import ToggleSwitch from "@/modules/ui/toggle-switch/toggle-switch"
import { fireEvent, render, screen } from "@testing-library/react"

describe("ToggleSwitch", () => {
  it("should toggle the switch when clicked", () => {
    render(<ToggleSwitch label="Test Label" />)
    const switchElement = screen.getByRole("switch")
    expect(switchElement).not.toBeChecked()
    fireEvent.click(switchElement)
    expect(switchElement).toBeChecked()
    fireEvent.click(switchElement)
    expect(switchElement).not.toBeChecked()
  })

  it("should call onChange prop ", () => {
    const onChange = jest.fn()
    render(<ToggleSwitch onChange={onChange} label="Test Label" />)
    const switchElement = screen.getByRole("switch")
    fireEvent.click(switchElement)
    expect(onChange).toHaveBeenCalled()
  })
})
