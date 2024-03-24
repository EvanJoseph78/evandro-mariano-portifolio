import { Component } from '@angular/core';
import { DarkmodeService } from '../../../../services/darkmode.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor(public darkModeService: DarkmodeService) { }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }


}
