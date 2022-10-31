import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reporters/ConsoleReport";
import { HtmlReport } from "./reporters/HtmlReport";
import { MatchData } from "./types/MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(teamName: string): Summary{
        return new Summary(new WinsAnalysis(teamName), new HtmlReport())
    }

    static winsAnalysisWithConsoleReport(teamName: string): Summary{
        return new Summary(new WinsAnalysis(teamName), new ConsoleReport())
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

    buildAndPrintReport(matches: MatchData[]): void{
        this.outputTarget.print(this.analyzer.run(matches))
    }
}