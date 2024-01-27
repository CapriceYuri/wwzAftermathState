import { Carousel, Typography, Avatar } from "@material-tailwind/react";
import { ExtremePlayer } from "../Carousel/ExtremeData";

export default function ExtremeCarousel() {
  return (
    <div className="grid grid-cols-1 my-auto">
      <Carousel className="rounded-xl" loop={true} autoplay={true}>
        {ExtremePlayer.map((player, index) => (
          <div className="h-[200px] w-full" key={index}>
            <div className="flex flex-row h-full justify-center gap-2 items-center text-start">
              <Avatar
                src={player.img}
                size="xl"
                withBorder={true}
                className="p-0.5"
                color="blue"
              />
              <div>
                <Typography
                  variant="h4"
                  color="white"
                  children={player.name}
                ></Typography>
                <Typography
                  variant="h6"
                  color="light-blue"
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
