import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Project } from '../../projects/project.model';
import { selectCurrentProject, selectAllProjects } from '..';

import { LoadProjects, SelectProject, AddProject, UpdateProject, DeleteProject } from './projects.actions';
import { ProjectsState } from './projects.reducer';

@Injectable({
    providedIn: 'root'
})
export class ProjectsFacade {
    projects$: Observable<Project[]>;
    selectedProject$: Observable<Project>;

    constructor(private store: Store<ProjectsState>) {
        this.projects$ = store.pipe(select(selectAllProjects));
        this.selectedProject$ = store.pipe(select(selectCurrentProject));
    }

    getProjects() {
        this.store.dispatch(LoadProjects());
    }

    selectProject(id) {
        this.store.dispatch(SelectProject({ id }));
    }

    createProject(project) {
        this.store.dispatch(AddProject({ project }));
    }

    updateProject(project) {
        this.store.dispatch(UpdateProject({ project }));
    }

    deleteProject(project: Project) {
        this.store.dispatch(DeleteProject({ id: project.id }));
    }
}