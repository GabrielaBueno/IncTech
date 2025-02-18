import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('http://incubadora.cp.utfpr.edu.br/novo/')">
        <ion-label>Incubadora</ion-label>
      </ion-item>
      <ion-item button (click)="close('http://www.utfpr.edu.br/')">
        <ion-label>Universidade</ion-label>
      </ion-item>
      
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
