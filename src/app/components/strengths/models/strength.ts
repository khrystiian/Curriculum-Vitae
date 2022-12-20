export class Strength {
  private _startName = "";
  public get startName(): string {
    return this._startName;
  }

  private _endName = "";
  public get endName(): string {
    return this._endName;
  }

  private _start = 0;
  public get start(): number {
    return this._start;
  }

  private _end = 0;
  public get end(): number {
    return this._end;
  }

  private _description = "";
  public get description(): string {
    return this._description;
  }

  constructor(
    $startName: string,
    $endName: string,
    $start: number,
    $end: number,
    $description: string
  ) {
    this._startName = $startName;
    this._endName = $endName;
    this._start = $start;
    this._end = $end;
    this._description = $description;
  }
}
