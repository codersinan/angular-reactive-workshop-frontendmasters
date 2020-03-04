import { Project } from '../../projects/project.model';

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action, State } from '@ngrx/store';
import * as ProjectActions from './projects.actions';
export const initialProjects: Project[] = [
    {
        id: '1',
        title: 'Project One',
        details: 'This is a sample project',
        percentComplete: 20,
        approved: false,
        // customerId: null
    },
    {
        id: '2',
        title: 'Project Two',
        details: 'This is a sample project',
        percentComplete: 40,
        approved: false,
        // customerId: null
    },
    {
        id: '3',
        title: 'Project Three',
        details: 'This is a sample project',
        percentComplete: 100,
        approved: true,
        // customerId: null
    }
];

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
// export function projectReducers(
//     state = initialState, action
// ) {
//     switch (action.type) {
//         case ProjectsActionTypes.ProjectsLoaded:
//             return adapter.addMany(action.payload, state);
//         case ProjectsActionTypes.SelectProject:
//             return Object.assign({}, state, { selectedProjectId: action.payload })
//         case ProjectsActionTypes.ProjectAdded:
//             return adapter.addOne(action.payload, state);
//         case ProjectsActionTypes.ProjectUpdated:
//             return adapter.updateOne(action.payload, state);
//         case ProjectsActionTypes.ProjectDeleted:
//             return adapter.removeOne(action.payload, state);
//         default:
//             return state;
//     }
// }
const projectReducer = createReducer(
    initialState,
    on(ProjectActions.ProjectsLoaded, (state, { projects }) => {
        return adapter.addAll(projects, state);
    }),
    on(ProjectActions.ProjectAdded, (state, { project }) => {
        return adapter.addOne(project, state);
    }),
    on(ProjectActions.ProjectUpdated, (state, { project }) => {
        return adapter.updateOne(project, state);
    }),
    on(ProjectActions.ProjectDeleted, (state, { id }) => {
        return adapter.removeOne(id, state);
    })
)
export function projectReducers(state: ProjectsState | undefined, action: Action) {
    return projectReducer(state, action)
}
// Selectors
export const getSelectedProject = (state: ProjectsState) => state.selectedProjectId;

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();
export const selectProjectIds = selectIds;
export const selectProjectEntities = selectEntities;
export const selectAllProjects = selectAll;