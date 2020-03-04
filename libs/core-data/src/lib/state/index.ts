import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProjects from "./projects/projects.reducer";
// Update the shape of the entire application state
export interface AppState {
    projects: fromProjects.ProjectsState
}

// Add in feature reducer into combined reducer
export const reducers: ActionReducerMap<AppState> = {
    projects: fromProjects.projectReducers
}

// Project Selectors
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