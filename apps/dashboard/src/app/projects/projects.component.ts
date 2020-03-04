import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project, NotificationService, ProjectsState } from "@app/core-data";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store, select } from "@ngrx/store";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  selectedProject: Project;
  constructor(
    private ns: NotificationService,
    private projectsService: ProjectsService,

    private store: Store<ProjectsState>,
  ) {
    this.projects$ = store.pipe(
      select('projects'),
      map((state: any) => {
        return state.projects;
      })
    )
  }

  ngOnInit() {
    this.getProjects();
    this.resetProject();
  }

  selectProject(item) {
    this.selectedProject = item;
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: null,
      details: null,
      percentComplete: 0,
      approved: false
    };
    this.selectProject(emptyProject);
  }

  cancel() {
    this.resetProject();
  }

  getProjects() {
    // this.projects$ = this.projectsService.all()
  }


  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.store.dispatch({ type: 'create', payload: project });

    // this will go away
    this.ns.emit('Project Created');
    this.resetProject();
  }

  updateProject(project) {
    this.store.dispatch({ type: 'update', payload: project });

    // this will go away
    this.ns.emit('Project Updated');
    this.resetProject();
  }

  deleteProject(project) {
    this.store.dispatch({ type: 'delete', payload: project });

    // this will go away
    this.ns.emit('Project Deleted');
    this.resetProject();
  }
}
