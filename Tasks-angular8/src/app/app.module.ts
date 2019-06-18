import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { TaskTypesComponent } from './task-types/task-types.component';
import { TaskTypeComponent } from './task-types/task-type/task-type.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTypesComponent,
    TaskTypeComponent,
    TasksComponent,
    TaskComponent,
    CreateModalComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
