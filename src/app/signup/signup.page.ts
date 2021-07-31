import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class SignupPage implements OnInit {

  nombreUsuario : string = "";
  email : string = "";
  celular: string = "";
  password : string = "";
  

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  OnSingUp(){

    this.authService.signUp(this.email, this.password, this.nombreUsuario, this.celular).then(user =>{
      this.router.navigate(['/login']);
    }).catch(error => alert('Usuario no se pudo registrar.'))
  }
  

}
