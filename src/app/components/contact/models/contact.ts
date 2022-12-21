export class Contact {
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
    if (this.label.includes("Github"))
      return `url('/assets/images/profile/github.png')`;
    if (this.label.includes("a.ciobanu19@mail.com"))
      return `url('/assets/images/profile/email.png')`;
    if (this.label.includes("Address"))
      return `url('/assets/images/profile/home.png')`;
    if (this.label.includes("Linkedin"))
      return `url('/assets/images/profile/linkedin.png')`;
    if (this.label.includes("Phone"))
      return `url('/assets/images/profile/phone.png')`;
    return undefined;
  }

  constructor($label: string, $ref: string, $hasLink = false) {
    this._label = $label;
    this._ref = $ref;
    this._hasLink = $hasLink;
  }
}
