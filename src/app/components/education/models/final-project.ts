import { default as JSONEducation } from "../.././../../assets/json-data/education.json";

export class FinalProject {
  private _link = "";

  public get link(): string {
    return this._link;
  }

  private _collaboration = "";

  public get collaboration(): string {
    return this._collaboration;
  }

  private _description = "";

  public get description(): string {
    return this._description;
  }

  private get currentProject(): any {
    return JSONEducation.programmes.filter((programme) =>
      this.equal(programme.finalProject)
    );
  }

  private equal(project: any): boolean {
    return (
      this._description === project.description &&
      this._collaboration === project.collaboration
    );
  }

  constructor($collaboration: string, $description: string, $link: string) {
    this._collaboration = $collaboration;
    this._description = $description;
    this._link = $link;
  }
}
