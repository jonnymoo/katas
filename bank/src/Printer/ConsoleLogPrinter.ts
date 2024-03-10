import { IPrinter } from './IPrinter';

export class ConsoleLogPrinter implements IPrinter {
    constructor(private readonly console: any) {}
    
    printTable(list: any[]): void {

        // Get headers: Extract header names from the first object
        const headers = Object.keys(list[0]);
    
        // Calculate max column widths: Find the longest value for each header
        const columnWidths: number[] = [];
        for (const header of headers) {
          columnWidths.push(
            Math.max(
              header.length, 
              ...list.map((item) => this.valueToString(item[header]).length) // Max length of data in each column
            )
          );
        }
    
        // Print header row with padding
        this.console.log(
          headers.map((header, i) => header.padEnd(columnWidths[i] + 1, ' ')).join('|| ')
        );
    
        // Print each row with padding
        for (const row of list) {
          this.console.log(
            headers.map((header, i) => this.valueToString(row[header]).padEnd(columnWidths[i] + 1, ' ')).join('|| ')
          );
        }
      }

      private valueToString(value: any): string {
        // This is probably candidate to move out to common helpers as will be useful across different types of printer
        // Also may need to support different types, locales and combinations but for now we keep it simple
        if (value instanceof Date) {
          return value.toLocaleDateString('en-GB',{ year: 'numeric', month: '2-digit', day: '2-digit' });
        } else {
          // Default behavior for other types
          return value.toString();
        }
      }

}