import { Injectable } from "@angular/core";
import { Strength } from "src/app/components/strengths/models/strength";
import { default as JSONStrengths } from "../../../assets/json-data/strengths.json";

@Injectable({
  providedIn: "root",
})
export class StrengthsService {
  public getAll(): Strength[] {
    const result: Strength[] = [];

    const list = JSONStrengths.strengths;
    Array.from(list).forEach((strength: any) =>
      result.push(
        new Strength(
          strength.startName,
          strength.endName,
          strength.start,
          strength.end,
          strength.description
        )
      )
    );
    return result;
  }
}
