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
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "Caprice Yuri",
    team: "Apocalypse Avengers",
    profession: "Hellraiser",
    region: "NA",
    online: true,
    rank: "1",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Bot 1",
    team: "Corpse Crushers",
    profession: "Vanguard",
    region: "EU",
    online: false,
    rank: "2",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Bot 2",
    team: "Corpse Crushers",
    profession: "Dronemaster",
    region: "EU",
    online: false,
    rank: "3",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Bot 3",
    team: "Infected Reapers",
    profession: "Exterminators",
    region: "KR",
    online: true,
    rank: "4",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Bot 4",
    team: "Zombie Exterminators",
    profession: "Gunslinger",
    region: "CN",
    online: false,
    rank: "5",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Bot 5",
    team: "Deadshot Legion",
    profession: "Medic",
    region: "SA",
    online: false,
    rank: "6",
  },
];

export default function Table() {
  return (
    <section className="flex justify-center items-center w-full h-lvh overflow-y-auto">
      <Card className="w-full md:w-5/6 lg:w-4/5 bg-transparent backdrop-filter backdrop-invert backdrop-blur-xl">
        <CardHeader shadow={false} className="mt-4 bg-transparent text-center">
          <div>
            <div className="text-indigo-800 text-3xl">Players List</div>
            <div className="text-indigo-500">
              See information about all players
            </div>
          </div>
        </CardHeader>

        <CardBody className="px-0 py-4">
          <table className="mt-2 w-full">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-blue-gray-100 p-4">
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
                  { img, name, team, profession, region, online, rank },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-green-100";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="h6"
                              color="black"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="deep-purple"
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
                            variant="small"
                            color="deep-purple"
                            className="font-normal"
                          >
                            {profession}
                          </Typography>
                          <Typography
                            variant="small"
                            color="black"
                            className="font-semibold"
                          >
                            {region}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={online ? "S" : "A+"}
                            color={online ? "red" : "blue"}
                          />
                        </div>
                      </td>

                      <td className={classes}>
                        <Typography variant="h4" color="black">
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
    </section>
  );
}
