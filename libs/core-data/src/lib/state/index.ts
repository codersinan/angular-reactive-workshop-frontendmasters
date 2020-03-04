import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProjects from "./projects/projects.reducer";
import { Project } from '../projects/project.model';
// Update the shape of the entire application state
export interface AppState {
    projects: fromProjects.ProjectsState
}

// Add in feature reducer into combined reducer
export const reducers: ActionReducerMap<AppState> = {
    projects: fromProjects.projectReducers
}

// PROJECT SELECTORS
export const selectProjectState
    = createFeatureSelector<fromProjects.ProjectsState>('projects');
export const selectProjectIds = createSelector(
    selectProjectState,
    fromProjects.selectProjectIds
);

export const selectProjectEntities = createSelector(
    selectProjectState,
    fromProjects.selectProjectEntities
);

export const selectAllProjects = createSelector(
    selectProjectState,
    fromProjects.selectAllProjects
);

export const selectCurrentProjectId = createSelector(
    selectProjectState,
    fromProjects.getSelectedProjectId
);

const emptyProject: Project = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false,
    // customerId: null
}

export const selectCurrentProject = createSelector(
    selectProjectEntities,
    selectCurrentProjectId,    
    (projectEntities, projectId) => {
        return projectId ? projectEntities[projectId] : emptyProject;
    }
);