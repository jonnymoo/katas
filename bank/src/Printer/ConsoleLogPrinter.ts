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
              ...list.map((item) => item[header]?.toString().length || 0) // Max length of data in each column
            )
          );
        }
    
        // Print header row with padding
        this.console.log(
          headers.map((header, i) => header.padEnd(columnWidths[i] + 2, ' ')).join('|| ')
        );
    
        // Print each row with padding
        for (const row of list) {
          this.console.log(
            headers.map((header, i) => row[header]?.toString().padEnd(columnWidths[i] + 2, ' ')).join('|| ')
          );
        }
      }

}