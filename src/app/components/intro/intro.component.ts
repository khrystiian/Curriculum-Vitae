import { Component, OnInit } from "@angular/core";
import { IntroService } from "src/app/services/intro/intro.service";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit {
  public intro: string[] = [];

  constructor(private introService: IntroService) {}

  ngOnInit(): void {
    this.intro = this.introService.getAll();
  }
}
