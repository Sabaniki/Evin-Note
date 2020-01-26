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
  lectureRef: AngularFirestoreCollection<Array<string>>;
  lectureCards: Array<Lecture> = [
    new Lecture(
      '数学アイコン.svg',
      '類型数学（多胡）',
      '多胡',
      '多胡先生の類型数学の授業です。○曜日の✗, △時間',
      this.onClickSaveButton,
      this.auth,
      this.afs
    ),
    new Lecture(
      '物理アイコン.svg',
      '類型物理（小佐野）',
      '小佐野',
      '小佐野先生の類型物理の授業です。○曜日の✗, △時間',
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
              private monitorScreenSizeService: MonitorScreenSizeService,
              private auth: AuthService,
              private afs: AngularFirestore
  ) {
  }

  ngOnInit() {
    // for-ofでやると参照的なアレで変更ができない気が下から抑制
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.lectureCards.length; i++) {
      this.lectureCards[i].lectureCards = this.lectureCards;
    }
  }

  onClickSaveButton(i: number) {
    console.log(this.auth);
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
