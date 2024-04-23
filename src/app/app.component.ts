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


  constructor (private iconServices: IconServices) {
    this.iconServices.generateIcon();
  }
}
