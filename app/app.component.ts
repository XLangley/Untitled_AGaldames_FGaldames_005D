import { Component, OnInit } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

export const enterAnimation = (baseEl: HTMLElement, opts?: any): Animation => {
  const duration = 300;

  const animationCtrl = new AnimationController();

  if (opts.direction == 'forward') {
    return animationCtrl.create()
    .addElement(opts.enteringEl)
    .duration(duration)
    .easing('ease-out')
    .fromTo('opacity', 0, 1);
  } else {
    const animacionRoot = animationCtrl.create()
    .addElement(opts.enteringEl)
    .duration(0)
    .fromTo('opacity', 0, 1);
    
    const animacionSalida = animationCtrl.create()
    .addElement(opts.leavingEl)
    .duration(duration)
    .easing('ease-out')
    .fromTo('opacity', 1, 0);

    return animationCtrl.create().addAnimation([animacionRoot, animacionSalida]);
  }
}

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

export class AppComponent{
  public static isAlumno = true;
  
  constructor() {}

  componentes: Componente[]=[
    {
      icon:'home',
      name: 'Inicio',
      redirecTo:'/home'
    },
    {
      icon:'cog',
      name: 'Configuración',
      redirecTo:'/configuracion'
    },
    {
      icon:'log-out-outline',
      name: 'Cerrar Sesion',
      redirecTo:'/login-alumno'
    },
  ]

}

