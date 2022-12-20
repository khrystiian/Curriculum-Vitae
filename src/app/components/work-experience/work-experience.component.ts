import { Component, OnInit } from "@angular/core";
import { WorkExperienceService } from "src/app/services/work-experience/work-experience.service";
import { Experience } from "./models/experience";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"],
})
export class WorkExperienceComponent implements OnInit {
  public positions: Experience[] = [];
  public showAll = false;

  constructor(private workExperience: WorkExperienceService) {}

  ngOnInit(): void {
    this.positions = this.workExperience.getAll();
  }

  public toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
