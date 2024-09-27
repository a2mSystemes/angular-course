import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskCreationComponent } from './task-creation/task-creation.component';
import { TasksComponent } from './tasks.component';
import { CardComponent } from '../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, TaskCreationComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [TasksComponent],
  providers: [],
})
export class TasksModule {}
