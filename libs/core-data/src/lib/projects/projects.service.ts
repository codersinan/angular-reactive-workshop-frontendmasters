import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';

import { environment } from "@env/environment";

import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects'
  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${environment.apiEndPoint}${this.model}`;
  }
  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.getUrl());
  }

  create(project: Project) {
    return this.httpClient.post(this.getUrl(), project);
  }
  update(project: Project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }
  delete(id) {
    return this.httpClient.delete(this.getUrlForId(id));
  }
}
