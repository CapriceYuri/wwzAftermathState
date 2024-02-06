import { Week0 } from "./Week0";
import { Week1 } from "./Week1";
import { Week2 } from "./Week2";
import { Week3 } from "./Week3";
import { Week4 } from "./Week4";
import { Week5 } from "./Week5";
import { StatRun } from "./Stats";

export const allData = [Week5, Week4, Week3, Week2, Week1, Week0];
const allPlayerProfile = [...allData, StatRun];

let temp = 0;
let tempPlayerArr = [];

allData.forEach((data) => data.runs.sort((a, b) => (a.time > b.time ? 1 : -1)));

function findTotalRuns() {
  for (let i = 0; i < allPlayerProfile.length; i++) {
    temp += allPlayerProfile[i].runs.length;
  }
  return temp;
}

findTotalRuns();

function findTotalPlayer() {
  for (let i = 0; i < allPlayerProfile.length; i++) {
    for (let j = 0; j < allPlayerProfile[i].runs.length; j++) {
      if (tempPlayerArr.indexOf(allPlayerProfile[i].runs[j].name) === -1) {
        tempPlayerArr.push(allPlayerProfile[i].runs[j].name);
      }
    }
  }
}

findTotalPlayer();

const totalUniquePlayers = tempPlayerArr.length;
const totalRuns = temp;
export { totalUniquePlayers, totalRuns };
