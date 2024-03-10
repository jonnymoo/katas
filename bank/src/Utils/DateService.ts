import { IDateService } from "./IDateService";

export class DateService implements IDateService {
    constructor(private now: Date) {};
    public getDateNow(): Date { return this.now; };
    public updateDateNow(now: Date): void {this.now = now; }
}