import { Injectable } from "@angular/core";
import { Profile } from "src/app/components/profile/models/profile";
import { default as JSONProfile } from "../../../assets/json-data/profile.json";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  public getAll(): Profile {
    return new Profile(JSONProfile.title, JSONProfile.userName);
  }
}
