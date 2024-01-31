import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColisComponent } from './components/colis.component';
import { TOKEN } from '../../shared/services/token.service';
import { SharedModule } from '../../shared/shared.module';
import { ColisService } from './services/colis.service';
import { ColisDetailsComponent } from './components/colis-details.component';

@NgModule({
  declarations: [
    ColisComponent,
    ColisDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ColisComponent,
  ],
  providers: [
    ColisService
  ]
})
export class ColisModule { }
