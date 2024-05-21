import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { LivraisonsModule } from '../features/livraisons/livraisons.module';
import { AppRoutingModule } from './app.routing.module';
import { NotFoundComponent } from './components/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LivraisonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
