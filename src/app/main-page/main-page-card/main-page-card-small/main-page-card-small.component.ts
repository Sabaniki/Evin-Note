import {Component, Input, OnInit} from '@angular/core';
import {MainPageCard} from '../main-page-card';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-main-page-card-small',
  templateUrl: './main-page-card-small.component.html',
  styleUrls: ['./main-page-card-small.component.scss']
})
export class MainPageCardSmallComponent implements OnInit {
  @Input() cardInfo: MainPageCard;

  constructor(private router: Router, public auth: AuthService) {
  }

  ngOnInit() {
  }

  onClick() {
    if (this.auth.user$ === null) {
      this.auth.googleSignIn();
    }
    this.router.navigate(['/' + this.cardInfo.redirectTo]);
  }
}
