import { Component, OnInit } from "@angular/core";
import { ContactService } from "src/app/services/contact/contact.service";
import { ProfileService } from "src/app/services/profile/profile.service";
import { Contact } from "../contact/models/contact";
import { Profile } from "./models/profile";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  public profile!: Profile;
  public contacts: Contact[] = [];

  constructor(
    private profileService: ProfileService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.profile = this.profileService.getAll();
    this.contacts = this.contactService.getAll();
  }
}
