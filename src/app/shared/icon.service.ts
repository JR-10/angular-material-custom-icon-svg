import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { CustomIcon, customIcons } from './custom-icons';


@Injectable({
  providedIn: 'root',
})
export class IconServices {

  constructor(
    private _iconReg: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {}

  generateIcon() {
    customIcons.forEach((icon: CustomIcon) => {
      this._iconReg.addSvgIcon(icon.name, this._domSanitizer.bypassSecurityTrustResourceUrl(icon.path));
    });
  }
}
