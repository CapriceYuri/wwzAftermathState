import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  CardFooter,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { PlayerData } from "./Data";
import { DevData } from "./LeftData";
import ChartData from "./Chart";
import { Pagination } from "./Pagination";

const sortedData = PlayerData.sort((a, b) => (a.time > b.time ? 1 : -1));

export default function MainSection() {
  const conversion = (sec) => {
    let min = Math.trunc(sec / 60);
    let reminder = sec % 60;
    return `${min}m ${reminder}s`;
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-4">
      <img src="bgtesting.png" className="fixed h-lvh w-full object-cover" />

      <section className="grid grid-cols-1 items-start pb-8 pt-12 lg:pb-8 lg:pt-0 relative order-2 lg:order-1">
        <Card className="lg:w-[80%] w-5/6 mx-auto sticky top-0 bg-transparent">
          <List>
            {DevData.map((dev) => (
              <ListItem
                key={dev.id}
                className="hover:bg-transparent cursor-default focus:bg-transparent p-2"
              >
                <ListItemPrefix className="shrink-0">
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src={`${dev.img}.png`}
                    className="shrink-0"
                  />
                </ListItemPrefix>

                <div>
                  <Typography variant="h6" color="white">
                    {dev.name}
                  </Typography>

                  <Typography
                    variant="small"
                    color={dev.special === 1 ? "red" : "amber"}
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

      <section className="py-5 col-span-3 order-1 lg:order-2">
        <Card className="w-[95%] h-[40%] lg:h-96 mx-auto mb-4 bg-transparent backdrop-blur-sm shadow-[0_0_50px_purple]">
          <ChartData />
        </Card>

        <Card className="w-[95%] mx-auto mt-8 bg-transparent backdrop-blur-lg shadow-[0_0_50px_purple]">
          <List>
            {sortedData.map((player) => (
              <ListItem
                key={player.rank}
                className=" hover:bg-indigo-300 focus:bg-purple-400"
              >
                <div className="flex lg:flex-row flex-col text-center w-1/3">
                  <Avatar
                    variant="rounded"
                    src={`${player.img}.png`}
                    className="mx-auto lg:mx-1"
                  />
                  <div>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-bold"
                    >
                      {player.name}
                    </Typography>

                    <Typography
                      variant="small"
                      color="cyan"
                      className="font-normal"
                    >
                      {player.mark}
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
            <Pagination />
          </CardFooter>
        </Card>
      </section>
    </section>
  );
}
