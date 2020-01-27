import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Lecture} from './add-lecture-card/lecture';
import {Router} from '@angular/router';
import {MonitorScreenSizeService} from '../monitor-screen-size/monitor-screen-size.service';
import {AuthService} from '../auth/auth.service';
import swal from 'sweetalert';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.scss']
})
export class AddLectureComponent implements OnInit {
  lectureCards: Array<Lecture> = [
    new Lecture(
      '数学アイコン.svg',
      '類型数学（多胡）',
      '多胡',
      '○曜日✗, △時間目の多胡先生の類型数学の授業です。',
      this.onClickSaveButton,
      this.auth,
      this.afs
    ),
    new Lecture(
      '物理アイコン.svg',
      '類型物理（小佐野）',
      '小佐野',
      '○曜日✗, △時間の小佐野先生の類型物理の授業です。',
      this.onClickSaveButton,
      this.auth,
      this.afs
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickSaveButton,
      this.auth,
      this.afs
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickSaveButton,
      this.auth,
      this.afs
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickSaveButton,
      this.auth,
      this.afs
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickSaveButton,
      this.auth,
      this.afs
    )
  ];

  constructor(private router: Router,
              public monitorScreenSizeService: MonitorScreenSizeService,
              private auth: AuthService,
              private afs: AngularFirestore
  ) {
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      // for-ofでやると参照的なアレで変更ができない気がしたから抑制
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.lectureCards.length; i++) {
        this.lectureCards[i].lectureCards = this.lectureCards;
        this.afs.doc(`users/${user.uid}`)
          .collection('lectures')
          .doc(this.lectureCards[i].title).get()
          .subscribe(
            doc => this.lectureCards[i].isRegistered = (this.lectureCards[i].title === (doc.data() as Lecture).title)
          );
      }
    });
  }

  onClickSaveButton(i: number) {
    this.auth.user$.subscribe(user => {
      console.log(user);
      if (!!user) {
        this.afs.doc(`users/${user.uid}`).collection('lectures')
          .doc(this.lectureCards[i].title)
          .set(Object.assign({}, {
            title: this.lectureCards[i].title,
            teacherName: this.lectureCards[i].teacherName
          }))
          .then(() => {
              swal({
                text: '講義を登録しました！',
                icon: 'success',
              });
              this.lectureCards[i].isRegistered = true;
            },
            reason => {
              swal({
                text: 'エラーが発生しました！' + reason.toString(),
                icon: 'error',
              });
            });
      }
    });
  }
}
