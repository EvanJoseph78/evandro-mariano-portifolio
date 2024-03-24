import { Component } from '@angular/core';
import { DarkmodeService } from '../../../services/darkmode.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, SideBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  slideBar: boolean = false;

  constructor(public darkModeService: DarkmodeService) { }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  toggleSlideBar() {
    this.slideBar = !this.slideBar;
  }

}
