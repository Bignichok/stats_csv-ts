import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();
const matches = reader.data;
console.log(matches);
enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D",
}
