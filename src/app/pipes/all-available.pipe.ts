import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "available",
})
export class AvailablePipe implements PipeTransform {
  transform(all: any[], showAll: boolean): any[] {
    if (showAll) return all;
    return all.slice(0, 1);
  }
}
