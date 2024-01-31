import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

export type View = 'COLIS' | 'LIVRAISONS'

@Component({
  selector: 'tc-root',
  template: `
    <h1>
      Torticolis <ng-container *ngIf="!production">(dev mode)</ng-container>
    </h1>
    <div>
      Éléments indispensables au démarrage de l'application
    </div>

    <div class="button-select">
      <button (click)="currentView = 'COLIS'">Gestion des colis</button>
      <button (click)="currentView = 'LIVRAISONS'">Livraisons assignées</button>
    </div>

    <tc-colis *ngIf="currentView === 'COLIS'" />
    <tc-livraisons *ngIf="currentView === 'LIVRAISONS'" />
  `,
  styles: `
    button {
      margin-right: 5px;
      margin-top: 5px;
  }`
})
export class AppComponent {

  production = environment.production

  currentView?: View = undefined

}
