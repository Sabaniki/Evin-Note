import {MainPageCard} from '../../main-page/main-page-card/main-page-card';
import {AuthService} from '../../auth/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';

export class Lecture {
  constructor(
    public imgName: string,
    public title: string,
    public teacherName: string,
    public explanatoryText: string,
    public onClick: (i: number) => void,
    public auth: AuthService,
    public angularFirestore: AngularFirestore,
    public angularFireStorage: AngularFireStorage
  ) {
  }
  contentPaths: Array<string>;
  lectureCards: Array<Lecture>;
  isRegistered: boolean;
}
