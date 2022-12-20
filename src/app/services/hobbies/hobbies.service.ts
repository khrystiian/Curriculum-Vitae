import { Injectable } from "@angular/core";
import { default as JSONHobbies } from "../../../assets/json-data/hobbies.json";

@Injectable({
  providedIn: "root",
})
export class HobbiesService {
  public getAll(): string[] {
    const result: string[] = [];

    const list = JSONHobbies.activities;
    Array.from(list).forEach((hobby: string) => result.push(hobby));
    return result;
  }
}
