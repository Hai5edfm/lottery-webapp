import { type FC } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface Props {
  tabsArray: TabProps[]
  selectedTab: string
}

interface TabProps {
  name: string
  value?: string
  selected: boolean
}

export const Tabs: FC<Props> = ({ tabsArray, selectedTab }) => {
  const queryParams = useSearchParams()
  const tabParam = queryParams.get("tab") ?? "public"

  return (
    <div className="w-full">
      <ul className="flex w-full justify-between">
        {tabsArray.map((tab, index) => (
          <li key={tabsArray[index].name}>
            {/* <button
              onClick={() => setSelectedTab(tab.value ?? tab.name)}
              className={`min-w-[152px] border-b-4 pb-1 text-center ${
                (tab.value ?? tab.name) === selectedTab ? "border-[#29A5FF]" : "border-transparent"
              }`}
            >
              {tab.name}
            </button> */}
            <Link
              href={
                tabParam === "admin"
                  ? `/admin/lotteries?type=${tab.value ?? tab.name}&tab=${tabParam}`
                  : `/?type=${tab.value ?? tab.name}&tab=${tabParam}`
              }
              className={`min-w-[152px] border-b-4 pb-1 text-center ${
                (tab.value ?? tab.name) === selectedTab ? "border-[#29A5FF]" : "border-transparent"
              }`}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
