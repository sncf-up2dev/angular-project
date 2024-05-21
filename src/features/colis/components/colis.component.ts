import { Component, inject } from '@angular/core';
import { ColisService } from '../services/colis.service';
import { Colis } from '../types/colis';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-colis',
  template: `
    Feature colis 

    <tc-selector key="id" 
      [items]="colisService.colisList"
      (itemSelected)="navigateToColis($event)" 
    />

    <router-outlet></router-outlet>

    <tc-infos />

  `,
  styles: `
    :host {
      display: block;
      border: dashed;
      margin: 10px;
      padding: 10px;
    }

    tc-colis-details {
      margin-bottom: 10px;
    }
  `
})
export class ColisComponent {

  Object = Object

  colisService = inject(ColisService)
  router = inject(Router)

  selectedColis?: Colis = undefined

  navigateToColis(colis: Colis | undefined) {
    if (colis)
      this.router.navigate(['/colis/' + colis.id])
    else
      this.router.navigate(['/colis'])
  }

}
