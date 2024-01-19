import {
  List,
  ListItem,
  Avatar,
  Card,
  Typography,
  CardFooter,
  Carousel,
} from "@material-tailwind/react";

import React from "react";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";

import { PlayerData } from "./DataFile/Data";
import { ExtremePlayer } from "./DataFile/ExtremeData";
import { HordePlayer } from "./DataFile/HordeData";

import { TestData } from "./DataFile/Data2";

// Required Imports

PlayerData.runs.sort((a, b) => (a.time > b.time ? 1 : -1));
TestData.runs.sort((a, b) => (a.time > b.time ? 1 : -1));

const allData = [PlayerData, TestData];
const links = [
  { title: "Perks", src: "https://capriceyuri.github.io/wwzAftermathPerks/" },
  { title: "Horde", src: "https://capriceyuri.github.io/wwzAftermathHorde/" },
  {
    title: "Speedrun",
    src: "https://capriceyuri.github.io/wwzAftermathExtreme/",
  },
];
// Data Assortment

export default function MainSection() {
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(allData[0]);
  // Hooks - Functionality

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "white",
    onClick: () => {
      setActive(index);
      setPageInfo(allData[index - 1]);
    },
  });
  const conversion = (sec) => {
    let min = Math.trunc(sec / 60);
    let reminder = sec % 60;
    return `${min}m ${reminder}s`;
  };

  // Functions & Callbacks

  return (
    <section className="grid grid-cols-4 2xl:grid-cols-6 relative h-full overflow-x-hidden">
      <img
        src="bgtesting.png"
        className="fixed h-lvh w-full object-cover -z-10"
      />

      <section className="col-span-4 2xl:col-start-2">
        <Card
          className="w-[100%] h-16 mb-4 mx-auto bg-transparent shadow-[0_0_20px_indigo]"
          shadow={false}
        >
          <img
            src="placeholder3.png"
            className="h-full w-full object-cover rounded-2xl absolute"
          />
          <div className="absolute h-full w-full bg-gradient-to-t to-purple-900 from-red-400 opacity-80 rounded-xl" />
          <nav className="h-full mix-blend-overlay">
            <ul className="grid grid-cols-3 h-full justify-evenly place-items-center">
              {links.map((link) => (
                <li>
                  <a href={link.src} target="_blank">
                    <Typography
                      color="white"
                      variant="h6"
                      className="hover:text-black"
                    >
                      {link.title}
                    </Typography>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Card>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-[100%] gap-x-2">
          <Card
            className="w-[95%] h-56 mx-auto mb-4 bg-transparent shadow-[0_0_10px_red] relative"
            shadow={false}
          >
            <img
              src="placeholder2.png"
              className="h-full w-full object-cover rounded-2xl absolute"
            />
            <div className="absolute h-full w-full bg-gradient-to-b to-purple-900 from-red-400 opacity-60 rounded-xl" />

            <div className="grid grid-cols-1 my-auto">
              <Carousel className="rounded-xl" loop={true} autoplay={true}>
                {HordePlayer.map((player) => (
                  <div className="h-[200px] w-full">
                    <div className="flex flex-row h-full justify-center gap-2 items-center text-start">
                      <Avatar
                        src={player.img}
                        size="xl"
                        withBorder={true}
                        className="p-0.5"
                        color="deep-orange"
                      />
                      <div>
                        <Typography variant="h4" color="white">
                          {player.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="deep-orange"
                          className="font-semibold"
                          children={player.mark}
                        ></Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </Card>
          <Card
            className="w-[95%] h-56 mx-auto mb-4 bg-transparent shadow-[0_0_10px_red] relative"
            shadow={false}
          >
            <img
              src="placeholder2.png"
              className="h-full w-full object-cover rounded-2xl absolute"
            />
            <div className="absolute h-full w-full bg-gradient-to-b to-purple-900 from-red-400 opacity-60 rounded-xl" />

            <div className="grid grid-cols-1 my-auto">
              <Carousel className="rounded-xl" loop={true} autoplay={true}>
                {ExtremePlayer.map((player) => (
                  <div className="h-[200px] w-full">
                    <div className="flex flex-row h-full justify-center gap-2 items-center text-start">
                      <Avatar
                        src={player.img}
                        size="xl"
                        withBorder={true}
                        className="p-0.5"
                        color="blue"
                      />
                      <div>
                        <Typography variant="h4" color="white">
                          {player.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="light-blue"
                          className="font-semibold"
                          children={player.mark}
                        ></Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </Card>
        </div>

        <Card
          className="w-[100%] mx-auto bg-transparent backdrop-blur-xl shadow-[0_0_50px_purple] relative"
          shadow={false}
        >
          <img
            src="placeholder.png"
            className="h-full w-full object-cover rounded-2xl fixed -z-10"
          />
          <div className="absolute h-full w-full bg-gradient-to-b from-purple-900 to-red-400 opacity-60 rounded-xl"></div>
          <List className="z-50">
            <div>
              <Typography
                color="orange"
                variant="h5"
                className="text-center p-2"
                children="LEADERBOARD"
              ></Typography>
            </div>
            <div className="flex flex-row justify-evenly gap-2">
              {pageInfo.mutators.map((mute) => (
                <div>
                  <Typography
                    color="pink"
                    variant="h6"
                    className="font-semibold text-md"
                    children={mute}
                  ></Typography>
                </div>
              ))}
            </div>
            {pageInfo.runs.map((player, index) => (
              <ListItem
                key={index}
                className=" hover:bg-indigo-300 focus:bg-purple-400"
              >
                <div className="flex xl:flex-row flex-col items-center text-center w-1/3">
                  <Avatar
                    variant="rounded"
                    src={`${player.img}.png`}
                    className="mx-auto xl:mx-1"
                  />
                  <div>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-bold"
                      children={player.name}
                    ></Typography>
                  </div>
                </div>
                <div className="mx-4 text-center w-2/5">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold"
                    children={player.map}
                  ></Typography>

                  <Typography
                    variant="small"
                    color="amber"
                    className="font-normal"
                    children={player.diff}
                  ></Typography>
                </div>

                <div className="mx-4 text-center w-1/4">
                  <Typography
                    variant="h6"
                    color="white"
                    children={player.type}
                  ></Typography>

                  <Typography
                    variant="small"
                    color="amber"
                    className="font-normal"
                    children={conversion(player.time)}
                  ></Typography>
                </div>

                <div className="flex justify-center max-w-sm">
                  <a href={player.src} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-400 z-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </ListItem>
            ))}
          </List>
          <CardFooter>
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-1">
                <IconButton {...getItemProps(1)}>1</IconButton>
                <IconButton {...getItemProps(2)}>2</IconButton>
              </div>
            </div>
          </CardFooter>
        </Card>
      </section>
    </section>
  );
}
