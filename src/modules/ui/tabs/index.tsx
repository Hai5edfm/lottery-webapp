import { type FC } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface Props {
  tabsArray: TabProps[]
  selectedTab: string
  tab: "admin" | "public"
}

interface TabProps {
  name: string
  value?: string
  selected: boolean
}

export const Tabs: FC<Props> = ({ tabsArray, selectedTab, tab }) => {
  const queryParams = useSearchParams()
  const tabParam = tab ?? queryParams.get("tab") ?? "public"

  return (
    <div className="w-full">
      <ul className="flex w-full justify-between">
        {tabsArray.map((_tab, index) => (
          <li key={tabsArray[index].name}>
            <Link
              href={
                tabParam === "admin"
                  ? `/admin/lotteries?type=${_tab.value ?? _tab.name}&tab=${tabParam}`
                  : `/?type=${_tab.value ?? _tab.name}&tab=${tabParam}`
              }
              className={`min-w-[152px] border-b-4 pb-1 text-center ${
                (_tab.value ?? _tab.name) === selectedTab
                  ? "border-[#29A5FF]"
                  : "border-transparent"
              }`}
            >
              {_tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
