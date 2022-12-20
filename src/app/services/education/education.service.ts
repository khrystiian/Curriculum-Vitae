import { Injectable } from "@angular/core";
import { Programme } from "src/app/components/education/models/programme";
import { default as JSONEducation } from "../../../assets/json-data/education.json";

@Injectable({
  providedIn: "root",
})
export class EducationService {
  public getAll(): Programme[] {
    const result: Programme[] = [];

    const list = JSONEducation.programmes;
    Array.from(list).forEach((position: any) => {
      result.push(
        new Programme(
          position.title,
          position.school,
          position.city,
          position.period,
          position.finalProject
        )
      );
    });
    return result;
  }
}
