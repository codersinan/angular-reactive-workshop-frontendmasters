export { CoreDataModule } from './lib/core-data.module';

export { Project } from "./lib/projects/project.model";
export { ProjectsService } from './lib/projects/projects.service';

export { AuthService } from './lib/auth/auth.service';
export { AuthGuard } from './lib/auth/auth.guard';
export { TokenInterceptor } from "./lib/auth/token-interceptor";

export { NotificationService } from './lib/notification/notification.service';

// Expose project state
export { ProjectsState, initialProjects } from './lib/state/projects/projects.reducer';
export { LoadProjects, SelectProject, AddProject, UpdateProject, DeleteProject } from './lib/state/projects/projects.actions'
export { selectAllProjects } from './lib/state'