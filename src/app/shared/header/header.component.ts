import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isInUserPath: boolean = false;

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
    this.checkIfInDashboard();
    this.router.events.subscribe(() => {
      this.checkIfInDashboard();
    });
  }

  checkIfInDashboard(): void {
    const currentRoute = this.router.url;
    this.isInUserPath = currentRoute.includes('user');
  }

  navigateToHome(): void {
    Swal.fire({
      title: 'ARE YOU SURE?',
      text: 'DO YOU WANT TO GO BACK TO THE MAIN MENU?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'YES, GO BACK!',
      cancelButtonText: "NO, STAY HERE",
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/dashboard']);
      }
    });    
  }
}
