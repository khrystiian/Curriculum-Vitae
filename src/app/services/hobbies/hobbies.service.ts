import { Injectable } from "@angular/core";
import { default as JSONHobbies } from "../../../assets/json-data/hobbies.json";

@Injectable({
  providedIn: "root",
})
export class HobbiesService {
  private _hobbies: string[] = [];

  constructor() {
    const list = JSONHobbies.activities;
    Array.from(list).forEach((hobby: string) => this._hobbies.push(hobby));
  }

  public get hobbies(): string[] {
    return this._hobbies;
  }
}
