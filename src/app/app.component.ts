import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faBars, faBook, faArrowRight } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'extensao';
  
}
