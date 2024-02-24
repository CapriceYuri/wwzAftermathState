import { eventChristmas } from "../Weeklies/eventChristmas";
import {
  Card,
  Typography,
  List,
  ListItem,
  Avatar,
} from "@material-tailwind/react";

export default function ChristmasCard() {
  return (
    <Card
      className="w-[100%] mx-auto mb-4 bg-transparent rounded-2xl backdrop-blur-xl shadow-[0_0_50px_green] relative"
      shadow={false}
    >
      <div className="bg-gradient-to-t from-green-400 to-cyan-600 h-full w-full object-cover rounded-2xl fixed -z-10 opacity-60" />
      <List className="z-20 relative">
        <div
          className={`bg-[url(/rings/christmasbg.gif)] border-2 border-green-400 rounded-2xl bg-contain opacity-40 absolute h-full w-full top-0 left-0 -z-10 `}
        />
        <div>
          <Typography
            color="white"
            variant="h4"
            className="text-center p-2 rounded-2xl"
            children={eventChristmas.title}
          ></Typography>
        </div>
        {eventChristmas.runs.map((player, index) => (
          <ListItem
            key={index}
            className=" hover:bg-transparent focus:bg-transparent flex flex-row relative"
          >
            <div className="flex flex-col flex-1 text-center">
              <div>
                <div className="flex justify-evenly">
                  <div className="relative">
                    <Avatar
                      size="lg"
                      variant="circular"
                      src={`${player.p1_img}.png`}
                      withBorder={true}
                      className="p-1"
                    />
                    <img
                      src={`rings/discord-green.gif`}
                      className="absolute top-0 start-0"
                    />
                    <div>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-bold"
                        children={player.p1_name}
                      ></Typography>
                    </div>
                  </div>

                  <div className="relative">
                    <Avatar
                      size="lg"
                      variant="circular"
                      src={`${player.p2_img}.png`}
                      withBorder={true}
                      className="p-1"
                    />
                    <img
                      src={`rings/discord-green.gif`}
                      className="absolute top-0 start-0"
                    />
                    <div>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-bold"
                        children={player.p2_name}
                      ></Typography>
                    </div>
                  </div>

                  <div className="relative">
                    <Avatar
                      size="lg"
                      variant="circular"
                      src={`${player.p3_img}.png`}
                      withBorder={true}
                      className="p-1"
                    />
                    <img
                      src={`rings/discord-green.gif`}
                      className="absolute top-0 start-0"
                    />
                    <div>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-bold"
                        children={player.p3_name}
                      ></Typography>
                    </div>
                  </div>

                  <div className="relative">
                    <Avatar
                      size="lg"
                      variant="circular"
                      src={`${player.p4_img}.png`}
                      withBorder={true}
                      className="p-1"
                    />
                    <img
                      src={`rings/discord-green.gif`}
                      className="absolute top-0 start-0"
                    />
                    <div>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-bold"
                        children={player.p4_name}
                      ></Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center hidden md:block">
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
