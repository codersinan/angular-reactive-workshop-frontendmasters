import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsComponent } from './project-details.component';
import { MaterialModule } from '@app/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Project } from '@app/core-data';

describe('ProjectDetailsComponent', () => {
  let component: ProjectDetailsComponent;
  let fixture: ComponentFixture<ProjectDetailsComponent>;
  const emptyProject: Project = {
    id: null,
    title: null,
    details: null,
    percentComplete: 0,
    approved: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailsComponent],
      imports: [
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsComponent);
    component = fixture.componentInstance;
    component.currentProject = emptyProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
