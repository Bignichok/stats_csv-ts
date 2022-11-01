import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Everton'), new ConsoleReport());
// const htmlSummary = new Summary(new WinsAnalysis('Everton'), new HtmlReport());

//OR
const summary = Summary.winsAnalysisWithConsoleReport('Everton');
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Everton');

summary.buildAndPrintReport(matchReader.matches);
htmlSummary.buildAndPrintReport(matchReader.matches);
