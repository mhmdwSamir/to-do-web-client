import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { TaskService } from './core/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'toDoApp';

  constructor(public auth: AuthService) {}

  onSearchTerm(term: string) {
    console.log(' comes from app component ', term);
  }
}
