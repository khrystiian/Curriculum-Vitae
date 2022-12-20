import { Component, OnInit } from "@angular/core";
import { HobbiesService } from "src/app/services/hobbies/hobbies.service";

@Component({
  selector: "app-hobbies",
  templateUrl: "./hobbies.component.html",
  styleUrls: ["./hobbies.component.scss"],
})
export class HobbiesComponent implements OnInit {
  public activities: string[] = [];

  constructor(private hobbiesService: HobbiesService) {}

  ngOnInit(): void {
    this.activities = this.hobbiesService.getAll();
  }
}
