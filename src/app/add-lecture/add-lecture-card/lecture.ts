import {MainPageCard} from '../../main-page/main-page-card/main-page-card';
import {AuthService} from '../../auth/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {ContentPathService} from '../../content-path/content-path.service';
import {Router} from '@angular/router';

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
  contentPathService: ContentPathService;
  lectureCards: Array<Lecture>;
  router: Router;
  isRegistered: boolean;
}
