import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-docente',
  templateUrl: './login-docente.page.html',
  styleUrls: ['./login-docente.page.scss'],
})
export class LoginDocentePage implements OnInit {

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
