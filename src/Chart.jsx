import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Attribute Score",
      data: [80, 99, 60, 25, 60, 95],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#800090"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Strength",
        "Accuracy",
        "Dexterity",
        "Intelligence",
        "Stamina",
        "Luck",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: false,
      borderColor: "green",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "light",
    },
  },
};

export default function ChartData() {
  return (
    <Card className="h-full w-full bg-transparent backdrop-blur-md p-4 flex flex-col justify-evenly ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex gap-4 rounded-none flex-row items-center"
      >
        <div className="rounded-l shrink-0">
          <img src="chart-icon.gif" className="h-[76px] w-[64px] rounded-2xl" />
        </div>
        <div>
          <Typography variant="h6" color="amber">
            Survivors Attributes
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="max-w-sm font-small"
          >
            Navigate through the relentless undead waves and heightened survival
            chances in the post-apocalyptic world
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
