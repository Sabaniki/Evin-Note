import {Component, Input, OnInit} from '@angular/core';
import {MainPageCard} from '../main-page-card';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/auth.service';
import swal from 'sweetalert';
import {isNullOrUndefined} from 'util';

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
    // if (isNullOrUndefined(this.auth.user$.subscribe())) {
    //   // this.auth.googleSignIn();
    //   swal({
    //     text: 'ログインする必要があります',
    //     icon: 'error',
    //   }).then(() => this.router.navigate(['/']));
    // } else {
    //   this.router.navigate(['/' + this.cardInfo.redirectTo]);
    // }
    this.auth.user$.subscribe(user => {
      if (!user) {
        swal({
          text: 'ログインする必要があります',
          icon: 'error',
        }); // }).then(() => this.router.navigate(['/']));
      } else {
        this.router.navigate(['/' + this.cardInfo.redirectTo]);
      }
    });
  }
}

