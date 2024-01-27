import { Card, Typography } from "@material-tailwind/react";
import { totalUniquePlayers } from "../Weeklies/DataLogic";

export default function TotalPlayerCard() {
  return (
    <Card
      className="w-[100%] h-56 mx-auto bg-transparent shadow-[0_0_40px_purple] relative"
      shadow={false}
    >
      <img
        src="placeholder5.png"
        className="h-full w-full object-cover rounded-2xl absolute"
      />
      <div className="absolute h-full w-full bg-gradient-to-b to-purple-900 from-blue-500 opacity-60 rounded-xl" />

      <div className="z-50 flex flex-col h-full justify-center items-center mx-auto">
        <Typography variant="h4" color="white">
          {`Unique Players`}
        </Typography>
        <Typography
          variant="h1"
          color="deep-orange"
          className="font-bold"
          children={totalUniquePlayers}
        ></Typography>
      </div>
    </Card>
  );
}
