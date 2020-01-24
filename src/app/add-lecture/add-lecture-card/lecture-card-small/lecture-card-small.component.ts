import {Component, Input, OnInit} from '@angular/core';
import {Lecture} from '../lecture';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AuthService} from '../../../auth/auth.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-lecture-card-small',
  templateUrl: './lecture-card-small.component.html',
  styleUrls: ['./lecture-card-small.component.scss']
})
export class LectureCardSmallComponent implements OnInit {
  @Input() cardInfo: Lecture;

  constructor() {
  }

  ngOnInit() {
  }
}
