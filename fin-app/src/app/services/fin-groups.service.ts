import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { endpoint } from '../../shared/fin-constants';

@Injectable({
  providedIn: 'root'
})
export class FinGroupsService {
  groups: string[];

  constructor(private http: HttpClient) { }

  getGroups(): Observable<string[]> {
    if (this.groups) {
      return of(this.groups);
    }
    return this.http.get<string[]>(endpoint + 'groups')
      .pipe(
        tap(groups => this.groups = groups)
      );
  }

  addGroup(groupName: string): Observable<string> {
    const params = { group: groupName };
    return this.http.post<string>(endpoint + 'groups', params)
      .pipe(
        map(group => group),
        tap(ret => this.groups.push(ret))
      );
  }
}
