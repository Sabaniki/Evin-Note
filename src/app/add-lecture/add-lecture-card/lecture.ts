import {MainPageCard} from '../../main-page/main-page-card/main-page-card';

export class Lecture {
  constructor(
    public imgName: string,
    public title: string,
    public explanatoryText: string,
    public onClick: (i: number) => void
  ) {
  }
  lectureName: string;
  teacherName: string;
  lastUpdate: string;
}
