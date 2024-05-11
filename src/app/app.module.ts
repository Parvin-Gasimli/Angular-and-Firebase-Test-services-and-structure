import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CounterReducer } from './store/counter.reducer';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    StoreModule.forRoot({
      counter: CounterReducer,
    }),
  ],
  providers: [],
})
export class AppModule {}
