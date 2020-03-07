import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProjects from "./projects/projects.reducer";
import * as fromCustomers from "./customers/customers.reducers";
import { Project } from '../projects/project.model';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

// Update the shape of the entire application state
export interface AppState {
    projects: fromProjects.ProjectsState,
    customers: fromCustomers.CustomerState,
    router: RouterReducerState<any>
}

// Add in feature reducer into combined reducer
export const reducers: ActionReducerMap<AppState> = {
    projects: fromProjects.projectReducers,
    customers: fromCustomers.customersReducers,
    router: routerReducer
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
    customerId: null
}

export const selectCurrentProject = createSelector(
    selectProjectEntities,
    selectCurrentProjectId,
    (projectEntities, projectId) => {
        return projectId ? projectEntities[projectId] : emptyProject;
    }
);

// CUSTOMERS SELECTORS

export const selectCustomersState =
    createFeatureSelector<fromCustomers.CustomerState>('customers');

export const selectAllCustomers = createSelector(
    selectCustomersState,
    fromCustomers.selectAllCustomers
);
export const selectCustomersProjects = createSelector(
    selectAllCustomers,
    selectAllProjects,
    (customers, projects) => {
        return customers.map(customer => {
            return Object.assign({}, {
                ...customer,
                projects: projects.filter(project => project.customerId === customer.id)
            })
        })
    }
);