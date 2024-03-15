import { type LotteryCardProps } from "@/modules/interfaces"

export const LOTTERIES: LotteryCardProps[] = [
  {
    name: "Lottery 1",
    description: "Description 1",
    time: "00:10:00",
    participants: {
      current: 10,
      max: 50,
    },
    onClick: () => console.log("Lottery 1"),
  },
  {
    name: "Lottery 2",
    description: "Description 2",
    time: "12:02:10",
    participants: {
      current: 20,
      max: 50,
    },
    onClick: () => console.log("Lottery 2"),
  },
  {
    name: "Lottery 3",
    description: "Description 3",
    time: "02:53:00",
    participants: {
      current: 30,
      max: 50,
    },
    onClick: () => console.log("Lottery 3"),
  },
  {
    name: "Lottery 4",
    description: "Description 4",
    time: "01:42:00",
    participants: {
      current: 40,
      max: 50,
    },
    onClick: () => console.log("Lottery 4"),
  },
  {
    name: "Lottery 5",
    description: "Description 5",
    time: "01:06:57",
    participants: {
      current: 50,
      max: 50,
    },
    onClick: () => console.log("Lottery 5"),
  },
  {
    name: "Lottery 6",
    description: "Description 6",
    time: "00:10:00",
    participants: {
      current: 10,
      max: 50,
    },
    onClick: () => console.log("Lottery 6"),
  },
  {
    name: "Lottery 7",
    description: "Description 7",
    time: "12:02:10",
    participants: {
      current: 20,
      max: 50,
    },
    onClick: () => console.log("Lottery 7"),
  },
  {
    name: "Lottery 8",
    description: "Description 8",
    time: "02:53:00",
    participants: {
      current: 30,
      max: 50,
    },
    onClick: () => console.log("Lottery 8"),
  },
  {
    name: "Lottery 9",
    description: "Description 9",
    time: "01:42:00",
    participants: {
      current: 40,
      max: 50,
    },
    onClick: () => console.log("Lottery 9"),
  },
]
