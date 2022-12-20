import { Component, OnInit } from "@angular/core";
import { StrengthsService } from "src/app/services/strengths/strengths.service";
import { Strength } from "./models/strength";

@Component({
  selector: "app-strengths",
  templateUrl: "./strengths.component.html",
  styleUrls: ["./strengths.component.scss"],
})
export class StrengthsComponent implements OnInit {
  public strengths: Strength[] = [];

  constructor(private strengthsService: StrengthsService) {}

  ngOnInit(): void {
    this.strengths = this.strengthsService.getAll();
  }
}
