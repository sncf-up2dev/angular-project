import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _value = 0

  get value(): number {
    return this._value
  }

  increment(): void {
    this._value++;
  }

  reset(): void {
    this._value = 0;
  }

}
