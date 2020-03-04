import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Project } from '../../projects/project.model';

enum ProjectsActionTypes {
    LoadProjects = "[Projects] Load",
    ProjectsLoaded = '[Projects] Loaded',

    SelectProject = '[Projects] Select',

    AddProject = '[Projects] Add',
    ProjectAdded = '[Projects] Added',

    UpdateProject = '[Projects] Update',
    ProjectUpdated = '[Projects] Updated',

    DeleteProject = '[Projects] Delete',
    ProjectDeleted = '[Projects] Deleted',
};

export const LoadProjects = createAction(
    ProjectsActionTypes.LoadProjects
);
export const ProjectsLoaded = createAction(
    ProjectsActionTypes.ProjectsLoaded,
    props<{ projects: Project[] }>()
);

export const SelectProject = createAction(
    ProjectsActionTypes.SelectProject,
    props<{ id: string }>()
);

export const AddProject = createAction(
    ProjectsActionTypes.AddProject,
    props<{ project: Project }>()
);
export const ProjectAdded = createAction(
    ProjectsActionTypes.ProjectAdded,
    props<{ project: Project }>()
);

export const UpdateProject = createAction(
    ProjectsActionTypes.UpdateProject,
    props<{ project: Project }>()
);
export const ProjectUpdated = createAction(
    ProjectsActionTypes.ProjectUpdated,
    props<{ project: Project }>()
);

export const DeleteProject = createAction(
    ProjectsActionTypes.DeleteProject,
    props<{ id: string }>()
);
export const ProjectDeleted = createAction(
    ProjectsActionTypes.ProjectDeleted,
    props<{ id: string }>()
);