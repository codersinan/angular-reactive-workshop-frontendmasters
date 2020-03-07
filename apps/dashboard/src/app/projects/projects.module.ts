import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { MaterialModule } from "@app/material";
import { ProjectsComponent } from './projects.component';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectItemComponent } from './project-item/project-item.component';


@NgModule({
  imports: [
    CommonModule,    
    MaterialModule,
    FormsModule,
    
    ProjectsRoutingModule,
  ],
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
    ProjectItemComponent
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
