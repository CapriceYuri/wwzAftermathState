import { Card, Typography } from "@material-tailwind/react";
import { totalRuns } from "../Weeklies/DataLogic";

export default function TotalRunsCard() {
  return (
    <Card
      className="w-[100%] h-56 mx-auto bg-transparent relative border-4 border-black rounded-2xl"
      shadow={false}
    >
      <img
        src="placeholder4.png"
        className="h-full w-full object-cover rounded-xl absolute"
      />
      <div className="absolute h-full w-full bg-gradient-to-r to-black via-purple-900 from-black opacity-70 rounded-xl" />
      <div className="z-50 flex flex-col h-full justify-center items-center mx-auto">
        <Typography variant="h4" color="white">
          {`Total Runs`}
        </Typography>
        <Typography
          variant="h1"
          color="deep-orange"
          className="font-bold"
          children={totalRuns}
        ></Typography>
      </div>
    </Card>
  );
}
