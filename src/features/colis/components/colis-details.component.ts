import { Component, Input, inject } from '@angular/core';
import { Colis } from '../types/colis';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ColisService } from '../services/colis.service';

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

  activatedRoute = inject(ActivatedRoute)
  colisService = inject(ColisService)

  selectedColis?: Colis

  constructor() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedColis = this.colisService.getColisById(params.get('colisId')!)
    });
  }

}
