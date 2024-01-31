import { Component, inject } from '@angular/core';
import { TOKEN } from '../../../shared/services/token.service';
import { CounterService } from '../../../shared/services/counter.service';

@Component({
  selector: 'tc-livraisons',
  template: `
    <div>
      Feature livraisons - Token : {{ token }}
    </div>

    <div>
      <button (click)="counterService.increment()">Add</button>
      <button (click)="counterService.reset()">Reset</button>
    </div>

    <footer>Counter : {{ counterService.value }}</footer>
  `,
  styles: `
    :host {
      display: block;
      border: solid;
      margin: 10px;
      padding: 10px;
    }
    button {
      margin-right: 5px;
      margin-top: 5px;
    }
  `
})
export class LivraisonsComponent {

  token = inject(TOKEN)

  counterService = inject(CounterService)

}
