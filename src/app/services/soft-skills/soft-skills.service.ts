import { Injectable } from "@angular/core";
import { Skill } from "src/app/components/soft-skills/models/skill";
import { default as JSONSoftSkills } from "../../../assets/json-data/soft-skills.json";
import { CalculateColorService } from "../calculate-color/calculate-color.service";

@Injectable({
  providedIn: "root",
})
export class SoftSkillsService {
  constructor(private calculateColorService: CalculateColorService) {}
  public getAll(): Skill[] {
    const result: Skill[] = [];

    const list = JSONSoftSkills.skills;
    Array.from(list).forEach((skill: any) =>
      result.push(
        new Skill(
          skill.name,
          skill.rating,
          this.calculateColorService.calculateColor(skill.rating)
        )
      )
    );
    return result;
  }
}
