import { FinalProject } from "./final-project";
export class Programme {
  private _title = "";
  public get title(): string {
    return this._title;
  }

  private _school = "";
  public get school(): string {
    return this._school;
  }

  private _city = "";
  public get city(): string {
    return this._city;
  }

  private _period = "";
  public get period(): string {
    return this._period;
  }

  private _country = "";
  public get country(): string {
    return this._country;
  }

  private _finalProject: FinalProject | null;
  public get finalProject(): FinalProject | null {
    return this._finalProject;
  }

  constructor(
    $title: string,
    $school: string,
    $city: string,
    $period: string,
    $country: string,
    $finalProject: FinalProject | null
  ) {
    this._title = $title;
    this._school = $school;
    this._city = $city;
    this._country = $country;
    this._period = $period;
    this._finalProject = $finalProject;
  }

  public hasFinalProject(): boolean {
    return this.finalProject !== null;
  }
}
