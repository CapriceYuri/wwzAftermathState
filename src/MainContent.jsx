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

import { Week2 } from "./DataFile/Weeklies/Week2";
import { Week1 } from "./DataFile/Weeklies/Week1";
import { Week0 } from "./DataFile/Weeklies/Week0";
import { ExtremePlayer } from "./DataFile/Carousel/ExtremeData";
import { HordePlayer } from "./DataFile/Carousel/HordeData";
import { DevStaff } from "./DataFile/Carousel/devData";
import { ModPlayer } from "./DataFile/Carousel/modData";
import { StatRun } from "./DataFile/Weeklies/Stats";

// Required Imports

const allData = [Week2, Week1, Week0];
allData.forEach((data) => data.runs.sort((a, b) => (a.time > b.time ? 1 : -1)));

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
    variant: active === index ? "gradient" : "text",
    color: "black",
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
          className="w-[100%] h-16 mb-4 mx-auto bg-transparent shadow-[0_0_50px_purple]"
          shadow={false}
        >
          <img
            src="placeholder3.png"
            className="h-full w-full object-cover rounded-2xl absolute"
          />
          <div className="absolute h-full w-full bg-gradient-to-t from-purple-900 to-red-300 opacity-80 rounded-xl" />
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
        {/* testing */}
        <Card
          className="w-[100%] mx-auto bg-transparent backdrop-blur-xl shadow-[0_0_50px_purple] relative"
          shadow={false}
        >
          <img
            src="bgtesting.png"
            className="h-full w-full object-cover rounded-2xl fixed -z-10"
          />
          <div className="absolute h-full w-full bg-gradient-to-b from-purple-900 to-red-300 opacity-70 rounded-xl"></div>
          <List className="z-50">
            <div>
              <Typography
                color="deep-orange"
                variant="h5"
                className="text-center p-2"
                children="Hierarchy Runs"
              ></Typography>
            </div>
            {StatRun.runs.map((player, index) => (
              <ListItem
                key={index}
                className=" hover:bg-black focus:bg-black flex flex-row"
              >
                <div className="flex flex-col items-center text-center flex-1">
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
                <div className="mx-4 text-center flex-1">
                  <Typography
                    variant="h6"
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
                <div className="mx-4 text-center flex-1">
                  <Typography
                    variant="h6"
                    color="red"
                    className="font-semibold"
                    children={player.team}
                  ></Typography>
                  <Typography
                    variant="small"
                    color="amber"
                    className="font-normal"
                    children={player.class}
                  ></Typography>
                </div>

                <div className="mx-4 text-center flex-1">
                  <Typography
                    variant="h6"
                    color="pink"
                    className="font-semibold"
                    children={player.stat}
                  ></Typography>

                  <Typography
                    variant="small"
                    color="amber"
                    className="font-normal"
                    children={player.statInfo}
                  ></Typography>
                </div>

                <div className="flex justify-center flex-1">
                  <a href={player.src} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      color="yellow"
                      className="w-6 h-6 z-10"
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
        </Card>
        {/* testing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-[100%] gap-x-2">
          <Card
            className="w-[100%] h-56 mx-auto my-4 bg-transparent shadow-[0_0_40px_purple] relative"
            shadow={false}
          >
            <img
              src="placeholder3.png"
              className="h-full w-full object-cover rounded-2xl absolute"
            />
            <div className="absolute h-full w-full bg-gradient-to-b to-purple-900 from-red-300 opacity-70 rounded-xl" />

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
            className="w-[100%] h-56 mx-auto my-4 bg-transparent shadow-[0_0_40px_purple] relative"
            shadow={false}
          >
            <img
              src="placeholder2.png"
              className="h-full w-full object-cover rounded-2xl absolute"
            />
            <div className="absolute h-full w-full bg-gradient-to-b to-purple-900 from-red-300 opacity-70 rounded-xl" />

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
          <div className="absolute h-full w-full bg-gradient-to-b from-purple-900 to-red-300 opacity-70 rounded-xl"></div>
          <List className="z-50">
            <div>
              <Typography
                color="orange"
                variant="h5"
                className="text-center p-2"
                children="WEEKLY LEADERBOARD"
              ></Typography>
            </div>
            <div className="flex flex-row justify-center gap-2">
              {pageInfo.mutators.map((mute) => (
                <div>
                  <Typography
                    color="pink"
                    variant="h6"
                    className="font-semibold text-lg p-2 border-2 border-pink-400 rounded-xl"
                    children={mute}
                  ></Typography>
                </div>
              ))}
            </div>
            {pageInfo.runs.map((player, index) => (
              <ListItem
                key={index}
                className=" hover:bg-black focus:bg-black flex flex-row"
              >
                <div className="flex flex-col items-center text-center flex-1">
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
                <div className="mx-4 text-center flex-1">
                  <Typography
                    variant="h6"
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

                <div className="mx-4 text-center flex-1">
                  <Typography
                    variant="h5"
                    color={player.rating === "SOLO" ? "red" : "blue"}
                    className="font-semibold"
                    children={player.rating}
                  ></Typography>

                  <Typography
                    variant="h6"
                    color="amber"
                    className="font-normal"
                    children={conversion(player.time)}
                  ></Typography>
                </div>

                <div className="flex justify-center">
                  <a href={player.src} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      color="yellow"
                      className="w-6 h-6 z-10"
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
                <IconButton {...getItemProps(3)}>3</IconButton>
              </div>
            </div>
          </CardFooter>
        </Card>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-[100%] gap-x-2">
          <Card
            className="w-[100%] h-56 mx-auto my-4 bg-transparent shadow-[0_0_40px_purple] relative"
            shadow={false}
          >
            <img
              src="placeholder4.png"
              className="h-full w-full object-cover rounded-2xl absolute"
            />
            <div className="absolute h-full w-full bg-gradient-to-b to-purple-900 from-red-300 opacity-70 rounded-xl" />

            <div className="grid grid-cols-1 my-auto">
              <Carousel className="rounded-xl" loop={true} autoplay={true}>
                {DevStaff.map((player) => (
                  <div className="h-[200px] w-full">
                    <div className="flex flex-row h-full justify-center gap-2 items-center text-start">
                      <Avatar
                        src={player.img}
                        size="xl"
                        withBorder={true}
                        className="p-0.5"
                        color="pink"
                      />
                      <div>
                        <Typography variant="h4" color="white">
                          {player.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="pink"
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
            className="w-[100%] h-56 mx-auto my-4 bg-transparent shadow-[0_0_40px_purple] relative"
            shadow={false}
          >
            <img
              src="placeholder5.png"
              className="h-full w-full object-cover rounded-2xl absolute"
            />
            {/* TESTING vid bg */}
            {/* <video
              typeof="video/mp4"
              src="monster.mp4"
              className="h-full w-full object-cover absolute"
              muted
              autoPlay
              loop
            /> */}
            <div className="absolute h-full w-full bg-gradient-to-b to-purple-900 from-red-300 opacity-70 rounded-xl" />

            <div className="grid grid-cols-1 my-auto h-full">
              <Carousel
                className="rounded-xl h-full"
                loop={true}
                autoplay={true}
              >
                {ModPlayer.map((player) => (
                  <div className="h-full w-full">
                    <div className="flex flex-row h-full justify-center gap-2 items-center text-start">
                      <Avatar
                        src={player.img}
                        size="xl"
                        withBorder={true}
                        className="p-0.5"
                        color="pink"
                      />
                      <div>
                        <Typography variant="h4" color="white">
                          {player.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="pink"
                          className="font-semibold"
                          children={player.mark}
                        ></Typography>
                        <Typography
                          variant="h6"
                          color="pink"
                          className="font-semibold"
                          children={player.mark2}
                        ></Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </Card>
        </div>
      </section>
    </section>
  );
}
