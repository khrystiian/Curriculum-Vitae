import { Injectable } from "@angular/core";
import { Experience } from "src/app/components/work-experience/models/experience";
import { default as JSONExperience } from "../../../assets/json-data/work-experience.json";

@Injectable({
  providedIn: "root",
})
export class WorkExperienceService {
  public getAll(): Experience[] {
    const result: Experience[] = [];

    const list = JSONExperience.positions;
    Array.from(list).forEach((position: any) => {
      result.push(
        new Experience(
          position.title,
          position.company,
          position.companyWebsite,
          position.period,
          position.description,
          position.links
        )
      );
    });
    return result;
  }
}
