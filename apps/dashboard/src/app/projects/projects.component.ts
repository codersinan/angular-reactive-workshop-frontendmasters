import { Component, OnInit } from '@angular/core';
import {
  Project,
  NotificationService,
  ProjectsFacade,
} from "@app/core-data";

import { Observable } from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  selectedProject$: Observable<Project>;

  constructor(
    private ns: NotificationService,
    private facede: ProjectsFacade,
  ) {
    this.projects$ = facede.projects$;
    this.selectedProject$ = facede.selectedProject$;
  }

  ngOnInit() {
    this.getProjects();
    // this.resetProject();
  }
  resetProject() {
    this.facede.selectProject(null);
  }

  selectProject(project) {
    this.facede.selectProject(project.id);
  }


  cancel() {
    this.resetProject();
  }

  getProjects() {
    this.facede.getProjects();
  }


  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.facede.createProject(project);

    // this will go away
    this.ns.emit('Project Created');
    this.resetProject();
  }

  updateProject(project) {
    this.facede.updateProject(project);

    // this will go away
    this.ns.emit('Project Updated');
    this.resetProject();
  }

  deleteProject(project: Project) {
    this.facede.deleteProject(project);

    // this will go away
    this.ns.emit('Project Deleted');
    this.resetProject();
  }
}
