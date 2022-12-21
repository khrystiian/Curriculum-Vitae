import { Injectable } from "@angular/core";
import { FinalProject } from "src/app/components/education/models/final-project";
import { Programme } from "src/app/components/education/models/programme";
import { default as JSONEducation } from "../../../assets/json-data/education.json";

@Injectable({
  providedIn: "root",
})
export class EducationService {
  public getAll(): Programme[] {
    const result: Programme[] = [];

    const list = JSONEducation.programmes;
    Array.from(list).forEach((programme: any) => {
      result.push(
        new Programme(
          programme.title,
          programme.school,
          programme.city,
          programme.period,
          programme.country,
          this.getFinalProject(programme)
        )
      );
    });
    return result;
  }

  private getFinalProject(programme: any): FinalProject | null {
    const project = programme.finalProject;
    if (!project) return null;

    return new FinalProject(
      project.collaboration,
      project.description,
      project.link
    );
  }
}
