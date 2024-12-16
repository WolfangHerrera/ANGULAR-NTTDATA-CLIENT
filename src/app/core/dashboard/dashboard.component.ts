import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpService } from 'src/app/service/request/user.service';
import { UserDataService } from 'src/app/service/user/user.service';
import Swal from 'sweetalert2';

type DocumentType = {
  documentType: string;
  documentNumber: number;
};

type ResponseType = {
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  selectedOption: string = '';
  selectedDni!: number;
  formattedDni: string = '';
  dropdownOptions = ['CITIZENSHIP DOCUMENT', 'PASSPORT'];

  constructor(private readonly userHttpService: UserHttpService, private readonly userDataService: UserDataService, private readonly router: Router){}

  isFormValid(): boolean {
    return this.selectedOption !== '' && this.selectedDni !== null && this.selectedDni.toString().length >= 8 && this.selectedDni.toString().length <= 11;
  }

  formatNumber(value: string): void {
    let numericValue = value.replace(/[^0-9]/g, '');
    this.selectedDni = parseInt(numericValue, 10);
    this.formattedDni = this.selectedDni ? this.selectedDni.toLocaleString() : '';
  }

  onButtonClick(): void {
    const dataJson : DocumentType = {
      'documentType': this.selectedOption === 'CITIZENSHIP DOCUMENT' ? 'C' : 'P',
      'documentNumber': this.selectedDni
    }
    this.userHttpService.getClient(dataJson).subscribe({
      next: (data : ResponseType) => {
        this.handleResponse(data);
      },
      error: (message) => {
        Swal.fire({
          icon: "error",
          title: "OOPS...",
          text: message.error.message,
        });
        console.error(message);
      }
    });
  }

  async handleResponse(response : ResponseType){
    this.userDataService.setUserData(response);
    this.router.navigate(['/user']);
  }
}
