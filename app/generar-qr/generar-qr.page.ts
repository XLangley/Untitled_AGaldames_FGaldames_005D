import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  informacion={
    Seccion:'',
    Fecha:'',
    HoraInicio:'',
    HoraTermino:''
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.informacion);
  }

}
