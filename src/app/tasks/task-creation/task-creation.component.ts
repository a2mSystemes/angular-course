import { TasksService } from './../tasks.service';
import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrl: './task-creation.component.css'
})
export class TaskCreationComponent {

  private TasksService = inject(TasksService)

  task: NewTaskData = {
    title: '',
    summary: '',
    dueDate: '',
  };
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter();


onCancel() {
  this.close.emit();
}

onSubmit(){
  this.TasksService.addTask(this.task, this.userId);
  this.onCancel();
}

}
