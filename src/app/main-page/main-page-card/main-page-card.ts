export class MainPageCard {
  constructor(
    public title: string,
    public explanatoryText: string,
    public imgName: string,
    public onClick: (path: string) => void
  ) {
  }
}
