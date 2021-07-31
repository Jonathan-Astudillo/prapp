import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( public authService : AuthService, public router : Router) {}


  OnLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  
  }
}
