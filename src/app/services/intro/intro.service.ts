import { Injectable } from "@angular/core";
import { default as JSONIntro } from "../../../assets/json-data/intro.json";

@Injectable({
  providedIn: "root",
})
export class IntroService {
  public getAll(): string[] {
    const result: string[] = [];

    const list = JSONIntro.intro;
    Array.from(list).forEach((paragraph: any) => result.push(paragraph));
    return result;
  }
}
