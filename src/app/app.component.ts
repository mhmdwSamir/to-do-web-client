import { Component } from '@angular/core';
import { TaskService } from './core/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'toDoApp';

  constructor() {}

  onSearchTerm(term: string) {
    console.log(' comes from app component ', term);
  }
}
