import {Component, Input, NgZone, OnInit} from '@angular/core';
import {MainPageCard} from './main-page-card/main-page-card';
import {Router} from '@angular/router';
import {MonitorScreenSizeService} from '../monitor-screen-size/monitor-screen-size.service';
import {AuthService} from '../auth/auth.service';

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
      'ノートのアイコン素材.svg',
      this.redirectPage('/read-note'),
    ),
    new MainPageCard(
      '授業を追加',
      '　受講している授業をマイリストに登録する事ができます',
      '授業のフリー素材.svg',
      this.redirectPage('/add-lecture')
    ),
    new MainPageCard(
      '映像をアップロード',
      '授業を録画した映像をアップロードすることができます',
      'クラウドのアップロードアイコン.svg',
      this.redirectPage('/upload-movie')
    )
  ];
  @Input() cardInfo: MainPageCard;

  constructor(private router: Router, private monitorScreenSizeService: MonitorScreenSizeService, private auth: AuthService) {
  }

  ngOnInit() {
  }

  redirectPage(path: string): () => void {
    return () => {
      console.log('redirect to ' + path);
      if (this.auth.user$ === null) {
        console.log('not logged in');
        this.auth.googleSignIn();
      } else {
        this.auth.user$.subscribe(user => console.log(user));
        this.router.navigate([path]);
      }
    };
  }
}
