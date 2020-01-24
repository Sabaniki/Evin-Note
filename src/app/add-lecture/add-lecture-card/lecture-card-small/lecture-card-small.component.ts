import {Component, Input, OnInit} from '@angular/core';
import {Lecture} from '../lecture';

@Component({
  selector: 'app-lecture-card-small',
  templateUrl: './lecture-card-small.component.html',
  styleUrls: ['./lecture-card-small.component.scss']
})
export class LectureCardSmallComponent implements OnInit {
  @Input() cardInfo: Lecture;
  @Input() i: number;

  constructor() {
  }

  ngOnInit() {
  }
}
