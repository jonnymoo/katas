import { ConsoleLogPrinter } from '../../src/Printer/ConsoleLogPrinter'
import { IDateService } from '../../src/Utils/IDateService'

describe('ConsoleLogPrinter', () => {

  // A Date Service so we can mock out dates
  class MockDateService implements IDateService {
    constructor(private readonly now: Date) {};
    getDateNow(): Date { return this.now; };
  }

  class MockConsole {
    public msg: string = '';
    log(msg: string): void {this.msg += msg + '\n'}
  }

  it('Printer can format a simple table', () => {

    let mockConsole : MockConsole = new MockConsole();
    let printer: ConsoleLogPrinter = new ConsoleLogPrinter(mockConsole);

    printer.printTable([{"Header1":"Value1","Header2":"Value2"}]);

    expect(mockConsole.msg).toBe("Header1 || Header2 \nValue1  || Value2  \n");
  });

  it('Printer can handle dates', () => {

    let mockConsole : MockConsole = new MockConsole();
    let printer: ConsoleLogPrinter = new ConsoleLogPrinter(mockConsole);

    printer.printTable([{"Header1":"Value1","Header2":new Date(2012,0,13)}]);

    expect(mockConsole.msg).toBe("Header1 || Header2    \nValue1  || 13/01/2012 \n");
  });
});


