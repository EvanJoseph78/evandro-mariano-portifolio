import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../shared/header/header.component';
import { DarkmodeService } from '../../../services/darkmode.service';
import { DescriptionComponent } from './description/description.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MatIconModule, HeaderComponent, DescriptionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  darkMode: boolean = true;

  constructor(public darkModeService: DarkmodeService) { }

  ngOnInit(): void { }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  toggleSideBar() {
    // this.darkModeService.toggleDarkMode();
    this.darkModeService.closeSideBar();
    // this.darkModeService.toggleSideBar();
  }


}

