import { default as JSONEducation } from "../.././../../assets/json-data/education.json";

export class FinalProject {
  private _link = "";

  public get link(): string {
    return this._link;
  }

  private _collaboration = [];

  public get collaboration(): string[] {
    return this._collaboration;
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

  private get currentPosition(): any {
    return JSONEducation.programmes.filter((programme) =>
      this.equal(programme)
    );
  }

  private equal(position: any): boolean {
    return (
      this._link === position.link &&
      this._collaboration === position.collaboration
    );
  }
}
