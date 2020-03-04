import { Action } from '@ngrx/store';
import { Project } from '../../projects/project.model';

export enum ProjectsActionTypes {
    LoadProjects = "[Projects] Load",
    SelectProject = '[Projects] Select',
    AddProject = '[Projects] Add',
    UpdateProject = '[Projects] Update',
    DeleteProject = '[Projects] Delete',
};

export class LoadProjects implements Action {
    readonly type = ProjectsActionTypes.LoadProjects;
    constructor(private payload: Project[]) { };
}

export class SelectProject implements Action {
    readonly type = ProjectsActionTypes.SelectProject;
    constructor(private payload: Project) { };
}

export class AddProject implements Action {
    readonly type = ProjectsActionTypes.AddProject;
    constructor(private payload: Project) { };
}

export class UpdateProject implements Action {
    readonly type = ProjectsActionTypes.UpdateProject;
    constructor(private payload: Project) { };
}

export class DeleteProject implements Action {
    readonly type = ProjectsActionTypes.DeleteProject;
    constructor(private payload: Project) { };
}

export type ProjectsActions = LoadProjects
    | SelectProject
    | AddProject
    | UpdateProject
    | DeleteProject
    ;

