import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,
  Avatar,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Player", "Region", "Rating", "Rank"];

const TABLE_ROWS = [
  {
    img: "player-X",
    name: "Caprice Yuri",
    team: "Bunko Only",
    profession: "Hellraiser",
    region: "Still Downloading",
    online: true,
    power: 10,
    rank: "1",
  },
  {
    img: "player-Osanai",
    name: "Osanai",
    team: "Hello Kitty",
    profession: "Exterminator",
    region: "Cat Shelter",
    online: true,
    rank: "2",
  },
  {
    img: "player-aedonis",
    name: "Aedonis",
    team: "Kimiko Cult",
    profession: "Gunslinger",
    region: "Only NY1",
    online: true,
    rank: "3",
  },
  {
    img: "player-Tina",
    name: "Zero Two",
    team: "Kimiko Cult",
    profession: "Vanguard",
    region: "Still AFK",
    online: true,
    rank: "4",
  },
  {
    img: "player-Mew",
    name: "Mentality",
    team: "Kimiko Cult",
    profession: "Vanguard",
    region: "Trap In PVP",
    online: true,
    rank: "5",
  },
  {
    img: "player-imperion",
    name: "Imperion",
    team: "Kimiko Cult",
    profession: "Vanguard",
    region: "Spam Shield",
    online: true,
    rank: "6",
  },
  {
    img: "bot",
    name: "Bot",
    team: "Bot",
    profession: "Bot",
    region: "Test",
    online: true,
    rank: "9",
  },
  {
    img: "bot",
    name: "Bot",
    team: "Bot",
    profession: "Bot",
    region: "Test",
    online: true,
    rank: "9",
  },
  {
    img: "bot",
    name: "Bot",
    team: "Bot",
    profession: "Bot",
    region: "Test",
    online: true,
    rank: "9",
  },
];

export default function Table() {
  return (
    <div className="h-dvh w-full overflow-auto grid grid-cols-1 place-items-center py-10">
      <Card className="w-[95%] lg:w-5/6 bg-transparent backdrop-filter backdrop-invert backdrop-blur-3xl">
        <CardHeader shadow={false} className="mt-4 bg-transparent text-center">
          <div>
            <div className="text-indigo-800 text-3xl">Players Ranking</div>
            <div className="text-indigo-500">Information about all players</div>
          </div>
        </CardHeader>

        <CardBody className="px-0 py-4">
          <table className="mt-2 w-full">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-indigo-400 p-4">
                    <Typography
                      variant="h5"
                      color="indigo"
                      className="flex justify-between font-bold"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {TABLE_ROWS.map(
                (
                  { img, name, team, profession, region, online, rank, power },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-indigo-200";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex flex-col md:flex-row gap-3 ">
                          <Avatar src={`${img}.png`} alt={name} size="sm" />

                          <div className="flex flex-col">
                            <Typography
                              variant="h6"
                              color="indigo"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="amber"
                              className="font-normal"
                            >
                              {team}
                            </Typography>
                          </div>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="h6"
                            color="indigo"
                            className="font-bold"
                          >
                            {profession}
                          </Typography>
                          <Typography
                            variant="small"
                            color="amber"
                            className="font-normal"
                          >
                            {region}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max flex flex-col md:flex-row gap-2">
                          <Chip
                            size="sm"
                            value={online ? "S+" : "A+"}
                            color={online ? "red" : "blue"}
                          />
                          <Chip
                            size="sm"
                            value={power > 5 ? "Tag1" : "Tag2"}
                            color={power ? "indigo" : "blue"}
                          />
                        </div>
                      </td>

                      <td className={classes}>
                        <Typography variant="h4" color="indigo">
                          {rank}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
