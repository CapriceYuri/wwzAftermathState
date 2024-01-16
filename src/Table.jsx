import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
} from "@material-tailwind/react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Player", "Region", "Rating", "Rank"];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "Caprice Yuri",
    team: "Apocalypse Avengers",
    profession: "Everything",
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
    <section className="flex justify-center items-center h-screen">
      <Card className="h-full w-full md:w-4/5 md:h-4/5 shadow-[0_0_50px_indigo]">
        <CardHeader
          floated={false}
          shadow={false}
          clems-center
          justassName="rounded-lg"
        >
          <div className="mb-8 flex itify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Players list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all players
              </Typography>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
          </div>
        </CardHeader>

        <CardBody className="px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
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
                    ? "p-4 md:text-center"
                    : "p-4 border-b border-green-100 md:text-center";

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
                            className="font-semibold opacity-70"
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
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 1
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outlined" size="sm" disabled>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
