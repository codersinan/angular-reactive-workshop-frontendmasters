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
    props<{ project: Project }>()
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
    props<{ project: Update<Project> }>()
);

export const DeleteProject = createAction(
    ProjectsActionTypes.DeleteProject,
    props<{ id: string }>()
);
export const ProjectDeleted = createAction(
    ProjectsActionTypes.ProjectDeleted,
    props<{ id: string }>()
);
// export class LoadProjects implements Action {
//     readonly type = ProjectsActionTypes.LoadProjects;
// }
// export class ProjectsLoaded implements Action {
//     readonly type = ProjectsActionTypes.ProjectsLoaded;
//     constructor(private payload: Project[]) { };
// }

// export class SelectProject implements Action {
//     readonly type = ProjectsActionTypes.SelectProject;
//     constructor(private payload: Project) { };
// }

// export class AddProject implements Action {
//     readonly type = ProjectsActionTypes.AddProject;
//     constructor(public payload: Project) { };
// }
// export class ProjectAdded implements Action {
//     readonly type = ProjectsActionTypes.ProjectAdded;
//     constructor(private payload: Project) { };
// }

// export class UpdateProject implements Action {
//     readonly type = ProjectsActionTypes.UpdateProject;
//     constructor(public payload: Project) { };
// }
// export class ProjectUpdated implements Action {
//     readonly type = ProjectsActionTypes.ProjectUpdated;
//     constructor(private payload: Project) { };
// }

// export class DeleteProject implements Action {
//     readonly type = ProjectsActionTypes.DeleteProject;
//     constructor(public payload: Project) { };
// }
// export class ProjectDeleted implements Action {
//     readonly type = ProjectsActionTypes.ProjectDeleted;
//     constructor(private payload: Project) { };
// }

// export type ProjectsActions = LoadProjects
//     | ProjectAdded

//     | SelectProject

//     | AddProject
//     | ProjectAdded

//     | UpdateProject
//     | ProjectUpdated

//     | DeleteProject
//     | ProjectDeleted
//     ;

