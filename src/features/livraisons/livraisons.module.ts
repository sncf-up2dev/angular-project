import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivraisonsComponent } from './components/livraisons.component';
import { TOKEN } from '../../shared/services/token.service';

@NgModule({
  declarations: [
    LivraisonsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LivraisonsComponent
  ],
  providers: [
    { provide: TOKEN, useValue: 'LivraisonsModule' },
  ]
})
export class LivraisonsModule { }
