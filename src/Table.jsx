import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

import { PlayerData } from "./Data";

export default function RightCard() {
  return (
    <section className="w-full grid grid-cols-1 items-center p-16">
      <Card className="w-full">
        <List>
          {PlayerData.map((player) => (
            <ListItem key={player.rank}>
              <ListItemPrefix>
                <Avatar variant="rounded" src={`${player.img}.png`} />
              </ListItemPrefix>

              <div>
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
            </ListItem>
          ))}
        </List>
      </Card>
      <div className="h-lvh">Nothing</div>
    </section>
  );
}
