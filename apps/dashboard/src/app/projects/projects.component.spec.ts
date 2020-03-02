import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@app/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { DebugElement } from '@angular/core';
import { Project, ProjectsService } from '@app/core-data';

describe('ProjectsComponent', () => {
  // Create my local test members
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let de: DebugElement;

  const emptyProject: Project = {
    id: null,
    title: null,
    details: null,
    percentComplete: 0,
    approved: false
  };

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        ProjectDetailsComponent,
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
      ],

    }).createComponent(ProjectsComponent);
  })
  // Instantiate test bed
  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    // Get The component instance
    component = fixture.componentInstance;
    // Get the debug element aka the element the component lives on
    de = fixture.debugElement;
    // Manually force change detection
    fixture.detectChanges();
  })

  it('should select a project', () => {
    component.selectProject(emptyProject);
    expect(component.selectedProject).toBe(emptyProject);
  })

});
