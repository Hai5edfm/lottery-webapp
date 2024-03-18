import { type Dispatch, type FC, type SetStateAction } from "react"

interface Props {
  tabsArray: TabProps[]
  selectedTab: string
  setSelectedTab: Dispatch<SetStateAction<any>>
}

interface TabProps {
  name: string
  value?: string
  selected: boolean
}

export const Tabs: FC<Props> = ({ tabsArray, selectedTab, setSelectedTab }) => {
  return (
    <div className="w-full">
      <ul className="flex w-full justify-between">
        {tabsArray.map((tab, index) => (
          <li key={tabsArray[index].name}>
            <button
              onClick={() => setSelectedTab(tab.value ?? tab.name)}
              className={`min-w-[152px] border-b-4 pb-1 text-center ${
                (tab.value ?? tab.name) === selectedTab ? "border-[#29A5FF]" : "border-transparent"
              }`}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
