import { Component, OnInit } from '@angular/core';
import {ContentPathService} from '../content-path/content-path.service';

@Component({
  selector: 'app-read-note',
  templateUrl: './read-note.component.html',
  styleUrls: ['./read-note.component.scss']
})
export class ReadNoteComponent implements OnInit {

  constructor(public contentPathService: ContentPathService) { }

  ngOnInit() {
  }
  checkPng(url: string): boolean {
    if (url.includes("png")) {
      return true;
    } else {  return false; }
  }
}
