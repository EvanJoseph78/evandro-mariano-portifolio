import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }

  private darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private sideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public get darkMode$() {
    return this.darkMode.asObservable();
  }

  public get sideBar$() {
    return this.sideBar.asObservable();
  }

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }

  toggleSideBar() {
    // console.log(this.sideBar.value);
    this.sideBar.next(!this.sideBar.value);
  }

  closeSideBar() {
    if (this.sideBar.value) {
      this.sideBar.next(false)
    }
  }


}
