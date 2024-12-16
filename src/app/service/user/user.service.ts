import { Injectable } from '@angular/core';

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



@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData!: userData 
  constructor() { }

  setUserData(data: userData): void {
    this.userData = data;
  }

  getUserData(): userData {
    return this.userData;
  }
}
