import { Injectable } from "@angular/core";
import { TechnicalSkill } from "src/app/components/technical-skills/models/technicalSkill";
import { default as JSONTechSkills } from "../../../assets/json-data/tech-skills.json";
import { CalculateColorService } from "../calculate-color/calculate-color.service";

@Injectable({
  providedIn: "root",
})
export class TechnicalSkillsService {
  constructor(private calculateColorService: CalculateColorService) {}
  public getAll(): TechnicalSkill[] {
    const result: TechnicalSkill[] = [];

    const list = JSONTechSkills.skills;
    Array.from(list).forEach((skill: any) =>
      result.push(
        new TechnicalSkill(
          skill.name,
          skill.rating,
          this.calculateColorService.calculateColor(skill.rating)
        )
      )
    );
    return result;
  }
}
