import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-alumnos',
  templateUrl: './home-alumnos.page.html',
  styleUrls: ['./home-alumnos.page.scss'],
})
export class HomeAlumnosPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.open('first');
  }

}
