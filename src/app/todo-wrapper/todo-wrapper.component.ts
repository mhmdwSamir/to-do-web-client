import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tasks } from '../core/interfaces/task';
import { TaskService } from '../core/services/task.service';
import { SharedTaskService } from '../core/sharedServices/share-task.service';
@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.scss'],
})
export class TodoWrapperComponent implements OnInit {
  messageNoTasks: string = '';
  noTasksWithCriteria: string = '';
  tasksList: Tasks[] = [];
  taskCount: number = 0;
  modelOpen = false;
  page = 1;
  pageSize = 5;

  optionsSortingBy = [
    {
      id: 1,
      value: 'rate',
    },
    {
      id: 2,
      value: 'Date',
    },
  ];

  numOfItemsInpage = [
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 5,
    },
    {
      value: 10,
    },
    {
      value: 15,
    },
  ];
  sortBy!: string;
  onSelectOption(option: string) {
    this.sortBy = option;
    this.getAllTasks();
  }
  limit!: number;
  onSelectNumOfItemsInPage(numOfItems: number) {
    this.limit = numOfItems;
    this.getAllTasks();
  }
  constructor(
    private _sharedTaskService: SharedTaskService,
    private _taskService: TaskService
  ) {}
  onChangePage() {
    this.page = this.page + 1;
  }

  ngOnInit(): void {
    this.getAllTasks();
  }
  getAllTasks() {
    this._sharedTaskService
      .getAllTasks(this.page, this.limit, this.sortBy)
      .subscribe(
        (tasks) => {
          console.log('tasks', tasks);
          this.tasksList = tasks;
          this.taskCount = this.tasksList.length;
        },
        (error: HttpErrorResponse) => {
          this.messageNoTasks = error.error;
          this.tasksList = [];
        }
      );
  }
  handleAddingTask(task: Tasks) {
    const newTasksList = [...this.tasksList];
    newTasksList.push(task);
    this.tasksList = newTasksList;
    this.taskCount = this.tasksList.length;
  }
  onDeleteTask() {
    this.getAllTasks();
  }

  getCompletedTasks() {
    this._taskService
      .getCompletedTasks()
      .subscribe((completedTasks: Tasks[]) => {
        this.tasksList = completedTasks;
      });
  }
  getActiveTasks() {
    this._taskService.getActiveTasks().subscribe((activeTasks: Tasks[]) => {
      this.tasksList = activeTasks;
    });
  }

  togglleModelvisibilty() {
    this.modelOpen = !this.modelOpen;
  }
  clearCompletedTasks() {
    this._taskService.deleteCompletedTasks().subscribe(() => {
      this.getAllTasks();
    });
    this.togglleModelvisibilty();
  }

  ongetSearchTerm(term: string) {
    // call get all tasks method to get all tasks that has name with the term
    this._sharedTaskService.filterTasks(term).subscribe(
      (filteredTasks) => {
        this.tasksList = filteredTasks;
      },
      ({ error }) => {
        console.log(error);
        this.noTasksWithCriteria = 'No Tasks With Given Criteria';
        this.tasksList = [];
      }
    );
  }
}
