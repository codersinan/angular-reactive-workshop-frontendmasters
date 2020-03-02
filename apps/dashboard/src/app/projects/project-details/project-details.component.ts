import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@app/core-data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  currentProject: Project;
  originalTitle: string;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value: Project) {
    if (value) {
      this.originalTitle = value.title;
    }
    this.currentProject = Object.assign({}, value);
  };
}
