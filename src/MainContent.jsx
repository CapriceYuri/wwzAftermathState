import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

import { CardBody } from "@material-tailwind/react";

import { PlayerData } from "./Data";
import { DevData } from "./LeftData";

export default function MainSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3">
      <img src="bgtesting.png" className="fixed h-lvh w-full object-cover" />
      <section className="grid grid-cols-1 items-start py-8 relative">
        <Card className="lg:w-[95%] w-5/6 mx-auto sticky top-0 bg-transparent">
          <List>
            {DevData.map((dev) => (
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src={`${dev.img}.png`}
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="white">
                    {dev.name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="red"
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

      <section className="py-5 col-span-2">
        <Card className="w-5/6 h-96 mx-auto mb-4 bg-transparent backdrop-blur-sm  shadow-[inset_0_0_50px_10px_purple]">
          <CardBody className="h-full flex flex-col justify-center text-center rounded-xl p-10">
            <Typography variant="h5" color="gray" className="mb-2">
              Unleash The Survivor Within
            </Typography>
            <Typography variant="paragraph" color="gray">
              Survivors, <br />
              <br />
              Listen up, because this is our moment. The world's gone mad, and
              the undead are knocking on our door. But guess what? We're not
              going down without a fight.
              <br />
              <br />
              "We're survivors, and survival starts now. Are you with me?
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-[95%] lg:w-5/6 mx-auto bg-transparent backdrop-blur-lg shadow-[0_0_50px_purple]">
          <List>
            {PlayerData.map((player) => (
              <ListItem
                key={player.rank}
                className="flex flex-row justify-between hover:bg-indigo-300 focus:bg-purple-400"
              >
                <ListItemPrefix>
                  <Avatar variant="rounded" src={`${player.img}.png`} />
                </ListItemPrefix>

                <div>
                  <Typography variant="h6" color="amber">
                    {player.name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {player.quote}
                  </Typography>
                </div>

                <div className="mx-4">
                  <Typography variant="h6" color="blue-gray">
                    {player.name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {player.quote}
                  </Typography>
                </div>

                <ListItemPrefix>
                  <a href="http://www.youtube.com" target="_blank">
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
                </ListItemPrefix>
              </ListItem>
            ))}
          </List>
        </Card>
      </section>
    </section>
  );
}
