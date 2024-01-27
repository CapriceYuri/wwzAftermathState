import { HordePlayer } from "../Carousel/HordeData";
import { Carousel, Typography, Avatar } from "@material-tailwind/react";

export default function HordeCarousel() {
  return (
    <div className="grid grid-cols-1 my-auto">
      <Carousel className="rounded-xl" loop={true} autoplay={true}>
        {HordePlayer.map((player, index) => (
          <div className="h-[200px] w-full" key={index}>
            <div className="flex flex-row h-full justify-center gap-2 items-center">
              <Avatar
                src={player.img}
                size="xl"
                withBorder={true}
                className="p-0.5"
                color="deep-orange"
              />
              <div>
                <Typography variant="h4" color="white">
                  {player.name}
                </Typography>
                <Typography
                  variant="h6"
                  color="deep-orange"
                  className="font-semibold"
                  children={player.mark}
                ></Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
