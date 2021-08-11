import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('inputTask') input!: ElementRef<HTMLInputElement>;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
  addNewTask(taskContent: any) {
    if (taskContent) {
      this.taskService.addTask({ content: taskContent }).subscribe((data) => {
        console.log(data);
      });
      this.input.nativeElement.value = '';
    }
  }
}
