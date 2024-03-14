import type React from "react"
import { FaSearch } from "react-icons/fa"

export const Search: React.FC = () => {
  return (
    <div className="relative flex w-full">
      <input
        className="h-16 w-full rounded-xl border-4 border-[#2792DF] bg-transparent px-4 text-[24px] text-white focus:outline-none"
        type="text"
        placeholder="Search"
      />
      <button
        type="button"
        className="absolute right-2 top-2.5 flex h-10 w-10 items-center justify-center rounded-r-lg"
      >
        <FaSearch color="#2792DF" size={24} />
      </button>
    </div>
  )
}
