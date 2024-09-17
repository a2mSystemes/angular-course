import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task-creation',
  standalone: true,
  imports: [],
  templateUrl: './task-creation.component.html',
  styleUrl: './task-creation.component.css'
})
export class TaskCreationComponent {

  @Input() task: Task = {
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: '',
  };
  @Output() newTask = new EventEmitter<Task>();

validateTask() {
  this.newTask.emit(this.task);
}

}
