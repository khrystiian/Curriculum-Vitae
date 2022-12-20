import { Injectable } from "@angular/core";
import { Language } from "src/app/components/languages/models/language";
import { default as JSONLanguages } from "../../../assets/json-data/languages.json";
import { CalculateColorService } from "../calculate-color/calculate-color.service";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  constructor(private calculateColorService: CalculateColorService) {}
  public getAll(): Language[] {
    const result: Language[] = [];

    const list = JSONLanguages.languages;
    Array.from(list).forEach((language: any) =>
      result.push(
        new Language(
          language.name,
          language.rating,
          this.calculateColorService.calculateColor(language.rating)
        )
      )
    );
    return result;
  }
}
