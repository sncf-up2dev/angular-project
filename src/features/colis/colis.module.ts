import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColisComponent } from './components/colis.component';
import { ColisService } from './services/colis.service';
import { ColisDetailsComponent } from './components/colis-details.component';
import { InfosComponent } from '../../shared/components/infos.component';
import { SelectorComponent } from '../../shared/components/selector.component';
import { ColisRoutingModule } from './colis.routing.module';

@NgModule({
  declarations: [
    ColisComponent,
    ColisDetailsComponent,
  ],
  imports: [
    CommonModule,
    InfosComponent,
    SelectorComponent,
    ColisRoutingModule
  ],
  exports: [
    ColisComponent,
  ],
  providers: [
    ColisService
  ]
})
export class ColisModule { }
