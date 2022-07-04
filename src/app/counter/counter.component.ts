import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor( private store: Store<{count: number}>) {  // subscribing to store data
    this.count$ = this.store.select('count'); // selecting the needed data from store 
    console.log(this.count$);
  }

  ngOnInit(): void {
  }

  handleIncrement(){
    console.log('Incrementing...');
    // Dispatch an action to update store data
    this.store.dispatch(increment())
  }

  handleDecrement(){
    console.log('Incrementing...');
    // Dispatch an action to update store data
    this.store.dispatch(decrement())
  }
}
