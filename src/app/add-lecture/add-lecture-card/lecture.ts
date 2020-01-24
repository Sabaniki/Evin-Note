import {MainPageCard} from '../../main-page/main-page-card/main-page-card';

export class Lecture extends MainPageCard {
  constructor(
    public imgName: string,
    public title: string,
    public explanatoryText: string,
    public onClick: (path: string) => void
  ) {
    super(title, explanatoryText, imgName, onClick);
  }

  lectureName: string;
  teacherName: string;
  lastUpdate: string;
}
