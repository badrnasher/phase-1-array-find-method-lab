// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(arr) {
  for (const record of arr) {
    if (record.result === "W") {
      return record.year;
    }
  }
}
