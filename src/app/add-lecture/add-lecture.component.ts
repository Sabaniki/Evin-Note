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
      '多胡先生の類型数学の授業です。○曜日の✗, △時間',
      this.onClickSaveButton
    ),
    new Lecture(
      '物理アイコン.svg',
      '類型物理（小佐野）',
      '小佐野先生の類型物理の授業です。○曜日の✗, △時間',
      this.onClickSaveButton
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickSaveButton
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickSaveButton
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickSaveButton
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickSaveButton
    )
  ];

  constructor(private router: Router,
              private monitorScreenSizeService: MonitorScreenSizeService,
              private auth: AuthService,
              private afs: AngularFirestore
  ) {
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      console.log(user);
      if (!!user) {
        this.lectureRef = this.afs.doc(`users/${user.uid}`).collection('lectures');
        console.log('ngOnInit::this.lectureRef = ' + this.lectureRef);
      } else {
        swal({
          text: 'エラーが発生しました',
          icon: 'error'
        });
      }
    });
  }

  onClickSaveButton(i: number) {
    console.log('onClickSaveButton, this.lectureRef = ' + this.lectureRef);
    this.lectureRef.doc('lectures').set(Object.assign({}, this.lectureCards[i])).then(() => {
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
}
