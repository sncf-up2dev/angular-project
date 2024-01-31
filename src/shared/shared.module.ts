import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TOKEN } from './services/token.service';
import { SelectorComponent } from './components/selector.component';
import { InfosComponent } from './components/infos.component';


@NgModule({
  declarations: [
    SelectorComponent,
    InfosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectorComponent,
    InfosComponent
  ],
  providers: [
    { provide: TOKEN, useValue: "SharedModule" }
  ]
})
export class SharedModule { }
