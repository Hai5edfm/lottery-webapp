import { LotteriesType } from "@/modules/utils/pagination"
export const TABS = [
  {
    name: "All",
    selected: true,
    value: LotteriesType.ALL,
    onClick: () => {},
  },
  {
    name: "Public",
    selected: false,
    value: LotteriesType.PUBLIC,
    onClick: () => {},
  },
  {
    name: "Private",
    selected: false,
    value: LotteriesType.PRIVATE,
    onClick: () => {},
  },
]

export const ADMIN_TABS = [
  {
    name: "All",
    selected: true,
    onClick: () => {},
  },
  // {
  //   name: "Created by me",
  //   selected: false,
  //   onClick: () => {},
  // },
  {
    name: "Public",
    selected: false,
    onClick: () => {},
  },
  {
    name: "Private",
    selected: false,
    onClick: () => {},
  },
]
