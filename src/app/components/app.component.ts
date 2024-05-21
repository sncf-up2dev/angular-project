import { Component, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

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
      <button routerLink="/colis" routerLinkActive="selected-item">Gestion des colis</button>
      <button routerLink="/livraisons" routerLinkActive="selected-item">Livraisons assignées</button>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: `
    button {
      margin-right: 5px;
      margin-top: 5px;
    }

    .selected-item {
      color: red;
    }`
})
export class AppComponent {

  production = environment.production

  router = inject(Router)

  navigateToColis() {
    this.router.navigate(['/colis'])
  }

}
