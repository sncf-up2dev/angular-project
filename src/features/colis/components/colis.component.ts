import { Component, inject } from '@angular/core';
import { TOKEN } from '../../../shared/services/token.service';
import { ColisService } from '../services/colis.service';
import { Colis } from '../types/colis';
import { CounterService } from '../../../shared/services/counter.service';

@Component({
  selector: 'tc-colis',
  template: `
    Feature colis 

    <tc-selector key="id" 
      [items]="colisService.colisList"
      (itemSelected)="selectedColis = selectedColis === $event ? undefined : $event" 
    />

    <tc-colis-details [selectedColis]="selectedColis" />

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

  selectedColis?: Colis = undefined

}
