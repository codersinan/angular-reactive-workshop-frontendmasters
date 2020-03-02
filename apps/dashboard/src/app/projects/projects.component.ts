import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from "@app/core-data";

import { Observable } from "rxjs";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  selectedProject: Project;
  constructor(private projectsService: ProjectsService) { }

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
    this.projects$ = this.projectsService.all()
  }

  deleteProject(project) {
    this.projectsService.delete(project.id).subscribe(result => {
      this.getProjects();

    });
  }
  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectsService.create(project).subscribe(result => {
      this.getProjects();
      this.resetProject();
    })
  }

  updateProject(project) {
    this.projectsService.update(project).subscribe(result => {
      this.getProjects();
      this.resetProject();
    })
  }
}
