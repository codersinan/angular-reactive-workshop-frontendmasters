import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@app/core-data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() projects: Project[];
  @Input() readonly = false;

  @Output() selected = new EventEmitter();
  @Output() delete = new EventEmitter();
}
