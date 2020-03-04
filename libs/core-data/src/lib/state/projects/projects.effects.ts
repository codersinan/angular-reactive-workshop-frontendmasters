import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { Project } from '../../projects/project.model';
import { ProjectsService } from '../../projects/projects.service';
import { ProjectsLoaded, ProjectAdded, ProjectUpdated, ProjectDeleted } from './projects.actions';

import { DataPersistence } from "@nrwl/angular";

import * as ProjectActions from './projects.actions';

@Injectable({ providedIn: 'root' })
export class ProjectsEffects {
    @Effect() loadProjects$ =
        this.dataPersistance.fetch(ProjectActions.LoadProjects, {
            run: () => {
                return this.projectsService.all().pipe(
                    map((projects: Project[]) =>
                        ProjectsLoaded({ projects })
                    )
                );
            },
            onError: () => {
                return null;
            }
        });
    @Effect() addProject$ =
        this.dataPersistance.pessimisticUpdate(ProjectActions.AddProject, {
            run: (action: ReturnType<typeof ProjectActions.AddProject>) => {
                return this.projectsService.create(action.project).pipe(
                    map((project: Project) => ProjectAdded({ project }))
                );
            },
            onError: () => {
                return null;
            }
        });
    @Effect() updateProject$ =
        this.dataPersistance.pessimisticUpdate(ProjectActions.UpdateProject, {
            run: (action: ReturnType<typeof ProjectActions.UpdateProject>) => {
                return this.projectsService.update(action.project).pipe(
                    map((project: Project) =>
                        ProjectUpdated({ project })
                    )
                );
            },
            onError: () => null
            // undoAction: () => {
            //     return null;
            // }
        });
    @Effect() deleteProject$ =
        this.dataPersistance.pessimisticUpdate(ProjectActions.DeleteProject, {
            run: (action: ReturnType<typeof ProjectActions.DeleteProject>) => {
                return this.projectsService.delete(action.id).pipe(
                    map(() => ProjectDeleted({ id: action.id }))
                );
            },
            onError: () => {
                return null;
            }
        });
    constructor(
        private dataPersistance: DataPersistence<Project>,
        private projectsService: ProjectsService
    ) { }
}