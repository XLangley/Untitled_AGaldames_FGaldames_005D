import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  usuario={
    email:'',
    password:''
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.usuario);
  }

}