import { Component, OnInit } from "@angular/core";
import { EducationService } from "src/app/services/education/education.service";
import { Programme } from "./models/programme";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent implements OnInit {
  public programmes: Programme[] = [];
  public showAll = false;

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.programmes = this.educationService.getAll();
  }

  public toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
