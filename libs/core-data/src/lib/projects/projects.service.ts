import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
const BASE_URL = "http://localhost:3000/";
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects'
  constructor(private httpClient: HttpClient) { }

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${BASE_URL}${this.model}`);
  }
}
