import {Component, Input, OnInit} from '@angular/core';
import {MainPageCard} from '../main-page-card';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-main-page-card-big',
  templateUrl: './main-page-card-big.component.html',
  styleUrls: ['./main-page-card-big.component.scss']
})
export class MainPageCardBigComponent implements OnInit {
  @Input() cardInfo: MainPageCard;

  constructor(private router: Router, public auth: AuthService) {
  }

  ngOnInit() {
  }

  onClick() {
    if (this.auth.user$ === null) {
      this.auth.googleSignin();
    }
    this.router.navigate(['/' + this.cardInfo.redirectTo]);
  }
}

