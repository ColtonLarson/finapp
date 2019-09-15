import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

import { groupsExample } from '../../../shared/fin-constants';
import { FinGroupsService } from '../../services/fin-groups.service';

@Component({
  selector: 'app-fin-groups',
  templateUrl: './fin-groups.component.html',
  styleUrls: ['./fin-groups.component.scss']
})
export class FinGroupsComponent implements OnInit {
  groupForm: FormGroup;
  groups: string[];
  displayedColumns = [ 'name' ];
  constructor(
    private fb: FormBuilder,
    private groupsService: FinGroupsService
  ) { }

  ngOnInit() {
    this.groupForm = this.fb.group({
      name: [''],
      color: ['']
    });
    this.groupsService.getGroups()
      .pipe(map(groups => this.groups = groups))
      .subscribe();
  }

  addGroup(groupName: string) {
    this.groupsService.addGroup(groupName).pipe(
      tap(group => this.groups.push(group))
    ).subscribe();
  }
}
