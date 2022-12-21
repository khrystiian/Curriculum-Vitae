export class Contact {
  private readonly gitHub = "github";
  private readonly email = "a.ciobanu19@mail.com";
  private readonly address = "address";
  private readonly phone = "phone";
  private readonly linkedIn = "linkedin";

  private _label = "";
  public get label(): string {
    return this._label;
  }

  private _ref = "";
  public get ref(): string {
    return this._ref;
  }

  private _hasLink = false;
  public get hasLink(): boolean {
    return this._hasLink;
  }

  public get iconSrc(): string | undefined {
    const label = this.label.toLowerCase();

    if (label.includes(this.gitHub))
      return `url('/assets/images/profile/github.png')`;
    if (label.includes(this.email))
      return `url('/assets/images/profile/email.png')`;
    if (label.includes(this.address))
      return `url('/assets/images/profile/home.png')`;
    if (label.includes(this.linkedIn))
      return `url('/assets/images/profile/linkedin.png')`;
    if (label.includes(this.phone))
      return `url('/assets/images/profile/phone.png')`;
    return undefined;
  }

  constructor($label: string, $ref: string, $hasLink = false) {
    this._label = $label;
    this._ref = $ref;
    this._hasLink = $hasLink;
  }
}
