import {MainPageCard} from '../../main-page/main-page-card/main-page-card';
import {AuthService} from '../../auth/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

export class Lecture {
  constructor(
    public imgName: string,
    public title: string,
    public teacherName: string,
    public explanatoryText: string,
    public onClick: (i: number) => void,
    public auth: AuthService,
    public afs: AngularFirestore,
  ) {
  }
  lectureCards: Array<Lecture>;
  isRegistered: boolean;
  lastUpdate: string;
}
