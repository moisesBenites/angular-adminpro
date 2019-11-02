import { Component } from '@angular/core';
import { SetingsService } from './services/index.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpro';
  /**
   *
   */
  constructor(public settings: SetingsService) {}
}
