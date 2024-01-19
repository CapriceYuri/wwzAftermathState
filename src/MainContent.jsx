import {
  List,
  ListItem,
  ListItemPrefix,
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
    <section className="grid grid-cols-2 xl:grid-cols-5 relative h-dvh">
      <img
        src="bgtesting.png"
        className="fixed h-dvh w-full object-cover -z-10"
      />

      <section className="grid grid-cols-1 relative order-2 xl:order-1 mx-auto w-full">
        <Card
          className="relative lg:sticky lg:top-0 h-full xl:h-1/2 bg-transparent"
          shadow={false}
        >
          <List className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 mx-auto">
            {HordePlayer.map((dev, index) => (
              <ListItem
                key={index}
                className="hover:bg-transparent cursor-default focus:bg-transparent py-0.5"
              >
                <ListItemPrefix className="shrink-0">
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src={`${dev.img}`}
                    size="sm"
                    withBorder={true}
                    className="p-0.5"
                    color={dev.id > 10 ? "green" : "deep-orange"}
                  />
                </ListItemPrefix>

                <div>
                  <Typography
                    variant="small"
                    color={dev.id > 10 ? "green" : "deep-orange"}
                    className="font-semibold text-sm"
                    children={dev.name}
                  ></Typography>

                  <Typography
                    variant="small"
                    color={dev.id > 10 ? "green" : "deep-orange"}
                    className="font-normal"
                    children={dev.mark}
                  ></Typography>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </section>

      <section className="py-5 col-span-3 order-1 xl:order-2">
        <Card
          className="w-[95%] h-16 mb-4 mx-auto bg-transparent shadow-[0_0_20px_indigo]"
          shadow={false}
        >
          <img
            src="placeholder3.png"
            className="h-full w-full object-cover rounded-2xl absolute"
          />
          <div className="absolute h-full w-full bg-gradient-to-t to-purple-900 from-red-400 opacity-80 rounded-xl" />
          <nav className="h-full mix">
            <ul className="grid grid-cols-3 h-full justify-evenly place-items-center">
              <li>
                <a
                  href="https://capriceyuri.github.io/wwzAftermathPerks/"
                  target="_blank"
                >
                  <Typography color="orange" variant="h6" className="p1">
                    Perks
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://capriceyuri.github.io/wwzAftermathHorde/"
                  target="_blank"
                >
                  <Typography
                    color="orange"
                    variant="h6"
                    className="border-indigo-200"
                  >
                    Horde
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://capriceyuri.github.io/wwzAftermathExtreme/"
                  target="_blank"
                >
                  <Typography color="orange" variant="h6" className="p1">
                    Speedrun
                  </Typography>
                </a>
              </li>
            </ul>
          </nav>
        </Card>
        <Card
          className="w-[95%] h-56 mx-auto mb-4 bg-transparent shadow-[0_0_20px_red] relative"
          shadow={false}
        >
          <img
            src="placeholder2.png"
            className="h-full w-full object-cover rounded-2xl absolute"
          />
          <div className="absolute h-full w-full bg-gradient-to-b to-purple-900 from-red-400 opacity-60 rounded-xl" />
          <div className="grid grid-cols-1 my-auto">
            <Carousel
              className="rounded-xl"
              transition={{ duration: 2 }}
              loop={true}
              autoplay={true}
            >
              <div className="h-[200px] w-full">
                <div className="flex flex-row h-full justify-center gap-2 items-center text-start">
                  <Avatar
                    src="player-SiberianPsych0.png"
                    size="xl"
                    withBorder={true}
                    className="p-0.5"
                    color="amber"
                  />
                  <div>
                    <Typography variant="h4" color="amber">
                      SiberianPsych0
                    </Typography>
                    <Typography
                      variant="h6"
                      color="cyan"
                      className="font-semibold"
                      children={"Descent"}
                    ></Typography>
                    <Typography
                      variant="h6"
                      color="cyan"
                      className="font-semibold"
                      children={"13m 11s"}
                    ></Typography>
                  </div>
                </div>
              </div>
              <div className="h-[200px] w-full">
                <div className="flex flex-row h-full justify-center gap-2 items-center text-start">
                  <Avatar
                    src="player-aedonis.png"
                    size="xl"
                    withBorder={true}
                    className="p-0.5"
                    color="amber"
                  />
                  <div>
                    <Typography variant="h4" color="amber">
                      Aedonis
                    </Typography>
                    <Typography
                      variant="h6"
                      color="cyan"
                      className="font-semibold"
                      children={"Descent"}
                    ></Typography>
                    <Typography
                      variant="h6"
                      color="cyan"
                      className="font-semibold"
                      children={"100% Headshot Rate"}
                    ></Typography>
                  </div>
                </div>
              </div>
              <div className="h-[200px] w-full">
                <div className="flex flex-row h-full justify-center gap-2 items-center text-start">
                  <Avatar
                    src="player-Mew.png"
                    size="xl"
                    withBorder={true}
                    className="p-0.5"
                    color="amber"
                  />
                  <div>
                    <Typography variant="h4" color="amber">
                      Mewtality
                    </Typography>
                    <Typography
                      variant="h6"
                      color="cyan"
                      className="font-semibold"
                      children={"PVP"}
                    ></Typography>
                    <Typography
                      variant="h6"
                      color="cyan"
                      className="font-semibold"
                      children={"Shadow Abuser"}
                    ></Typography>
                  </div>
                </div>
              </div>
              <div className="h-[200px] w-full">
                <div className="flex flex-row h-full justify-center gap-2 items-center text-start">
                  <Avatar
                    src="player-Tina.png"
                    size="xl"
                    withBorder={true}
                    className="p-0.5"
                    color="amber"
                  />
                  <div>
                    <Typography variant="h4" color="amber">
                      Tina
                    </Typography>
                    <Typography
                      variant="h6"
                      color="cyan"
                      className="font-semibold"
                      children={"WWZ"}
                    ></Typography>
                    <Typography
                      variant="h6"
                      color="cyan"
                      className="font-semibold"
                      children={"Bug Abuser"}
                    ></Typography>
                  </div>
                </div>
              </div>
              <div className="h-[200px] w-full">
                <div className="flex flex-row h-full justify-center gap-2 items-center text-start">
                  <Avatar
                    src="dev-George.png"
                    size="xl"
                    withBorder={true}
                    className="p-0.5"
                    color="amber"
                  />
                  <div>
                    <Typography variant="h4" color="amber">
                      George
                    </Typography>
                    <Typography
                      variant="h6"
                      color="cyan"
                      className="font-semibold"
                      children={"Community"}
                    ></Typography>
                    <Typography
                      variant="h6"
                      color="cyan"
                      className="font-semibold"
                      children={"Double EXP & XP"}
                    ></Typography>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </Card>

        <Card
          className="w-[95%] mx-auto bg-transparent backdrop-blur-xl shadow-[0_0_35px_purple] relative"
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

      <section className="grid grid-cols-1 relative order-3 mx-auto w-full">
        <Card
          className="relative xl:sticky xl:top-0 h-full xl:h-1/2 bg-transparent"
          shadow={false}
        >
          <List className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 mx-auto">
            {ExtremePlayer.map((dev, index) => (
              <ListItem
                key={index}
                className="hover:bg-transparent cursor-default focus:bg-transparent py-0.5"
              >
                <ListItemPrefix className="shrink-0">
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src={`${dev.img}`}
                    size="sm"
                    withBorder={true}
                    className="p-0.5"
                    color="light-blue"
                  />
                </ListItemPrefix>

                <div>
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal text-sm"
                    children={dev.name}
                  ></Typography>

                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal"
                    children={dev.mark}
                  ></Typography>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </section>
    </section>
  );
}
