import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[
    {
      icon:'home',
      name: 'Inicio',
      redirecTo:'/home'
    },
    {
      icon:'log-out-outline',
      name: 'Cerrar Sesion',
      redirecTo:'/login-alumno'
    },

  ]
}
