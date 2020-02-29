import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from "@app/core-data";

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
  }

  getProjects() {
    this.projects$ = this.projectsService.all()
  }
  selectProject(item) {
    this.selectedProject = item;
  }
  cancel() {
    this.selectProject(null);
  }
}
