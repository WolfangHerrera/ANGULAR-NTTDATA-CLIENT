import { Component } from '@angular/core';
import { UserService } from 'src/app/service/request/user.service';
import Swal from 'sweetalert2';

type DocumentType = {
  documentType: string;
  documentNumber: number;
};

type ResponseType = {
  documentType: string;
  documentNumber: number;
  name: string;
  lastName: string;
  birthDate: string;
  address: string;
  phone: string;
  email: string;
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

  constructor(private readonly userService: UserService){}

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
    this.userService.getClient(dataJson).subscribe({
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
    console.log('Respuesta de la petición:', response);
    
  }

  
}
