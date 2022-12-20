import { Component, OnInit } from "@angular/core";

import { ProfileService } from "./services/profile.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  profile: any;

  showAllPositions: boolean = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();

    // draw all map polygons and markers
    // header image?
    // print stylesheet
  }

  toggleAllPositions() {
    this.showAllPositions = !this.showAllPositions;
  }
}
