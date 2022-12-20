export class Skill {
  private _name = "";
  public get name(): string {
    return this._name;
  }

  private _rating = 0;
  public get rating(): number {
    return this._rating;
  }

  private _barColor = "";
  public get barColor(): string {
    return this._barColor;
  }

  constructor($name: string, $rating: number, $barColor: string) {
    this._name = $name;
    this._rating = $rating;
    this._barColor = $barColor;
  }
}
