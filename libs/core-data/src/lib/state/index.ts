import { ActionReducerMap } from '@ngrx/store';

import * as fromProjects from "./projects/projects.reducer";
// Update the shape of the entire application state
export interface AppState {
    projects: fromProjects.ProjectsState
}

// Add in feature reducer into combined reducer
export const reducers: ActionReducerMap<AppState> = {
    projects: fromProjects.projectReducers
}