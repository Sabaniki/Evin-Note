import {Component, Input, NgZone, OnInit} from '@angular/core';
import {MainPageCard} from '../main-page-card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page-card-big',
  templateUrl: './main-page-card-big.component.html',
  styleUrls: ['./main-page-card-big.component.scss']
})
export class MainPageCardBigComponent implements OnInit {
  @Input() cardInfo: MainPageCard;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/' + this.cardInfo.redirectTo]);
  }
}

