import { Component, OnInit } from "@angular/core";
import { PersonalProjectsService } from "src/app/services/personal-projects/personal-projects.service";
import { Project } from "./models/project";

@Component({
  selector: "app-personal-projects",
  templateUrl: "./personal-projects.component.html",
  styleUrls: ["./personal-projects.component.scss"],
})
export class PersonalProjectsComponent implements OnInit {
  public projects: Project[] = [];
  public showAll = false;

  constructor(private personalProjectService: PersonalProjectsService) {}

  ngOnInit(): void {
    this.projects = this.personalProjectService.getAll();
  }

  public toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
