import { Component } from '@angular/core';
import { IconServices } from './shared/icon.service';
import { customIcons } from './shared/custom-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom icon';

  customIcons = [
    { name: 'agregar', path: '../assets/icons/agregar.svg' },
  ]

  constructor (private iconServices: IconServices) {
    this.iconServices.generateIcon();
  }
}
