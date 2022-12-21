import { Component, OnInit } from "@angular/core";
import { TechnicalSkillsService } from "src/app/services/technical-skills/technical-skills.service";
import { TechnicalSkill } from "./models/technicalSkill";

@Component({
  selector: "app-technical-skills",
  templateUrl: "./technical-skills.component.html",
  styleUrls: ["./technical-skills.component.scss"],
})
export class TechnicalSkillsComponent implements OnInit {
  public skills: TechnicalSkill[] = [];

  constructor(private softSkillsService: TechnicalSkillsService) {}

  ngOnInit(): void {
    this.skills = this.softSkillsService.getAll();
  }
}
