import { default as JSONExperience } from "../.././../../assets/json-data/work-experience.json";

export class Experience {
  private _title = "";
  public get title(): string {
    return this._title;
  }

  private _company = "";
  public get company(): string {
    return this._company;
  }

  private _companyWebsite = "";
  public get companyWebsite(): string {
    return this._companyWebsite;
  }

  private _period = "";
  public get period(): string {
    return this._period;
  }

  private _description: string[] = [];

  public get description(): string[] {
    const list = this.currentPosition;
    this._description = [];
    Array.from(list).forEach((position: any) => {
      this._description.push(position.description);
    });
    return this._description;
  }

  private _links: string[] = [];
  public get links(): string[] {
    this._links = [];
    Array.from(this.currentPosition).forEach((position: any) => {
      this._links.push(position.links);
    });
    return this._links;
  }

  constructor(
    $title: string,
    $company: string,
    $companyWebsite: string,
    $period: string,
    $description: string[],
    $links: string[]
  ) {
    this._title = $title;
    this._company = $company;
    this._companyWebsite = $companyWebsite;
    this._period = $period;
    this._description = $description;
    this._links = $links;
  }

  private get currentPosition(): any {
    return JSONExperience.positions.filter((position) => this.equal(position));
  }

  private equal(position: any): boolean {
    return (
      this._title === position.title &&
      this._company === position.company &&
      this._period === position.period
    );
  }

  public hasCompanyWebsite(): boolean {
    return this._companyWebsite !== "";
  }
}
