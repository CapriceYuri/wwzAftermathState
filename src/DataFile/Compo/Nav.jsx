import { Card, Typography } from "@material-tailwind/react";

const links = [
  { title: "Perks", src: "https://capriceyuri.github.io/wwzAftermathPerks/" },
  { title: "Horde", src: "https://capriceyuri.github.io/wwzAftermathHorde/" },
  {
    title: "Speedrun",
    src: "https://capriceyuri.github.io/wwzAftermathExtreme/",
  },
];

export default function NavigationBar() {
  return (
    <Card
      className="w-[100%] h-16 mb-4 mx-auto bg-transparent shadow-[0_0_50px_purple]"
      shadow={false}
    >
      <img
        src="placeholder.png"
        className="h-full w-full object-cover rounded-2xl absolute"
      />
      <div className="absolute h-full w-full bg-gradient-to-t from-purple-900 to-blue-500 opacity-60 rounded-xl" />
      <nav className="h-full z-50">
        <ul className="grid grid-cols-3 h-full justify-evenly place-items-center">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.src} target="_blank">
                <Typography
                  color="white"
                  variant="h5"
                  className="hover:text-orange-700"
                >
                  {link.title}
                </Typography>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Card>
  );
}
