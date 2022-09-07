import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    AppComponent.isAlumno = true;
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