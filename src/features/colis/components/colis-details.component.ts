import { Component, Input } from '@angular/core';
import { Colis } from '../types/colis';

@Component({
  selector: 'tc-colis-details',
  template: `
    <ng-container *ngIf="selectedColis">
      <div class="field" *ngFor="let entry of Object.entries(selectedColis)">
        <b>{{ entry[0] }}</b> : {{ entry[1] }}
      </div>
    </ng-container>
  `,
  styles: `
    :host {
      display: block;
      border: solid;
    }
    
    .field {
      padding: 5px
    }
  `
})
export class ColisDetailsComponent {

  Object = Object

  @Input()
  selectedColis?: Colis = undefined

}
