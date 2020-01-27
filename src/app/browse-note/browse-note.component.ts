import {Component, OnInit} from '@angular/core';
import {Lecture} from '../add-lecture/add-lecture-card/lecture';
import {Router} from '@angular/router';
import {MonitorScreenSizeService} from '../monitor-screen-size/monitor-screen-size.service';
import {AuthService} from '../auth/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import swal from 'sweetalert';
import {AngularFireStorage} from '@angular/fire/storage';
import {ContentPathService} from '../content-path/content-path.service';

@Component({
  selector: 'app-read-note',
  templateUrl: './browse-note.component.html',
  styleUrls: ['./browse-note.component.scss']
})
export class BrowseNoteComponent implements OnInit {
  lectureCards: Array<Lecture> = [
    new Lecture(
      '数学アイコン.svg',
      '類型数学（多胡）',
      '多胡',
      '○曜日✗, △時間目の多胡先生の類型数学の授業です。',
      this.onClickRedirectNoteButton,
      this.auth,
      this.angularFirestore,
      this.angularFireStorage
    ),
    new Lecture(
      '物理アイコン.svg',
      '類型物理（小佐野）',
      '小佐野',
      '○曜日✗, △時間の小佐野先生の類型物理の授業です。',
      this.onClickRedirectNoteButton,
      this.auth,
      this.angularFirestore,
      this.angularFireStorage
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickRedirectNoteButton,
      this.auth,
      this.angularFirestore,
      this.angularFireStorage
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickRedirectNoteButton,
      this.auth,
      this.angularFirestore,
      this.angularFireStorage
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickRedirectNoteButton,
      this.auth,
      this.angularFirestore,
      this.angularFireStorage
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？',
      this.onClickRedirectNoteButton,
      this.auth,
      this.angularFirestore,
      this.angularFireStorage
    )
  ];

  constructor(private router: Router,
              public monitorScreenSizeService: MonitorScreenSizeService,
              private auth: AuthService,
              private angularFirestore: AngularFirestore,
              private angularFireStorage: AngularFireStorage,
              private contentPathService: ContentPathService
  ) {
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      // for-ofでやると参照的なアレで変更ができない気がしたから抑制
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.lectureCards.length; i++) {
        this.lectureCards[i].lectureCards = this.lectureCards;
        this.lectureCards[i].contentPathService = this.contentPathService;
        this.lectureCards[i].contentPathService.contentPaths = this.contentPathService.contentPaths;
        this.lectureCards[i].router = this.router;
        this.angularFirestore.doc(`users/${user.uid}`)
          .collection('lectures')
          .doc(this.lectureCards[i].title).get()
          .subscribe(
            doc => this.lectureCards[i].isRegistered = (this.lectureCards[i].title === (doc.data() as Lecture).title)
          );
      }
    });
  }

  onClickRedirectNoteButton(i: number) {
    this.auth.user$.subscribe(user => {
      let contentPath: string;
      console.log(user);
      if (!!user) {
        contentPath = this.lectureCards[i].title;
        console.log(contentPath);
        this.angularFireStorage.storage.ref(contentPath).listAll().then(value => {
          value.items.forEach(item => {
            item.getDownloadURL().then((path: string) => {
              this.contentPathService.contentPaths.push(path);
            });
          });
        });
        console.log(this.contentPathService.contentPaths);
        this.router.navigate(['read-note']);
        // this.angularFirestore.doc(`users/${user.uid}`).collection('lectures')
        //   .doc(this.lectureCards[i].title)
        //   .set(Object.assign({}, {
        //     title: this.lectureCards[i].title,
        //     teacherName: this.lectureCards[i].teacherName,
        //     explanatoryText: this.lectureCards[i].explanatoryText
        //   }))
        //   .then(() => {
        //       swal({
        //         text: '講義を登録しました！',
        //         icon: 'success',
        //       });
        //       this.lectureCards[i].isRegistered = true;
        //     },
        //     reason => {
        //       swal({
        //         text: 'エラーが発生しました！' + reason.toString(),
        //         icon: 'error',
        //       });
        //     }
        //   );
      }
    });
  }
}
