import { Component } from '@angular/core';
import { UserService } from 'src/app/service/request/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  dropdownValue: string = '';
  inputValue: string = '';
  isButtonDisabled: boolean = true;

  dropdownOptions: string[] = ['C', 'P'];

  constructor(private readonly userService: UserService){

  }

  onButtonClick(){
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
