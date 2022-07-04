import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

// Setup NgRx store
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

// we combine multiple reducer's data to create big store object 
const store = {
  count: counterReducer // count is the selector - we need to use this in counter.comp.ts 
                        // as it needs data from the store
}

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(store) // here's the store data 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
