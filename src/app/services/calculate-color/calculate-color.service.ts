import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CalculateColorService {
  private readonly primaryColor = { red: 118, green: 224, blue: 194 };
  private readonly secondaryColor = { red: 37, green: 112, blue: 126 };

  public calculateColor(percentage: number) {
    const rValue = Math.round(this.getRGBValue(percentage, RGBColor.Red));
    const gValue = Math.round(this.getRGBValue(percentage, RGBColor.Green));
    const bValue = Math.round(this.getRGBValue(percentage, RGBColor.Blue));
    return `rgb(${rValue}, ${gValue}, ${bValue}`;
  }

  private getRGBValue(percentage: number, rgbColor: RGBColor): number {
    switch (rgbColor) {
      case RGBColor.Red:
        return this.calculateRGBColorValue(
          percentage,
          this.secondaryColor.red,
          this.primaryColor.red
        );
      case RGBColor.Green:
        return this.calculateRGBColorValue(
          percentage,
          this.secondaryColor.green,
          this.primaryColor.green
        );
      case RGBColor.Blue:
        return this.calculateRGBColorValue(
          percentage,
          this.secondaryColor.blue,
          this.primaryColor.blue
        );
      default:
        throw new Error(`Unknown property ${RGBColor[rgbColor]}`);
    }
  }

  private calculateRGBColorValue(
    percentage: number,
    primaryColorValue: number,
    secondaryColorValue: number
  ): number {
    const pct = percentage / 100;
    return secondaryColorValue * (1 - pct) + primaryColorValue * pct;
  }
}

enum RGBColor {
  Red,
  Green,
  Blue,
}
