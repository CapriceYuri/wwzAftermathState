import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="h-24 bg-transparent z-50 flex justify-center items-center bg-green-400">
      <Typography color="white" className="font-normal">
        &copy; 2024 CapriceYuri
      </Typography>
    </footer>
  );
}
