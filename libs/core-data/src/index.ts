

export { CoreDataModule } from './lib/core-data.module';

export { Project } from "./lib/projects/project.model";
export { ProjectsService } from './lib/projects/projects.service';

export { Customer } from "./lib/customers/customer.model";
export { CustomersService } from './lib/customers/customers.service';

export { AuthService } from './lib/auth/auth.service';
export { AuthGuard } from './lib/auth/auth.guard';
export { TokenInterceptor } from "./lib/auth/token-interceptor";

export { NotificationService } from './lib/notification/notification.service';

export { ProjectsFacade } from "./lib/state/projects/projects.facede";
export { CustomersFacede } from './lib/state/customers/customers.facede';

// Expose project state
export { selectAllProjects, selectCurrentProject } from './lib/state'
export { ProjectsState } from './lib/state/projects/projects.reducer';
export { LoadProjects, SelectProject, AddProject, UpdateProject, DeleteProject } from './lib/state/projects/projects.actions'

