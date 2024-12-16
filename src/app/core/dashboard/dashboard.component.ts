import { Component } from '@angular/core';
import { UserService } from 'src/app/service/request/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  selectedOption: string = '';
  dni: number | null = null;
  dropdownOptions: string[] = ['CITIZENSHIP DOCUMENT', 'PASSPORT'];

  constructor(private readonly userService: UserService){}

  isFormValid(): boolean {
    return this.selectedOption !== '' && this.dni !== null;
  }

  onButtonClick(): void {
    console.log('Selected Option:', this.selectedOption);
    console.log('Document Number:', this.dni);
    
    this.userService.getClient().subscribe({
      next: (data) => {
        console.log('Respuesta de la petición:', data);
      },
      error: (error) => {
        console.error('Error al hacer la petición:', error);
      }
    });
  }
}
