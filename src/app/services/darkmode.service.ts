import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }

  private darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public get darkMode$() {
    return this.darkMode.asObservable();
  }

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }

}
