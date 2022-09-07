import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-docente',
  templateUrl: './login-docente.page.html',
  styleUrls: ['./login-docente.page.scss'],
})
export class LoginDocentePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    AppComponent.isAlumno = false;
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