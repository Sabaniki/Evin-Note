import { Component, OnInit } from '@angular/core';
import {MainPageCard} from './main-page-card/main-page-card';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  mainPageCards: Array<MainPageCard> = [
    new MainPageCard(
      'ノートを閲覧',
      '　自動で作成されたノートを閲覧することができます',
      'ノートのアイコン素材.svg'
    ),
    new MainPageCard(
      '授業を追加',
      '　受講している授業をマイリストに登録する事ができます',
      '授業のフリー素材.svg'
    ),
    new MainPageCard(
      '映像をアップロード',
      '授業を録画した映像をアップロードすることができます',
      'クラウドのアップロードアイコン.svg'
    ),
  ];
  constructor() { }

  ngOnInit() {
  }

}
