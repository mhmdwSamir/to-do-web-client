import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-stats',
  templateUrl: './todo-stats.component.html',
  styleUrls: ['./todo-stats.component.scss'],
})
export class TodoStatsComponent implements OnInit {
  @Input() taskCount!: number;
  @Output() getCompleteTaskBtn = new EventEmitter();
  @Output() getActiveTaskBtn: EventEmitter<boolean> = new EventEmitter();
  @Output() getAllTaskBtn: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  showAllTask() {
    this.getAllTaskBtn.emit();
  }

  showCompletedTask() {
    this.getCompleteTaskBtn.emit();
  }
  // active
  showActiveTask() {
    console.log('active btn clicked');
    this.getActiveTaskBtn.emit();
  }
}
