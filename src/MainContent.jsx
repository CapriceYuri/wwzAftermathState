import {
  List,
  ListItem,
  Avatar,
  Card,
  Typography,
  CardFooter,
  IconButton,
} from "@material-tailwind/react";

import React from "react";
import { useState } from "react";

import { StatRun } from "./DataFile/Weeklies/Stats";
import HordeCarousel from "./DataFile/Compo/HordeCarousel";
import ExtremeCarousel from "./DataFile/Compo/SpeedrunCarousel";
import TotalRunsCard from "./DataFile/Compo/TotalRunCard";
import TotalPlayerCard from "./DataFile/Compo/TotalPlayerCard";
import NavigationBar from "./DataFile/Compo/Nav";

import { allData } from "./DataFile/Weeklies/DataLogic";

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
        src="coverbg.png"
        className="fixed h-lvh w-full object-cover -z-10"
      />
      <section className="col-span-4 2xl:col-start-2">
        <NavigationBar />
        <div className="grid grid-cols-2 my-2 mx-auto w-[100%] gap-x-2 p-2">
          <TotalRunsCard />
          <TotalPlayerCard />
        </div>

        <Card
          className="w-[100%] mx-auto bg-transparent backdrop-blur-xl shadow-[0_0_50px_purple] relative"
          shadow={false}
        >
          <img
            src="kimiko.png"
            className="h-full w-full object-cover rounded-2xl fixed -z-10"
          />
          <div className="absolute h-full w-full bg-gradient-to-b from-purple-900 to-blue-500 opacity-60 rounded-xl"></div>
          <List className="z-50">
            <div>
              <Typography
                color="deep-orange"
                variant="h5"
                className="text-center p-2"
                children="HIERARCHY RUNS"
              ></Typography>
            </div>
            {StatRun.runs.map((player, index) => (
              <ListItem
                key={index}
                className=" hover:bg-black focus:bg-black flex flex-row"
              >
                <div className="flex flex-col sm:text-center sm:items-center flex-1">
                  <div className="relative mx-auto">
                    <Avatar
                      variant="circular"
                      src={`${player.img}.png`}
                      className="md:mx-auto p-0.5"
                      withBorder={true}
                    />
                    <img
                      src={`rings/discord-${player.ring}.gif`}
                      className="absolute top-0 start-0"
                    />
                  </div>

                  <div>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-bold"
                      children={player.name}
                    ></Typography>
                  </div>
                </div>
                <div className="mx-4 flex-1 text-center">
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
                <div className="mx-4 flex-1 text-center">
                  <Typography
                    variant="h6"
                    color={player.team === "SOLO" ? "deep-orange" : "amber"}
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
                    variant="small"
                    color="yellow"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-[100%] gap-x-2">
          <Card
            className="w-[100%] h-56 mx-auto my-4 bg-transparent shadow-[0_0_40px_purple] relative"
            shadow={false}
          >
            <img
              src="placeholder3.png"
              className="h-full w-full object-cover rounded-2xl absolute"
            />
            <div className="absolute h-full w-full bg-gradient-to-b to-purple-900 from-blue-500 opacity-60 rounded-xl" />
            <HordeCarousel />
          </Card>
          <Card
            className="w-[100%] h-56 mx-auto my-4 bg-transparent shadow-[0_0_40px_purple] relative"
            shadow={false}
          >
            <img
              src="placeholder2.png"
              className="h-full w-full object-cover rounded-2xl absolute"
            />
            <div className="absolute h-full w-full bg-gradient-to-b to-purple-900 from-blue-500 opacity-60 rounded-xl" />
            <ExtremeCarousel />
          </Card>
        </div>

        <Card
          className="w-[100%] mx-auto mb-8 bg-transparent backdrop-blur-xl shadow-[0_0_50px_purple] relative"
          shadow={false}
        >
          <img
            src="bunko.png"
            className="h-full w-full object-cover rounded-2xl fixed -z-10"
          />
          <div className="absolute h-full w-full bg-gradient-to-b from-purple-900 to-blue-500 opacity-60 rounded-xl"></div>
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
              {pageInfo.mutators.map((mute, index) => (
                <div key={index}>
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
                className="hover:bg-black focus:bg-black flex flex-row"
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
                    color={player.rating === "SOLO" ? "deep-orange" : "amber"}
                    className="font-semibold"
                    children={player.rating}
                  ></Typography>

                  <Typography
                    variant="h6"
                    color="white"
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
                <IconButton {...getItemProps(4)}>4</IconButton>
                <IconButton {...getItemProps(5)}>5</IconButton>
              </div>
            </div>
          </CardFooter>
        </Card>
      </section>
    </section>
  );
}
