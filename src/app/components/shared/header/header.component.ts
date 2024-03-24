import { Component } from '@angular/core';
import { DarkmodeService } from '../../../services/darkmode.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public darkModeService: DarkmodeService) { }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

}
