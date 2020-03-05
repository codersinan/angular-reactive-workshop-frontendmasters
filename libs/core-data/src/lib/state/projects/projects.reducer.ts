import { Project } from '../../projects/project.model';

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action } from '@ngrx/store';
import * as ProjectActions from './projects.actions';

// 01 Define the shape of my state
export interface ProjectsState extends EntityState<Project> {
    selectedProjectId: string | null,

}
// 02 Create entity adapter
export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();
// 03 Define the initial state
export const initialState: ProjectsState = adapter.getInitialState({
    selectedProjectId: null,
});
// 04 Build the MOST simplest reducer
const projectReducer = createReducer(
    initialState,
    on(ProjectActions.ProjectsLoaded, (state, { projects }) => {
        return adapter.addAll(projects, state);
    }),

    on(ProjectActions.SelectProject, (state, { id }) => {
        return Object.assign({}, state, { selectedProjectId: id });
    }),
    on(ProjectActions.ProjectAdded, (state, { project }) => {
        return adapter.addOne(project, state);
    }),
    on(ProjectActions.ProjectUpdated, (state, { project }) => {
        return adapter.updateOne({ id: project.id, changes: project }, state);
    }),
    on(ProjectActions.ProjectDeleted, (state, { id }) => {
        return adapter.removeOne(id, state);
    })
)
export function projectReducers(state: ProjectsState | undefined, action: Action) {
    return projectReducer(state, action)
}
// Selectors
export const getSelectedProjectId = (state: ProjectsState) => state.selectedProjectId;

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

export const selectProjectIds = selectIds;
export const selectProjectEntities = selectEntities;
export const selectAllProjects = selectAll;