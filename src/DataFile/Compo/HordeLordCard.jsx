import { eventHordeLord } from "../Weeklies/eventHorderLord";
import {
  Card,
  Typography,
  List,
  ListItem,
  Avatar,
} from "@material-tailwind/react";

export default function HordeLordCard() {
  return (
    <Card
      className="w-[100%] mx-auto bg-transparent rounded-2xl backdrop-blur-xl relative"
      shadow={false}
    >
      <div className="bg-gradient-to-b from-black to-indigo-600 h-full w-full object-cover rounded-2xl fixed -z-10" />
      <List className="z-20 relative">
        <div
          className={`bg-[url(/rings/hordebg.gif)] border-4 border-blue-900 rounded-2xl bg-contain opacity-80 absolute h-full w-full top-0 left-0 -z-10 `}
        />
        <div>
          <Typography
            color="white"
            variant="h4"
            className="text-center p-2 rounded-2xl font-[monospace]"
            children={eventHordeLord.title}
          ></Typography>
        </div>
        {eventHordeLord.runs.map((player, index) => (
          <ListItem
            key={index}
            className=" hover:bg-transparent focus:bg-transparent flex flex-row relative"
          >
            <div className="flex flex-1">
              {/* Testing */}
              <div className="flex flex-col flex-1 text-center">
                <div className="text-center relative">
                  <Avatar
                    src={`${player.p1_img}.png`}
                    withBorder={true}
                    className="p-0.5"
                  />
                  <Avatar
                    src={`rings/discord-purple.gif`}
                    className="absolute top-0 start-50 transform -translate-x-[100%]"
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold"
                  >
                    {player.p1_name}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col flex-1 text-center">
                <div className="text-center relative">
                  <Avatar
                    src={`${player.p2_img}.png`}
                    withBorder={true}
                    className="p-0.5"
                  />
                  <Avatar
                    src={`rings/discord-purple.gif`}
                    className="absolute top-0 start-50 transform -translate-x-[100%]"
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold"
                  >
                    {player.p2_name}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col flex-1 text-center">
                <div className="text-center relative">
                  <Avatar
                    src={`${player.p3_img}.png`}
                    withBorder={true}
                    className="p-0.5"
                  />
                  <Avatar
                    src={`rings/discord-purple.gif`}
                    className="absolute top-0 start-50 transform -translate-x-[100%]"
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold"
                  >
                    {player.p3_name}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col flex-1 text-center">
                <div className="text-center relative">
                  <Avatar
                    src={`${player.p4_img}.png`}
                    withBorder={true}
                    className="p-0.5"
                  />
                  <Avatar
                    src={`rings/discord-purple.gif`}
                    className="absolute top-0 start-50 transform -translate-x-[100%]"
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold"
                  >
                    {player.p4_name}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col flex-1 text-center">
                <div className="text-center relative">
                  <Avatar
                    src={`${player.p5_img}.png`}
                    withBorder={true}
                    className="p-0.5"
                  />
                  <Avatar
                    src={`rings/discord-purple.gif`}
                    className="absolute top-0 start-50 transform -translate-x-[100%]"
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold"
                  >
                    {player.p5_name}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col flex-1 text-center">
                <div className="text-center relative">
                  <Avatar
                    src={`${player.p6_img}.png`}
                    withBorder={true}
                    className="p-0.5"
                  />
                  <Avatar
                    src={`rings/discord-purple.gif`}
                    className="absolute top-0 start-50 transform -translate-x-[100%]"
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold"
                  >
                    {player.p6_name}
                  </Typography>
                </div>
              </div>
            </div>
            {/* TESTING */}
            <div className="flex-1 text-center hidden lg:block">
              <Typography
                variant="h6"
                color="amber"
                className="font-semibold"
                children={player.map}
              ></Typography>
              <Typography
                variant="small"
                color="white"
                className="font-normal"
                children={player.chapter}
              ></Typography>
            </div>

            <div className="flex justify-center">
              <a href={player.src} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  color="yellow"
                  className="w-6 h-6 z-10 animate-bounce"
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
  );
}
