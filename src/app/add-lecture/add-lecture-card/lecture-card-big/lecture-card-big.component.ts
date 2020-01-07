import {Component, Input, OnInit} from '@angular/core';
import {Lecture} from '../lecture';

@Component({
  selector: 'app-lecture-card-big',
  templateUrl: './lecture-card-big.component.html',
  styleUrls: ['./lecture-card-big.component.scss']
})
export class LectureCardBigComponent implements OnInit {
  @Input() cardInfo: Lecture;
  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
  }

}
