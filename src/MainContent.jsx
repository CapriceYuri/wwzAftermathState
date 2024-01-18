import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  CardFooter,
} from "@material-tailwind/react";

import React from "react";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";

import { PlayerData } from "./Data";
import { ExtremePlayer } from "./ExtremeData";
import { HordePlayer } from "./HordeData";

import { TestData } from "./Data2";

const sortedData = PlayerData.sort((a, b) => (a.time > b.time ? 1 : -1));
const sortedData2 = TestData.sort((a, b) => (a.time > b.time ? 1 : -1));

const allData = [sortedData, sortedData2];

export default function MainSection() {
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(allData[0]);

  const handleClick = () => {
    setPageInfo(allData[1]);
  };

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

  return (
    <section className="grid grid-cols-2 xl:grid-cols-4 relative">
      <img src="bgtesting.png" className="fixed h-lvh w-full object-cover" />

      <section className="grid grid-cols-1 justify-start pb-8 mt-5 xl:pb-8 xl:pt-0 relative order-2 xl:order-1 mx-auto">
        <Card className="sticky top-0 h-2 bg-transparent">
          <List className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 px-0 pb-8 mx-0">
            {HordePlayer.map((dev) => (
              <ListItem
                key={dev.id}
                className="hover:bg-transparent cursor-default focus:bg-transparent py-1"
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
                    variant="sm"
                    color={dev.id > 10 ? "green" : "deep-orange"}
                    className="font-semibold text-sm"
                  >
                    {dev.name}
                  </Typography>

                  <Typography
                    variant="small"
                    color={dev.id > 10 ? "green" : "deep-orange"}
                    className="font-normal"
                  >
                    {dev.mark}
                  </Typography>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </section>

      <section className="py-5 col-span-2 order-1 xl:order-2">
        <Card className="w-[95%] h-80 mx-auto mb-4 bg-transparent backdrop-blur-sm shadow-[0_0_20px_purple] relative">
          <img
            src="placeholder.png"
            className="h-full w-full object-cover rounded-2xl absolute -z-10"
          />
          <div className="absolute h-full w-full bg-gradient-to-b from-purple-900 to-red-500 opacity-60 rounded-xl"></div>
        </Card>

        <Card className="w-[95%] mx-auto mt-8 bg-transparent backdrop-blur-xl shadow-[0_0_20px_purple]">
          <List>
            {pageInfo.map((player) => (
              <ListItem
                key={player.rank}
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
                    >
                      {player.name}
                    </Typography>
                  </div>
                </div>
                <div className="mx-4 text-center w-2/5">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold"
                  >
                    {player.map}
                  </Typography>

                  <Typography
                    variant="small"
                    color="amber"
                    className="font-normal"
                  >
                    {player.diff}
                  </Typography>
                </div>

                <div className="mx-4 text-center w-1/4">
                  <Typography variant="h6" color="white">
                    {player.type}
                  </Typography>

                  <Typography
                    variant="small"
                    color="amber"
                    className="font-normal"
                  >
                    {conversion(player.time)}
                  </Typography>
                </div>

                <div className="flex justify-center max-w-sm">
                  <a href={player.src} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-red-600 z-10"
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

      <section className="grid grid-cols-1 justify-start pb-8 mt-5 xl:pb-8 xl:pt-0 relative order-3 xl:order-3 mx-auto">
        <Card className="sticky top-0 h-2 bg-transparent">
          <List className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 px-0 pb-8 mx-0">
            {ExtremePlayer.map((dev) => (
              <ListItem
                key={dev.id}
                className="hover:bg-transparent cursor-default focus:bg-transparent py-1"
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
                    variant="sm"
                    color="blue"
                    className="font-normal text-sm"
                  >
                    {dev.name}
                  </Typography>

                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal"
                  >
                    {dev.mark}
                  </Typography>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </section>
    </section>
  );
}
