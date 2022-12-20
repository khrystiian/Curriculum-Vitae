import { Component, OnInit } from "@angular/core";
import { SoftSkillsService } from "src/app/services/soft-skills/soft-skills.service";
import { Skill } from "./models/skill";

@Component({
  selector: "app-soft-skills",
  templateUrl: "./soft-skills.component.html",
  styleUrls: ["./soft-skills.component.scss"],
})
export class SoftSkillsComponent implements OnInit {
  public skills: Skill[] = [];

  constructor(private softSkillsService: SoftSkillsService) {}

  ngOnInit(): void {
    this.skills = this.softSkillsService.getSkills();
  }
}
