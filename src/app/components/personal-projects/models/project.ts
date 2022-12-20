export class Project {
  private _title = "";

  public get title(): string {
    return this._title;
  }

  private _description = "";

  public get description(): string {
    return this._description;
  }

  private _link = "";

  public get link(): string {
    return this._link;
  }

  private _preview = "";

  public get preview(): string {
    return this.preview;
  }

  private _tools: string[] = [];

  public get tools(): string[] {
    return this._tools;
  }

  constructor(
    $title: string,
    $description: string,
    $tools: string[],
    $preview: string,
    $link: string
  ) {
    this._title = $title;
    this._description = $description;
    this._tools = $tools;
    this._preview = $preview;
    this._link = $link;
  }
}
