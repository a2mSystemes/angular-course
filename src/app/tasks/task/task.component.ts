import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input ({required: true}) task?: Task;
  @Output() complete =  new EventEmitter<string>();



completeTask() {
  this.complete.emit(this.task!.id);
}

}
