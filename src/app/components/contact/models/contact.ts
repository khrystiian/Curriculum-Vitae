export class Contact {
  private readonly gitHub = "github";
  private readonly email = "a.ciobanu19@mail.com";
  private readonly address = "address";
  private readonly phone = "phone";
  private readonly linkedIn = "linkedin";
  private readonly curriculumVitae = "curriculum vitae";

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
  const normalizedLabel = this.label.toLowerCase();

  const iconMap: { [key: string]: string } = {
    [this.gitHub]: 'github.png',
    [this.email]: 'email.png',
    [this.address]: 'home.png',
    [this.linkedIn]: 'linkedin.png',
    [this.phone]: 'phone.png',
    [this.curriculumVitae]: 'file.png'
  };

  for (const key in iconMap) {
    if (normalizedLabel.includes(key.toLowerCase())) {
      return `url('/assets/images/profile/${iconMap[key]}')`;
    }
  }
    return undefined;
  }

  constructor($label: string, $ref: string, $hasLink = false) {
    this._label = $label;
    this._ref = $ref;
    this._hasLink = $hasLink;
  }
}
