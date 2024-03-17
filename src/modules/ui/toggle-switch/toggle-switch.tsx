import { useState } from "react"
import { Switch, type SwitchProps } from "@headlessui/react"

import { cn } from "@/modules/utils/cn"

const ToggleSwitch = ({ label, ...props }: SwitchProps<"button"> & { label?: string }) => {
  const [enabled, setEnabled] = useState(props.checked ?? false)
  const disabled = props.disabled ?? false

  // HANDLERS
  const handleChange = (checked: boolean) => {
    setEnabled(checked)
    if (props.onChange) {
      props.onChange(checked)
    }
  }

  return (
    <Switch.Group>
      <Switch.Label className="font-semibold">{label}</Switch.Label>
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={cn(
          "relative inline-flex h-[32px] w-[68px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75 bg-[#83C3F154]",
          {
            "bg-[#83c3f1]": enabled,
          }
        )}
        disabled={disabled}
      >
        <span
          aria-hidden="true"
          title="toggle"
          className={cn(
            `
         pointer-events-none inline-block h-[29px] w-[29px] transform rounded-full bg-[#29a6ff6a] shadow-lg ring-0 transition duration-200 ease-in-out translate-x-0`,
            { "translate-x-9 bg-[#29A5FF]": enabled }
          )}
        />
      </Switch>
    </Switch.Group>
  )
}

export default ToggleSwitch
