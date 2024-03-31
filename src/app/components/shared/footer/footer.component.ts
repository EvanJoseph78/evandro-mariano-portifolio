import { Component } from '@angular/core';
import { DarkmodeService } from '../../../services/darkmode.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(public darkModeService: DarkmodeService) { }

  toggleSideBar() {
    // this.darkModeService.toggleDarkMode();
    this.darkModeService.closeSideBar();
    // this.darkModeService.toggleSideBar();
  }
}
