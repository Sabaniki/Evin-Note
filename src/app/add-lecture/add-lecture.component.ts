import { Component, OnInit } from '@angular/core';
import {Lecture} from './add-lecture-card/lecture';
import {Router} from '@angular/router';
import {MonitorScreenSizeService} from '../monitor-screen-size/monitor-screen-size.service';

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
      '多胡先生の類型数学の授業です。○曜日の✗, △時間',
    ),
    new Lecture(
      '物理アイコン.svg',
      '類型物理（小佐野）',
      '小佐野先生の類型物理の授業です。○曜日の✗, △時間',
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？'
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？'
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？'
    ),
    new Lecture(
      'はてなマークのアイコン.svg',
      '？？？？？？？？？？',
      '？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？'
    )
  ];
  constructor(private router: Router, private monitorScreenSizeService: MonitorScreenSizeService) { }

  ngOnInit() {
  }
}
