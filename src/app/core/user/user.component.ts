import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/service/user/user.service';

type userData = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  secondLastName: string;
  phone: string;
  address: string;
  cityResidence: string;
  typeDNI: string;
  numberDNI: number;
};


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userData: userData;
  constructor(
    private readonly userDataService: UserDataService,
    private readonly router: Router
  ) {
    this.userData = this.userDataService.getUserData();
  }

  ngOnInit(): void {
    if (this.userData === undefined) {
      this.router.navigate(['/dashboard']);
    }
  }
}
