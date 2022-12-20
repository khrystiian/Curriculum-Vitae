import { Injectable } from "@angular/core";
import { Project } from "src/app/components/personal-projects/models/project";
import { default as JSONProjects } from "../../../assets/json-data/personal-projects.json";

@Injectable({
  providedIn: "root",
})
export class PersonalProjectsService {
  public getAll(): Project[] {
    const result: Project[] = [];

    const list = JSONProjects.projects;
    Array.from(list).forEach((project: any) =>
      result.push(
        new Project(
          project.title,
          project.description,
          project.tools,
          project.preview,
          project.link
        )
      )
    );
    return result;
  }
}
