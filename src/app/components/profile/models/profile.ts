export class Profile {
  private _title = "";
  public get title(): string {
    return this._title;
  }

  private _username = "";
  public get username(): string {
    return this._username;
  }

  constructor($title: string, $username: string) {
    this._title = $title;
    this._username = $username;
  }
}
