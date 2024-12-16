import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/service/user/user.service';

type UserData = {
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

type ObjectData = {
  data: string | number;
  label: string;
};


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userData: UserData;
  objectForm : ObjectData[] = [];
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
    else{
      this.buildForm();
    }
  }

  buildForm(){
    this.objectForm = [
      {
        data: this.userData.firstName,
        label: 'FIRST NAME',
      },
      {
        data: this.userData.middleName,
        label: 'MIDDLE NAME',
      },
      {
        data: this.userData.lastName,
        label: 'LAST NAME',
      },
      {
        data: this.userData.secondLastName,
        label: 'SECOND LAST NAME',
      },
      {
        data: this.userData.address,
        label: 'ADDRESS',
      },
      {
        data: this.userData.cityResidence,
        label: 'CITY OF RESIDENCE',
      },
      {
        data: this.userData.typeDNI === 'C' ? 'CITIZENSHIP DOCUMENT' : 'PASSPORT',
        label: 'DOCUMENT TYPE',
      },
      {
        data: this.userData.numberDNI,
        label: 'DOCUMENT NUMBER',
      },
    ]
  }
}
