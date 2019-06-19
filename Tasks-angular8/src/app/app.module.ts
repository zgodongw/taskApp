import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TaskTypesComponent } from './task-types/task-types.component';
import { TaskTypeComponent } from './task-types/task-type/task-type.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { TaskTypePipe } from './pipes/type.pipe';
import { FabComponent } from './fab/fab.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskTypesComponent,
    TaskTypeComponent,
    TasksComponent,
    TaskComponent,
    CreateModalComponent,
    EditModalComponent,
    TaskTypePipe,
    FabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
