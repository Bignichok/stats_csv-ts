import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reporters/ConsoleReport';
import { HtmlReport } from './reporters/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Everton'), new ConsoleReport());
// const htmlSummary = new Summary(new WinsAnalysis('Everton'), new HtmlReport());


//OR
const summary = Summary.winsAnalysisWithConsoleReport('Everton')
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Everton');

summary.buildAndPrintReport(matchReader.matches);
htmlSummary.buildAndPrintReport(matchReader.matches);