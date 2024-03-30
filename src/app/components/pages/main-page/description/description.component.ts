import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
}
