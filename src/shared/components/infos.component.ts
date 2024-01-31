import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { TOKEN } from '../services/token.service';

@Component({
  selector: 'tc-infos',
  template: `
    <div>Counter : {{ counterService.value }}</div>
    <div> Token : {{ token }}</div>
  `,
  styles: `
    :host {
      display: block;
      border: solid;
      padding: 5px;
    }
  `
})
export class InfosComponent {

  token = inject(TOKEN)
  counterService = inject(CounterService)

}
