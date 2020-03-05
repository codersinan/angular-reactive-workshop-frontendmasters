import { Component, OnInit } from '@angular/core';
import {
  Project,
  Customer,
  NotificationService,
  ProjectsFacade,
  CustomersFacede,
} from "@app/core-data";

import { Observable } from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  customers$: Observable<Customer[]>;
  selectedProject$: Observable<Project>;

  constructor(
    private ns: NotificationService,
    private projectFacede: ProjectsFacade,
    private customersFacede: CustomersFacede,
  ) {
    this.projects$ = projectFacede.projects$;
    this.customers$ = customersFacede.customers$;
    this.selectedProject$ = projectFacede.selectedProject$;
  }

  ngOnInit() {
    this.getProjects();
    this.getCustomers();
    this.resetProject();
  }
  resetProject() {
    this.projectFacede.selectProject(null);
  }

  selectProject(project) {
    this.projectFacede.selectProject(project.id);
  }


  cancel() {
    this.resetProject();
  }

  getProjects() {
    this.projectFacede.getProjects();
  }
  getCustomers() {
    this.customersFacede.loadCustomers();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectFacede.createProject(project);

    // this will go away
    this.ns.emit('Project Created');
    this.resetProject();
  }

  updateProject(project) {
    this.projectFacede.updateProject(project);

    // this will go away
    this.ns.emit('Project Updated');
    this.resetProject();
  }

  deleteProject(project: Project) {
    this.projectFacede.deleteProject(project);

    // this will go away
    this.ns.emit('Project Deleted');
    this.resetProject();
  }
}
